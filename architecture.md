# Architecture

Record of the stack, versions, structure and architectural decisions. **Keep this current.** When a decision changes, edit the relevant section and add a line to the Decision log at the bottom.

## Stack & versions

| Layer | Package | Declared (`package.json`) | Installed at last build |
|---|---|---|---|
| Framework | `next` | `^16.4.2` | 16.4.2 |
| UI library | `react`, `react-dom` | `^19.2.0` | 19.3.1 |
| Styling | `tailwindcss` (v3, **not** v4) | `^3.4.19` | 3.4.19 |
| CSS tooling | `postcss`, `autoprefixer` | `^8.4.49`, `^10.4.20` | 8.5.30, 10.6.1 |
| Animation | `framer-motion` | `^14.3.0` | 14.3.0 |
| Icons | `lucide-react` | `^1.58.0` | 1.58.0 |
| Language | `typescript` (strict) | `^5.7.0` | 5.9.3 |
| Runtime | Node.js | `>=20.9.0` (`engines`) | 22.x |
| Fonts | `next/font/google`: IBM Plex Sans (400–700), IBM Plex Mono (500–600) | — | — |
| Hosting | Vercel | — | https://blessing-osamudiamen.vercel.app |
| Repo | GitHub | — | https://github.com/ARMSTRONG-AISOSA/blessing-osamudiamen.git |

Notes:
- Next 16 builds with **Turbopack** by default, and `next lint` no longer exists, so there is no lint script.
- On the first Next 16 build, Next rewrote `tsconfig.json` to `"jsx": "react-jsx"`. Leave it.
- lucide-react v1 has **no brand icons** (no LinkedIn/WhatsApp). LinkedIn uses `ExternalLink`, and WhatsApp is an inline SVG in `components/WhatsAppIcon.tsx`.

## Rendering model

- **App Router**, all routes **statically prerendered** (`○ Static`): `/`, `/about`, `/projects`, `/robots.txt`, `/sitemap.xml`.
- Server Components by default. Client components (`"use client"`) are only where interactivity needs them: `Navbar` (mobile menu, active route), `Reveal` (scroll animation), `ProjectsExplorer`, `ProjectCard`, `ProjectModal`.
- `/projects` reads `?open=<slug>` with `useSearchParams` to open a case-study modal, so modals are deep-linkable. The explorer is wrapped in `<Suspense>` so the page can still be prerendered.

## Folder structure

```
app/
  layout.tsx            Root layout: fonts, global metadata, JSON-LD <script>, Navbar, Footer, skip link
  page.tsx              Home  → Hero, StatsBanner, Competencies, FeaturedProjects, Certifications
  about/page.tsx        About → Narrative, ContactButtons, Timeline, VirtualExperience, Education, Toolstack
  projects/page.tsx     Projects → SectionHeading + <Suspense><ProjectsExplorer/></Suspense>
  sitemap.ts, robots.ts Generated from site.url
  globals.css           Tailwind layers + shared component classes (.btn-primary, .card, …)
components/
  layout/               Navbar, Footer
  home/ about/ projects/  Page sections (one file per section)
  SectionHeading, Reveal, CertificationBadge, WhatsAppIcon   shared pieces
data/profile.ts         SINGLE SOURCE OF TRUTH for all content (typed)
lib/seo.ts              pageMetadata() helper + personJsonLd()
public/
  images/portrait.png   Transparent-background headshot, 449×560
  Blessing-Osamudiamen-Resume.pdf   CV served by every Resume button
  case-studies/*.pdf    Five downloadable case-study reports
```

## Data flow

`data/profile.ts` exports typed objects: `site`, `hero`, `stats`, `competencies`, `certifications`, `about`, `experience`, `virtualExperience`, `education`, `tools`, `projects`, `CATEGORIES`. Components import what they need and render it. **No copy is hard-coded in JSX** except section headings and eyebrows.

`Project` type fields: `slug, category, featured?, context, title, problem, method, tools[], takeaway, keyResult, metrics[{value,label}], steps[], findings[], recommendations[], drive, pdf`.
- `featured: true` puts a project on the Home page (currently Dangote + Sales Dashboard).
- `drive`: the Google Drive folder with the model files. `pdf`: the path under `/public/case-studies/`.

## SEO

- Global metadata in `app/layout.tsx`: `metadataBase` = `site.url`, title template `%s | Blessing Osamudiamen`, OpenGraph `type: profile` with the portrait image, Twitter card, robots index/follow, `keywords`.
- Per-page metadata via `pageMetadata({ title, description, path })` in `lib/seo.ts`, which sets the canonical URL and OpenGraph/Twitter tags.
- JSON-LD `Person` schema (`personJsonLd()`): name, jobTitle, url, image, email, telephone, alumniOf (University of Benin), knowsAbout, `hasCredential` (degree + every certification with issuer and date), `sameAs` (LinkedIn, WhatsApp). **Never** add an address or birthDate.
- `sitemap.xml` and `robots.txt` are generated from `site.url`.

## Contact links (canonical values in `site`)

| Channel | Href |
|---|---|
| Email | `mailto:blessingosariemen75@gmail.com` |
| Phone (call) | `tel:+2348153629437` |
| WhatsApp | `https://wa.me/2348153629437` |
| LinkedIn | `https://www.linkedin.com/in/blessing-osamudiamen/` |

## Deployment

- Vercel, framework preset **Next.js**, default build (`next build`) and output. No environment variables are needed.
- Production domain: `blessing-osamudiamen.vercel.app`. If a custom domain is added, update `site.url` and the README.

## Decision log

| Date | Decision | Why |
|---|---|---|
| 2026-10-16 | Next.js App Router + Tailwind + Framer Motion + Lucide | Owner's brief (SEO/SSR, utility CSS, smooth tab transitions) |
| 2026-10-16 | All content centralised in `data/profile.ts` | CV details can change without touching components |
| 2026-10-16 | TypeScript strict | Typed content catches missing fields at build time |
| 2026-10-16 | Tailwind **v3.4** (not v4) | Stable `tailwind.config.ts` + `@apply` component classes. Moving to v4 is a separate migration |
| 2026-10-16 | Project modal state in the URL (`?open=slug`) | Deep links from Home cards and shareable case studies |
| 2026-10-16 | Case-study figures only from her PDFs/CV | No invented numbers on a finance portfolio |
| 2026-10-17 | `lucide-react` v1 + inline WhatsApp SVG | v1 dropped brand icons |
| 2026-10-17 | Upgraded **Next 15.5 → 16.4**, React → 19.2+ | Owner requirement. `lint` script removed (Next 16) |
| 2026-10-17 | `future.hoverOnlyWhenSupported: true` in Tailwind | Stops hover colours sticking after a tap on phones; `active:` handles tap feedback |
| 2026-10-17 | Live URL `https://blessing-osamudiamen.vercel.app` set in `site.url` | Hosting on Vercel |
