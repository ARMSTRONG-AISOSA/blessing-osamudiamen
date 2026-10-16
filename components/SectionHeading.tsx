export default function SectionHeading({ eyebrow, title, as: Tag = "h2", children }: { eyebrow: string; title: string; as?: "h1" | "h2"; children?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <p className="eyebrow">{eyebrow}</p>
      <Tag className={Tag === "h1" ? "text-4xl font-bold leading-tight tracking-tight sm:text-5xl" : "h2"}>{title}</Tag>
      {children}
    </div>
  );
}
