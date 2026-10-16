import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { hero, site } from "@/data/profile";

const tone = {
  navy: "bg-slate-900 text-white",
  orange: "border border-orange-300 bg-orange-50 text-orange-800",
  outline: "border border-slate-300 bg-white text-slate-900",
} as const;

export default function Hero() {
  return (
    <section className="container-page flex flex-col items-center gap-12 py-14 md:flex-row md:gap-16 md:py-20">
      {/* Portrait — LEFT on desktop, top on mobile */}
      <div className="relative w-full max-w-[340px] shrink-0 sm:max-w-[400px] md:w-[42%] md:max-w-[460px]">
        <div className="absolute inset-x-0 bottom-0 h-[78%] rounded-3xl bg-slate-900" aria-hidden />
        <div className="absolute -right-2.5 top-[26%] h-[72px] w-[72px] rounded-2xl border-[3px] border-orange-500" aria-hidden />
        <Image
          src={site.portrait}
          alt={`Portrait of ${site.name}, ${site.jobTitle}`}
          width={449}
          height={560}
          priority
          sizes="(max-width: 768px) 340px, 460px"
          className="relative h-auto w-full"
        />
        <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.18)]">
          <span className="h-2.5 w-2.5 rounded-full bg-orange-500" aria-hidden />
          <span className="text-sm font-semibold">{hero.availability}</span>
        </div>
      </div>

      {/* Copy — RIGHT */}
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">{hero.headline}</h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate-600">{hero.subheadline}</p>
        <ul className="flex flex-wrap gap-2" aria-label="Credentials">
          {hero.credentials.map((c) => (
            <li key={c.label} className={`rounded-full px-3 py-1.5 text-[13px] font-semibold ${tone[c.tone]}`}>{c.label}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/projects" className="btn-primary group">
            Explore Case Studies <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <a href={site.resumeUrl} download className="btn-secondary">
            <Download size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
