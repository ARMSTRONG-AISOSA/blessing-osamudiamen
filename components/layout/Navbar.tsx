"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  // "Projects" stays active on /projects/<slug>
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav aria-label="Main" className="container-page flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-2.5 text-slate-900" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 font-mono text-sm font-semibold text-white">{site.initials}</span>
          <span className="text-[17px] font-semibold">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`border-b-2 px-3.5 py-2.5 text-[15px] transition-colors ${active ? "border-orange-500 font-semibold text-slate-900" : "border-transparent font-medium text-slate-600 hover:text-slate-900 active:text-slate-900"}`}
              >
                {l.label}
              </Link>
            );
          })}
          <a href={site.resumeUrl} download className="ml-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 active:bg-slate-800">
            Resume
          </a>
        </div>

        <button type="button" className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-page flex flex-col py-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? "page" : undefined} className={`py-3 text-base ${isActive(l.href) ? "font-semibold text-slate-900" : "text-slate-600 hover:text-slate-900 active:text-slate-900"}`}>
                {l.label}
              </Link>
            ))}
            <a href={site.resumeUrl} download className="btn-primary my-3">Download Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
