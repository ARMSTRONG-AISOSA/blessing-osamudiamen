import type { Project } from "@/data/profile";

/** Metrics + Problem → Methodology → Findings → Recommendations → "So what?". Shared by the modal and the case-study page. */
export default function CaseStudyContent({ project: p, heading: H = "h3" }: { project: Project; heading?: "h2" | "h3" }) {
  return (
    <div className="flex flex-col gap-6">
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {p.metrics.map((m) => (
          <div key={m.label} className="flex flex-col-reverse justify-end rounded-[10px] border border-slate-200 p-3.5">
            <dt className="mt-0.5 text-[13px] leading-snug text-slate-500">{m.label}</dt>
            <dd className="font-mono text-lg font-semibold sm:text-xl">{m.value}</dd>
          </div>
        ))}
      </dl>
      <section>
        <H className="mb-1.5 font-semibold">1 · Problem statement</H>
        <p className="leading-relaxed text-slate-700">{p.problem}</p>
      </section>
      <section>
        <H className="mb-1.5 font-semibold">2 · Methodology</H>
        <p className="mb-2 leading-relaxed text-slate-700">{p.method}</p>
        <ol className="list-decimal space-y-1 pl-5 leading-relaxed text-slate-700">{p.steps.map((s, i) => <li key={i}>{s}</li>)}</ol>
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tools and techniques">{p.tools.map((t) => <li key={t} className="rounded-md bg-slate-100 px-2 py-0.5 font-mono text-xs">{t}</li>)}</ul>
      </section>
      <section>
        <H className="mb-1.5 font-semibold">3 · Key findings</H>
        <ul className="list-disc space-y-1 pl-5 leading-relaxed text-slate-700">{p.findings.map((f, i) => <li key={i}>{f}</li>)}</ul>
      </section>
      <section className="rounded-xl border border-orange-300 bg-orange-50 px-5 py-4">
        <H className="mb-1.5 font-semibold text-orange-800">4 · Strategic recommendations</H>
        <ol className="list-decimal space-y-1 pl-5 leading-relaxed">{p.recommendations.map((r, i) => <li key={i}>{r}</li>)}</ol>
      </section>
      <section className="rounded-xl bg-slate-900 px-5 py-4 text-white">
        <H className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-400">The “so what?”</H>
        <p className="mt-1 leading-relaxed">{p.takeaway}</p>
      </section>
    </div>
  );
}
