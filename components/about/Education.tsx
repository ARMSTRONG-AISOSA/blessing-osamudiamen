import { certifications, education } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  return (
    <section className="container-page py-14">
      <SectionHeading eyebrow="Education" title="Education & credentials" />
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="flex flex-col gap-3 rounded-2xl bg-slate-900 p-8 text-white">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-400">Degree</span>
          <h3 className="text-2xl font-semibold">{education.degree}</h3>
          <p className="text-[15px] text-slate-300">{education.institution} · {education.years}</p>
          <p className="text-sm leading-relaxed text-slate-300">{education.notes}</p>
        </article>
        <ul className="flex flex-col gap-3">
          {certifications.map((c) => (
            <li key={c.name} className="card flex flex-wrap items-center justify-between gap-2 rounded-xl px-5 py-4">
              <div>
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-slate-500">{c.issuer} · {c.date}</p>
              </div>
              <span className={c.status !== "In progress" ? "rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white" : "badge-orange"}>{c.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
