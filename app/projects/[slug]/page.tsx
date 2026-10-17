import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronRight, FileDown, FolderOpen, Mail } from "lucide-react";
import CaseStudyContent from "@/components/projects/CaseStudyContent";
import JsonLd from "@/components/JsonLd";
import { projects, site } from "@/data/profile";
import { caseStudyDescription, caseStudyLd, graph, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.title} | Case Study by ${site.name}`,
    description: caseStudyDescription(p),
    path: `/projects/${p.slug}`,
    type: "article",
    keywords: [...p.keywords, ...p.tools, p.category, site.name, "Financial analyst case study"],
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = projects.filter((x) => x.slug !== p.slug);

  return (
    <article className="container-page pb-24 pt-8 md:pt-12">
      <JsonLd data={graph(caseStudyLd(p))} />

      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          <li><Link href="/" className="hover:text-orange-700 active:text-orange-700">Home</Link></li>
          <li aria-hidden><ChevronRight size={14} /></li>
          <li><Link href="/projects" className="hover:text-orange-700 active:text-orange-700">Projects</Link></li>
          <li aria-hidden><ChevronRight size={14} /></li>
          <li aria-current="page" className="font-medium text-slate-700">{p.title}</li>
        </ol>
      </nav>

      <header className="mt-6 flex flex-col gap-3 rounded-[18px] bg-slate-900 px-6 py-8 text-white sm:px-10 sm:py-10">
        <span className="self-start rounded-full bg-orange-500 px-2.5 py-1 text-xs font-bold text-slate-900">{p.category}</span>
        <p className="text-sm text-slate-300">{p.context}</p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{p.title}</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-200">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-orange-400">Key result · </span>
          {p.keyResult}
        </p>
        <p className="text-sm text-slate-400">
          Case study by <Link href="/about" className="font-semibold text-slate-200 hover:text-orange-400 active:text-orange-400">{site.name}, ACA</Link> · {site.jobTitle}
        </p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <div className="card p-6 sm:p-8">
          <CaseStudyContent project={p} heading="h2" />
        </div>

        <aside className="flex flex-col gap-4 lg:sticky lg:top-24" aria-label="Downloads and author">
          <div className="card flex flex-col gap-3 p-5">
            <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">Files</h2>
            <a href={p.pdf} download className="btn-primary text-[15px]"><FileDown size={18} aria-hidden /> Download PDF</a>
            <a href={p.drive} target="_blank" rel="noopener noreferrer" className="btn-secondary text-[15px]"><FolderOpen size={18} aria-hidden /> Open project files</a>
          </div>
          <div className="card flex flex-col gap-4 p-5">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-slate-900 pt-1.5">
                <Image src={site.portrait} alt={`Portrait of ${site.name}`} width={449} height={560} sizes="56px" className="h-auto w-full" />
              </div>
              <div>
                <p className="font-semibold leading-tight">{site.name}, ACA</p>
                <p className="text-sm text-slate-500">{site.jobTitle}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:text-orange-700 active:text-orange-700">About me <ArrowRight size={16} aria-hidden /></Link>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 text-[15px] font-semibold hover:text-orange-700 active:text-orange-700"><Mail size={16} aria-hidden /> Email me</a>
            </div>
          </div>
        </aside>
      </div>

      <section className="pt-16" aria-labelledby="more-case-studies">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <p className="eyebrow">Keep reading</p>
            <h2 id="more-case-studies" className="h2">More case studies</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-1.5 py-2.5 text-[15px] font-semibold hover:text-orange-700 active:text-orange-700">
            <ArrowLeft size={16} aria-hidden /> All projects
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/projects/${o.slug}`} className="card group flex h-full flex-col gap-2 p-5 transition-colors hover:border-orange-300 active:border-orange-300">
                <span className="badge-orange self-start">{o.category}</span>
                <span className="text-lg font-semibold leading-snug group-hover:text-orange-700 group-active:text-orange-700">{o.title}</span>
                <span className="text-sm text-slate-600">{o.keyResult}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
