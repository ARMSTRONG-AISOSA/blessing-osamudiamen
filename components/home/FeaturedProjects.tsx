import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/profile";
import Reveal from "@/components/Reveal";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);
  return (
    <section className="container-page pt-20 sm:pt-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="eyebrow">Featured case studies</p>
          <h2 className="h2">Analysis with a “so what”</h2>
        </div>
        <Link href="/projects" className="inline-flex items-center gap-1.5 py-2.5 text-[15px] font-semibold hover:text-orange-700 active:text-orange-700">
          View all projects <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link href={`/projects?open=${p.slug}`} className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 active:-translate-y-1 hover:border-orange-300 active:border-orange-300 hover:shadow-lg active:shadow-lg">
              <div className="h-2 bg-slate-900 transition-colors group-hover:bg-orange-500" />
              <div className="flex flex-1 flex-col gap-3.5 p-7">
                <span className="badge-orange self-start">{p.category}</span>
                <h3 className="text-[22px] font-semibold">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-600">{p.problem}</p>
                <div className="mt-auto rounded-[10px] border border-slate-200 bg-slate-50 p-4">
                  <span className="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">Key result</span>
                  <span className="mt-1 block text-[15px] font-semibold">{p.keyResult}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 pt-1 text-[15px] font-semibold group-hover:text-orange-700">
                  Read case study <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
