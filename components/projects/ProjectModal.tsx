"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FileDown, FolderOpen, X } from "lucide-react";
import type { Project } from "@/data/profile";

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
          </div>
          <button ref={closeRef} type="button" aria-label="Close" onClick={onClose} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-slate-700 hover:border-orange-500 active:border-orange-500">
            <X size={20} />
          </button>
        </header>

        <div className="flex flex-col gap-6 px-6 pb-8 pt-7 sm:px-8">
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {p.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse justify-end rounded-[10px] border border-slate-200 p-3.5">
                <dt className="mt-0.5 text-[13px] leading-snug text-slate-500">{m.label}</dt>
                <dd className="font-mono text-lg font-semibold sm:text-xl">{m.value}</dd>
              </div>
            ))}
          </dl>
          <section>
            <h3 className="mb-1.5 font-semibold">1 · Problem statement</h3>
            <p className="leading-relaxed text-slate-700">{p.problem}</p>
          </section>
          <section>
            <h3 className="mb-1.5 font-semibold">2 · Methodology</h3>
            <ol className="list-decimal space-y-1 pl-5 leading-relaxed text-slate-700">{p.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
            <ul className="mt-3 flex flex-wrap gap-1.5">{p.tools.map((t) => <li key={t} className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs">{t}</li>)}</ul>
          </section>
          <section>
            <h3 className="mb-1.5 font-semibold">3 · Key findings</h3>
            <ul className="list-disc space-y-1 pl-5 leading-relaxed text-slate-700">{p.findings.map((f, i) => <li key={i}>{f}</li>)}</ul>
          </section>
          <section className="rounded-xl border border-orange-300 bg-orange-50 px-5 py-4">
            <h3 className="mb-1.5 font-semibold text-orange-800">4 · Strategic recommendations</h3>
            <ol className="list-decimal space-y-1 pl-5 leading-relaxed">{p.recommendations.map((r, i) => <li key={i}>{r}</li>)}</ol>
          </section>
          <section className="rounded-xl bg-slate-900 px-5 py-4 text-white">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-400">The “so what?”</h3>
            <p className="mt-1 leading-relaxed">{p.takeaway}</p>
          </section>
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
