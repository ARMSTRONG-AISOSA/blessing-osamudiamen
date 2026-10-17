"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { CATEGORIES, projects } from "@/data/profile";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type Filter = (typeof CATEGORIES)[number];

const readOpen = () => new URLSearchParams(window.location.search).get("open");

export default function ProjectsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  // ?open=<slug> is read after mount (not with useSearchParams) so the card grid is server-rendered for crawlers
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const selected = projects.find((p) => p.slug === openSlug) ?? null;

  useEffect(() => {
    const sync = () => setOpenSlug(readOpen());
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const shown = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);
  const count = (c: Filter) => (c === "All" ? projects.length : projects.filter((p) => p.category === c).length);

  // Deep-linkable modal: /projects?open=<slug> (back button closes it)
  const open = (slug: string) => {
    window.history.pushState(null, "", `/projects?open=${slug}`);
    setOpenSlug(slug);
  };
  const close = useCallback(() => {
    window.history.pushState(null, "", "/projects");
    setOpenSlug(null);
  }, []);

  return (
    <>
      <LayoutGroup>
        <div role="tablist" aria-label="Filter projects" className="mb-8 flex w-fit max-w-full flex-wrap gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5">
          {CATEGORIES.map((c) => {
            const active = c === filter;
            return (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(c)}
                className={`relative min-h-[44px] rounded-lg px-4 py-2.5 text-[15px] font-semibold transition-colors ${active ? "text-white" : "text-slate-600 hover:text-slate-900 active:text-slate-900"}`}
              >
                {active && <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-lg bg-slate-900" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                <span className="relative">
                  {c} <span className={`font-mono text-xs ${active ? "text-orange-400" : "text-slate-400"}`}>{count(c)}</span>
                </span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* initial={false}: cards are visible in the server HTML; only filter changes animate */}
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p) => <ProjectCard key={p.slug} project={p} onOpen={() => open(p.slug)} />)}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <AnimatePresence>{selected && <ProjectModal key={selected.slug} project={selected} onClose={close} />}</AnimatePresence>
    </>
  );
}
