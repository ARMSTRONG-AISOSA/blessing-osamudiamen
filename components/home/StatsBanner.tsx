import { stats } from "@/data/profile";

export default function StatsBanner() {
  return (
    <section aria-label="Highlights" className="bg-slate-900 text-white">
      <dl className="container-page grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse justify-end gap-1.5">
            <dt className="text-[15px] text-slate-300">{s.label}</dt>
            <dd className={`font-mono text-2xl font-semibold sm:text-4xl ${s.accent ? "text-orange-400" : "text-white"}`}>{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
