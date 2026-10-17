import { ExternalLink, Mail, Phone } from "lucide-react";
import { site } from "@/data/profile";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-page flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-white">Let’s talk numbers.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-400 active:text-orange-400"><Mail size={14} aria-hidden />{site.email}</a></li>
            <li><a href={site.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-400 active:text-orange-400"><Phone size={14} aria-hidden />{site.phone}</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-orange-400 active:text-orange-400"><ExternalLink size={14} aria-hidden />LinkedIn</a></li>
          </ul>
        </div>
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary self-start sm:self-auto">
          <WhatsAppIcon /> Get in touch
        </a>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Designed and maintained by{" "}
            <a href={site.credit.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-300 transition-colors hover:text-orange-400 active:text-orange-400">{site.credit.label}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
