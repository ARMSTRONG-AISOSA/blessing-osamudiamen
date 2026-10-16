import { ExternalLink, Mail, Phone } from "lucide-react";
import { site } from "@/data/profile";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const base = "flex min-h-[56px] items-center justify-center gap-2.5 rounded-xl px-5 py-4 text-base font-semibold transition-colors";

export default function ContactButtons() {
  return (
    <section aria-label="Contact Blessing" className="container-page pb-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <a href={site.phoneHref} className={`${base} border border-slate-300 bg-white text-slate-900 hover:border-orange-500 active:border-orange-500 hover:text-orange-700 active:text-orange-700`}>
          <Phone size={18} aria-hidden /> Call
        </a>
        <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className={`${base} bg-orange-500 text-slate-900 hover:bg-orange-600 active:bg-orange-600`}>
          <WhatsAppIcon /> WhatsApp
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={`${base} border border-slate-300 bg-white text-slate-900 hover:border-orange-500 active:border-orange-500 hover:text-orange-700 active:text-orange-700`}>
          <ExternalLink size={18} aria-hidden /> LinkedIn
        </a>
        <a href={`mailto:${site.email}`} className={`${base} bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-800`}>
          <Mail size={18} aria-hidden /> Email
        </a>
      </div>
    </section>
  );
}
