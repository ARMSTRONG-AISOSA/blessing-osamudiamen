import { tools } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";

export default function Toolstack() {
  return (
    <section className="container-page pb-24 pt-14">
      <SectionHeading eyebrow="Toolstack" title="Core technical tools" />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((t) => (
          <li key={t.name} className="card flex flex-col gap-2.5 rounded-[14px] p-5 transition-colors hover:border-orange-300 active:border-orange-300">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-slate-900 font-mono text-[13px] font-semibold text-white">{t.abbr}</span>
              <span className="font-semibold">{t.name}</span>
            </div>
            <span className="text-sm text-slate-500">{t.use}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
