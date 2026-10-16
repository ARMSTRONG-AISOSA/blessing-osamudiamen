import { experience } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Timeline() {
  return (
    <section className="container-page py-14">
      <SectionHeading eyebrow="Experience" title="Work history" />
      <ol className="flex flex-col">
        {experience.map((j, i) => (
          <li key={i} className="flex gap-4 sm:gap-6">
            <div className="flex shrink-0 flex-col items-center" aria-hidden>
              <span className="mt-2 h-3.5 w-3.5 rounded-full border-[3px] border-orange-500 bg-white" />
              <span className="w-0.5 flex-1 bg-slate-200" />
            </div>
            <Reveal className="mb-6 min-w-0 flex-1">
              <article className="card flex flex-col gap-3 p-6 sm:px-7">
                <div className="flex flex-wrap justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{j.role}</h3>
                    <p className="text-[15px] text-slate-600">{j.company}</p>
                  </div>
                  <span className="pt-1 font-mono text-[13px] font-semibold text-slate-600">{j.start} – {j.end}</span>
                </div>
                <ul className="list-disc space-y-1 pl-[18px] text-[15px] leading-relaxed text-slate-700">
                  {j.achievements.map((a, k) => <li key={k}>{a}</li>)}
                </ul>
                {j.impact && (
                  <div className="flex flex-wrap items-center gap-2.5 rounded-[10px] border border-orange-200 bg-orange-50 px-3.5 py-3">
                    <span className="font-mono text-xs font-semibold uppercase text-orange-800">Impact</span>
                    <span className="text-[15px] font-semibold">{j.impact}</span>
                  </div>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
