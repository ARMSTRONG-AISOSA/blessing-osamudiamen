import { Award } from "lucide-react";

export default function CertificationBadge({ name, issuer, date, status }: { name: string; issuer: string; date: string; status: string }) {
  const done = status !== "In progress";
  return (
    <div className="card flex h-full flex-col gap-3 p-5">
      <div className="flex items-center justify-between gap-2">
        <Award size={26} strokeWidth={1.8} className="text-slate-900" aria-hidden />
        <span className={done ? "rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white" : "badge-orange"}>{status}</span>
      </div>
      <p className="text-[17px] font-semibold">{name}</p>
      <p className="text-sm text-slate-500">{issuer}</p>
      <p className="mt-auto font-mono text-xs font-semibold text-slate-600">{date}</p>
    </div>
  );
}
