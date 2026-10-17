"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileDown, FolderOpen, X } from "lucide-react";
import type { Project } from "@/data/profile";
import CaseStudyContent from "./CaseStudyContent";

export default function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prev?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/60 px-4 py-10 sm:py-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="w-full max-w-3xl overflow-hidden rounded-[18px] bg-white shadow-2xl"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <header className="flex items-start justify-between gap-4 bg-slate-900 px-6 py-7 text-white sm:px-8">
          <div className="flex flex-col gap-2.5">
            <span className="self-start rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold text-slate-900">{p.category}</span>
            <p className="text-sm text-slate-300">{p.context}</p>
            <h2 id="project-modal-title" className="text-2xl font-semibold leading-tight sm:text-[26px]">{p.title}</h2>
            <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1.5 self-start py-1 text-sm font-semibold text-slate-300 hover:text-orange-400 active:text-orange-400">
              Open as a page <ArrowUpRight size={15} aria-hidden />
            </Link>
          </div>
          <button ref={closeRef} type="button" aria-label="Close" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-slate-700 hover:border-orange-500 active:border-orange-500">
            <X size={20} />
          </button>
        </header>

        <div className="flex flex-col gap-6 px-6 pb-8 pt-7 sm:px-8">
          <CaseStudyContent project={p} />
          <div className="flex flex-wrap gap-3">
            <a href={p.pdf} download className="btn-primary text-[15px]"><FileDown size={18} aria-hidden /> Download case study (PDF)</a>
            <a href={p.drive} target="_blank" rel="noopener noreferrer" className="btn-secondary text-[15px]"><FolderOpen size={18} aria-hidden /> Open project files</a>
            <button type="button" onClick={onClose} className="btn-secondary text-[15px]">Close</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
