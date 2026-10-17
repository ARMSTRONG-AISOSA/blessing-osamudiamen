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
| Runtime | Node.js | `>=20.9.0` (`engines`) | 24.19 (owner's machine) |
| Fonts | `next/font/google`: IBM Plex Sans (400–700), IBM Plex Mono (500–600) | — | — |
| Hosting | Vercel | — | https://blessing-osamudiamen.vercel.app |
| Repo | GitHub | — | https://github.com/ARMSTRONG-AISOSA/blessing-osamudiamen.git |

Notes:
- Next 16 builds with **Turbopack** by default, and `next lint` no longer exists, so there is no lint script.
- On the first Next 16 build, Next rewrote `tsconfig.json` to `"jsx": "react-jsx"`. Leave it.
- lucide-react v1 has **no brand icons** (no LinkedIn/WhatsApp). LinkedIn uses `ExternalLink`, and WhatsApp is an inline SVG in `components/WhatsAppIcon.tsx`.

## Rendering model

- **App Router**, all routes **statically prerendered**: `/`, `/about`, `/projects`, `/projects/[slug]` (5 pages via `generateStaticParams`, `dynamicParams = false`), `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/icon.svg`, `/apple-icon`, `/llms.txt`.
- Server Components by default. Client components (`"use client"`) are only where interactivity needs them: `Navbar` (mobile menu, active route), `Reveal` (scroll animation), `ProjectsExplorer`, `ProjectCard`, `ProjectModal`.
- `/projects` opens a case-study modal from `?open=<slug>`, read from `window.location` **after mount** (plus `history.pushState` / `popstate`). **Don't switch back to `useSearchParams`**: it forces a client-side-rendering bailout, so the card grid would vanish from the static HTML that crawlers read.
- `AnimatePresence initial={false}` in `ProjectsExplorer` keeps the cards visible in the server HTML (no `opacity:0` before hydration).

## Folder structure

```
app/
  layout.tsx            Root layout: fonts, global metadata, JSON-LD <script>, Navbar, Footer, skip link
  page.tsx              Home  → Hero, StatsBanner, Competencies, FeaturedProjects, Certifications
  about/page.tsx        About → Narrative, ContactButtons, Timeline, VirtualExperience, Education, Toolstack
  projects/page.tsx     Projects → SectionHeading + ProjectsExplorer
  projects/[slug]/page.tsx  One static page per case study (metadata + Article JSON-LD)
  sitemap.ts, robots.ts Generated from site.url / seo.updated
  manifest.ts, icon.svg, apple-icon.tsx   Web manifest, favicon, iOS icon
  llms.txt/route.ts     Plain-text site summary for AI search, generated from data
  globals.css           Tailwind layers + shared component classes (.btn-primary, .card, …)
components/
  layout/               Navbar, Footer
  home/ about/ projects/  Page sections (one file per section); projects/CaseStudyContent is shared by modal + page
  SectionHeading, Reveal, CertificationBadge, WhatsAppIcon, JsonLd   shared pieces
data/profile.ts         SINGLE SOURCE OF TRUTH for all content (typed), incl. the `seo` object
lib/seo.ts              pageMetadata(), caseStudyDescription(), JSON-LD graph builders
public/
  images/portrait.png   Transparent-background headshot, 449×560
  Blessing-Osamudiamen-Resume.pdf   CV served by every Resume button
  case-studies/*.pdf    Five downloadable case-study reports
```

## Data flow

`data/profile.ts` exports typed objects: `site`, `seo`, `hero`, `stats`, `competencies`, `certifications`, `about`, `experience`, `virtualExperience`, `education`, `tools`, `projects`, `CATEGORIES`. Components import what they need and render it. **No copy is hard-coded in JSX** except section headings and eyebrows.

`Project` type fields: `slug, category, featured?, context, title, problem, method, tools[], takeaway, keyResult, metrics[{value,label}], steps[], findings[], recommendations[], drive, pdf, keywords[]`.
- `slug` is the case-study URL (`/projects/<slug>`). Changing it breaks indexed links.
- `featured: true` puts a project on the Home page (currently Dangote + Sales Dashboard).
- `keywords`: search terms for that case-study page. Facts from its PDF only.
- `drive`: the Google Drive folder with the model files. `pdf`: the path under `/public/case-studies/`.

## SEO

All SEO copy lives in `seo` in `data/profile.ts`: `updated` (content date), name forms, `keywords`, `pages.{home,about,projects}.{title,description}`, issuer/university URLs, verification codes.

- **Metadata.** Global defaults are in `app/layout.tsx`: `metadataBase`, keywords, OpenGraph `profile` with first/last name, Twitter, googleBot `max-image-preview:large` / `max-snippet:-1`, applicationName/creator/publisher, `formatDetection` off, and verification tags when the codes are set. Each page calls `pageMetadata({ title, description, path, keywords?, type? })`, which sets an **absolute** title, the canonical URL, keywords and OG/Twitter tags (`profile` | `article` | `website`). Case-study descriptions are `keyResult + takeaway`, trimmed to about 158 characters.
- **JSON-LD (one `@graph` per page, nodes linked by `@id`).**
  - The layout renders WebSite (`/#website`) and Person (`/#person`). Person has given/family name, ACA, alternate names, job titles, two Occupations (O*NET codes + skills), worksFor (the current job), alumniOf, knowsAbout (competencies + tools), every credential with issuer and URL, ContactPoints (email/phone, WhatsApp) and sameAs (LinkedIn).
  - Pages add their own nodes: Home = WebPage; About = ProfilePage (mainEntity Person) + BreadcrumbList; Projects = CollectionPage + ItemList + BreadcrumbList; case study = WebPage + Article (author Person, PDF as associatedMedia) + BreadcrumbList.
  - **Never** add an address, birthDate or nationality.
- **H1s.** Each H1 includes the page's main keywords. On Home, About and Projects the eyebrow is rendered *inside* the H1.
- **sitemap.xml.** It lists 3 pages, 5 case-study pages, the CV PDF and the 5 case-study PDFs, with portrait image entries on Home/About.
- **Automatic dates (`lib/content-dates.ts`).** `lastChanged(...paths)` runs `git log -1 --format=%cI -- <paths>` at build time. Pages use the last commit touching `data/profile.ts`; each PDF uses its own file. The same date feeds JSON-LD `dateModified`.
  - Fallback: `seo.updated` at midnight UTC, used only if git is unavailable. A live sitemap whose times are all `T00:00:00` means the fallback is in use.
  - Vercel builds include git metadata. In a shallow clone, a file last changed beyond the clone depth gets the oldest available commit's date, which is newer than the truth and never older.
  - Content changes must be **committed** to move the date. **Never** use build time (`new Date()`).
- **robots.txt.** It allows everything (crawlers need CSS/JS/fonts), links the sitemap and sets host.
- **PDF metadata.** The CV and case-study PDFs carry Title/Author/Subject/Keywords, which Google shows for PDF results. When a PDF is replaced, set them again.
- **llms.txt.** A plain-text summary generated from the data, for AI search tools.

## Contact links (canonical values in `site`)

| Channel | Href |
|---|---|
| Email | `mailto:blessingosariemen75@gmail.com` |
| Phone (call) | `tel:+2348153629437` |
| WhatsApp | `https://wa.me/2348153629437` |
| LinkedIn | `https://www.linkedin.com/in/blessing-osamudiamen/` |

## Deployment

- Vercel, framework preset **Next.js**, default build (`next build`) and output. No environment variables are needed. Every push to `main` deploys.
- Git remote: `ssh://git@ssh.github.com:443/ARMSTRONG-AISOSA/blessing-osamudiamen.git` (SSH over port 443; port 22 is blocked on the owner's network).
- Google Search Console: URL-prefix property, verified with the HTML tag from `seo.googleSiteVerification`. **Don't remove that value** or verification is lost.
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
| 2026-10-17 | Static case-study pages `/projects/[slug]` alongside the modal; Home cards link to the pages | Modal-only case studies could not be indexed or ranked |
| 2026-10-17 | `?open=` read from `window.location`, not `useSearchParams`; `<Suspense>` removed | `useSearchParams` made the projects grid client-only, invisible to crawlers in the static HTML |
| 2026-10-17 | SEO copy + keywords in `seo` (data/profile.ts); JSON-LD as a linked `@graph` | Content rule; one consistent entity (Person) referenced by every page |
| 2026-10-17 | Sitemap includes PDFs | PDFs are indexable documents carrying her name |
| 2026-10-17 | Sitemap/JSON-LD dates automatic from git (`lib/content-dates.ts`), `seo.updated` fallback only | Truthful lastmod that can't be forgotten; build time would be false |
| 2026-10-17 | No Claude credit anywhere (commits, PRs, site) | Owner rule |
| 2026-10-17 | `twitter:card` = `summary` (square thumbnail) | Share image is the tall portrait; the 2:1 large card would crop it through the face |
