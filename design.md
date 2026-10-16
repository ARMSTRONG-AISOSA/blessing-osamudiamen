# Design system

The standard every page and future feature must follow, so the site stays consistent. Tailwind class names are given where they exist. Shared classes live in `app/globals.css`.

## Personality

Rigorous, precise, trustworthy, modern. It should read like a well-built financial model: clean grid, quiet colour, numbers in a monospace face, one accent used sparingly.

## Colour

| Role | Token / Tailwind | Hex | Use |
|---|---|---|---|
| Ink / primary | `slate-900` | `#0f172a` | Headings, body text on light, navy surfaces (stats band, footer, "so what" box, modal header, dark buttons) |
| Page background | `slate-50` | `#f8fafc` | `body` |
| Surface | `white` | `#ffffff` | Cards, navbar |
| Body secondary | `slate-600` | `#475569` | Paragraphs, inactive nav |
| Muted / captions | `slate-500` | `#64748b` | Labels, meta text |
| Borders | `slate-200` / `slate-300` | `#e2e8f0` / `#cbd5e1` | Card and input borders |
| Subtle fill | `slate-100` | `#f1f5f9` | Icon tiles, tool chips, secondary chip buttons |
| **Accent** | `orange-500` | `#f97316` | Primary CTA background, active nav underline, timeline dots, accent stat, decorative square |
| Accent hover | `orange-600` / `orange-700` | `#ea580c` / `#c2410c` | Primary CTA hover / tap |
| Accent text on light | `orange-700` | `#c2410c` | Eyebrows, link hover. `orange-500` text fails contrast on white |
| Accent on dark | `orange-400` | `#fb923c` | Accent text on navy (stats, footer link hover, "so what" label) |
| Accent tint | `orange-50` / `orange-300` / `orange-800` | `#fff7ed` / `#fdba74` / `#9a3412` | Category badges, impact rows, recommendation box |

Rules:
- Orange is **reserved for high-priority accents**: primary CTA, key badges, hover/tap highlights, one accent stat. Never use it for large fills or body text.
- Text on orange buttons is **slate-900, not white**: white on orange-500 fails WCAG contrast.
- Keep text at ≥ 4.5:1 contrast.

## Typography

| Element | Font | Size / weight |
|---|---|---|
| Family (sans) | IBM Plex Sans (`font-sans`, `--font-sans`) | — |
| Family (mono) | IBM Plex Mono (`font-mono`, `--font-mono`) | used for **figures, dates, eyebrows, labels, tool chips** |
| H1 hero | sans | `text-4xl sm:text-5xl lg:text-[56px]`, bold, `leading-[1.08]`, `tracking-tight` |
| H1 page | sans | `text-4xl sm:text-5xl`, bold |
| H2 section (`.h2`) | sans | `text-3xl sm:text-[34px]`, bold, `tracking-tight` |
| H3 card | sans | 20–22px, semibold |
| Eyebrow (`.eyebrow`) | mono | 13px, semibold, uppercase, `tracking-[0.08em]`, `orange-700` |
| Body | sans | 15–18px, `leading-relaxed`, slate-600/700 |
| Stat figure | mono | `text-2xl sm:text-4xl`, semibold |

Every section heading is an **eyebrow + H2** via `<SectionHeading eyebrow="…" title="…" />`. Current section titles: "Where I add value", "Analysis with a "so what"", "Certifications", "Work history", "Internships & job simulations", "Education & credentials", "Core technical tools".

## Layout & spacing

- Container: `.container-page` = `max-w-6xl` (1152px) centred, `px-5 sm:px-6`.
- Mobile-first. Grids collapse to one column on phones: competencies `md:grid-cols-3`, featured projects `md:grid-cols-2`, projects `md:2 / lg:3`, certifications `sm:2 / lg:3`, tools `sm:2 / lg:3`, contact buttons `2 / lg:4`.
- Section rhythm: `pt-20 sm:pt-24` between Home sections, `py-14` on About, bottom section `pb-24`.
- Radii: cards `rounded-2xl` (16px), buttons `rounded-[10px]`, chips `rounded-full` or `rounded-md`, hero image backdrop `rounded-3xl`.
- Touch targets ≥ 44px (`min-h-[44px]`). Contact buttons are 56px.

## Components

| Component | Spec |
|---|---|
| `.btn-primary` | orange-500 bg, slate-900 bold text, hover orange-600, active orange-700 |
| `.btn-secondary` | white bg, 1.5px slate-900 border, hover/active orange-500 border + orange-700 text (+ orange-50 bg on tap) |
| Dark button | slate-900 bg, white text, hover/active slate-800 |
| `.card` | white, 1px slate-200 border, `rounded-2xl`; interactive cards add `hover:border-orange-300` |
| `.badge-orange` | orange-50 bg, orange-300 border, orange-800 text, 12px semibold, pill (category tags, "In progress") |
| Navy status pill | slate-900 bg, white 12px ("Qualified", "Completed") |
| Credential pills (hero) | navy / orange-tint / outline variants |
| Stat band | full-width slate-900, mono figures, first figure orange-400 |
| "So what?" box | slate-900 bg, white text, mono uppercase orange-400 label |
| Recommendation box | orange-50 bg, orange-300 border, orange-800 heading |
| Timeline | orange-500 ring dot + slate-200 line, card per role, orange "Impact" row |
| Project modal | slate-900 header with orange category pill, 4 mono metric tiles, numbered sections 1–4, "so what" box, actions: Download PDF (primary) · Open project files (secondary) · Close |
| Filter tabs | white pill group, active = slate-900 pill animated with Framer `layoutId="tab-pill"`, counts in mono |

## Imagery

- Portrait `public/images/portrait.png` has a **transparent background**. On Home it sits on the **left** of the hero (top on mobile) over a slate-900 rounded block covering the bottom 78%, with an orange-500 outline square at the top right and a white availability chip ("Remote · Open to Accounting & Financial Analyst roles").
- On About, the portrait sits in a slate-900 rounded card.

## Icons

lucide-react, stroke icons, 14–22px, always `aria-hidden` when decorative. WhatsApp uses the inline SVG `WhatsAppIcon`. LinkedIn uses `ExternalLink`. No emoji.

## Interaction states (required)

- **Text links are never underlined** (`a { text-decoration: none }`). They change colour on hover **and** on tap (`hover:` + matching `active:` class), e.g. footer links → `orange-400`, nav → slate-900, inline links → `orange-700`.
- **Every button** changes colour on hover and on tap (see Components).
- `future.hoverOnlyWhenSupported` is on, so hover styles apply only on hover-capable devices. Phones get `active:` feedback that clears on release.
- Transitions: `transition-colors duration-150`.
- Focus: `:focus-visible` → 2px orange-500 ring with offset.
- Motion: `Reveal` fades sections up 16px once in view. It respects `prefers-reduced-motion`. Modal: fade + 24px rise.

## Accessibility

Real `<a>`/`<button>` elements, `aria-label` on icon-only buttons, `aria-current` on the active nav link, `role="tablist"/"tab"` + `aria-selected` on filters, `role="dialog" aria-modal` + Esc to close + focus return on the modal, skip-to-content link, `alt` text on the portrait.

## Content voice

Short, quantified, first person on About. Every case study follows **Problem → Methodology → Findings → Recommendations → "So what?"**. Numbers use real currency symbols (₦, $, £) exactly as in her PDFs.
