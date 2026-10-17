/** Eyebrow + title. As an h1 the eyebrow sits inside the heading, so the page's main keywords are part of the H1. */
export default function SectionHeading({ eyebrow, title, as: Tag = "h2", children }: { eyebrow: string; title: string; as?: "h1" | "h2"; children?: React.ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      {Tag === "h1" ? (
        <h1 className="flex flex-col gap-2">
          <span className="eyebrow">{eyebrow}</span>
          <span className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{title}</span>
        </h1>
      ) : (
        <>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2">{title}</h2>
        </>
      )}
      {children}
    </div>
  );
}
