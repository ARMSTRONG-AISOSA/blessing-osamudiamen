"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileDown, FolderOpen } from "lucide-react";
import type { Project } from "@/data/profile";

export default function ProjectCard({ project: p, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
      className="card flex flex-col gap-4 p-7 transition-colors hover:border-orange-300 active:border-orange-300"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="badge-orange">{p.category}</span>
        <span className="text-xs font-medium text-slate-500">{p.context}</span>
      </div>
      <h2 className="text-[21px] font-semibold leading-snug">{p.title}</h2>
      <div>
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">Problem</h3>
        <p className="mt-1 text-[15px] leading-relaxed text-slate-700">{p.problem}</p>
      </div>
      <div>
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">Methodology &amp; tools</h3>
        <p className="mb-2 mt-1 text-[15px] leading-relaxed text-slate-700">{p.method}</p>
        <ul className="flex flex-wrap gap-1.5">
          {p.tools.map((t) => <li key={t} className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium">{t}</li>)}
        </ul>
      </div>
      <div className="rounded-[10px] bg-slate-900 px-4 py-3.5 text-white">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-orange-400">The “so what?”</h3>
        <p className="mt-1 text-[15px] leading-relaxed">{p.takeaway}</p>
      </div>
      <div className="mt-auto flex flex-col gap-2.5">
        <button type="button" onClick={onOpen} className="btn-secondary text-[15px]">
          View Full Analysis <ArrowRight size={16} />
        </button>
        <div className="flex gap-2.5">
          <a href={p.pdf} download className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-slate-100 px-3 text-sm font-semibold hover:bg-orange-50 active:bg-orange-50 hover:text-orange-800 active:text-orange-800">
            <FileDown size={16} aria-hidden /> PDF
          </a>
          <a href={p.drive} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-[10px] bg-slate-100 px-3 text-sm font-semibold hover:bg-orange-50 active:bg-orange-50 hover:text-orange-800 active:text-orange-800">
            <FolderOpen size={16} aria-hidden /> Project files
          </a>
        </div>
      </div>
    </motion.article>
  );
}
