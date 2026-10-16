import { virtualExperience } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function VirtualExperience() {
  return (
    <section className="container-page py-14">
      <SectionHeading eyebrow="Virtual experience" title="Internships & job simulations" />
      <div className="grid gap-5 md:grid-cols-2">
        {virtualExperience.map((v) => (
          <article key={v.title} className="card flex flex-col gap-3 p-6 transition-colors hover:border-orange-300 active:border-orange-300">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="text-[15px] text-slate-600">{v.org}</p>
              </div>
              <span className="font-mono text-[13px] font-semibold text-slate-600">{v.date}</span>
            </div>
            <ul className="list-disc space-y-1 pl-[18px] text-[15px] leading-relaxed text-slate-700">
              {v.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
