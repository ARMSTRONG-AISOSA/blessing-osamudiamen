import { BarChart3, Database, ShieldCheck } from "lucide-react";
import { competencies } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const icons = { chart: BarChart3, shield: ShieldCheck, database: Database };

export default function Competencies() {
  return (
    <section className="container-page pt-20 sm:pt-24">
      <SectionHeading eyebrow="Core competencies" title="Where I add value" />
      <div className="grid gap-6 md:grid-cols-3">
        {competencies.map((c, i) => {
          const Icon = icons[c.icon];
          return (
            <Reveal key={c.title} delay={i * 0.08}>
              <article className="card flex h-full flex-col gap-4 p-7 transition-colors hover:border-orange-300 active:border-orange-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-slate-100 text-slate-900"><Icon size={22} aria-hidden /></span>
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <ul className="list-disc space-y-1.5 pl-[18px] text-[15px] text-slate-600">
                  {c.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
