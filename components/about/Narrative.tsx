import Image from "next/image";
import { about, site } from "@/data/profile";

export default function Narrative() {
  return (
    <section className="container-page flex flex-col gap-12 py-14 md:flex-row md:items-start md:gap-14 md:py-20">
      <div className="w-full max-w-[300px] shrink-0 overflow-hidden rounded-[20px] bg-slate-900 pt-6">
        <Image src={site.portrait} alt={`Portrait of ${site.name}`} width={449} height={560} sizes="300px" className="h-auto w-full" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-5">
        <p className="eyebrow">About me</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{about.headline}</h1>
        <p className="text-lg leading-relaxed text-slate-600">{about.narrative}</p>
        <dl className="grid gap-3 pt-2 sm:grid-cols-3">
          {about.facts.map((f) => (
            <div key={f.label} className="card rounded-xl p-4">
              <dt className="font-mono text-xs font-semibold uppercase text-slate-500">{f.label}</dt>
              <dd className="mt-1 font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
