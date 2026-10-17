# Progress log

History of everything done on Blessing Osamudiamen's portfolio. **Newest entry first.** After every change, add a dated entry at the top of the Log: what changed, why, files touched, and how it was verified.

## Current state (as of 2026-10-17)

- Three pages, built and static: **Home**, **About**, **Projects** (5 case studies with modal, PDF download and Google Drive link), plus a static page per case study at `/projects/<slug>`.
- Full SEO setup: keywords, per-page metadata, JSON-LD graph, sitemap (pages + PDFs), favicon/manifest, llms.txt.
- Next.js 16.4.2 · React 19 · Tailwind 3.4 · Framer Motion · TypeScript. `npm run build` passes.
- Live target: https://blessing-osamudiamen.vercel.app · Repo: https://github.com/ARMSTRONG-AISOSA/blessing-osamudiamen.git
- All content is in `data/profile.ts`. No `[PASTE_CV_HERE]` placeholders remain.

### Open items / ideas

- [ ] Google Search Console: request indexing for Home + the 5 case-study pages. On 2026-10-17 the daily "Request indexing" quota ran out; retry from 2026-10-18 (featured case studies first).
- [ ] Check indexing in Search Console (Sitemaps → 14 discovered; Indexing → Pages) and Bing after about a week.
- [ ] Add the site URL to her LinkedIn profile (Contact info → Website) so search engines connect the two.

## Log

### 2026-10-17 — Search Console verified, sitemap submitted, Bing added
- Google Search Console: property verified, `sitemap.xml` submitted successfully, URL Inspection live test says the page can be indexed. "Request indexing" hit the daily quota (normal for a new property); retry tomorrow.
- Bing Webmaster Tools: site added by the owner (also feeds DuckDuckGo, Yahoo and ChatGPT search).
- Files: `progress.md` only (no code change).

### 2026-10-17 — Deployed; Google Search Console verification tag
- Site is live on Vercel at https://blessing-osamudiamen.vercel.app (repo imported by the owner; pushes to `main` auto-deploy). Live sitemap (14 URLs), robots and link previews (Twitterbot, TelegramBot, WhatsApp, facebookexternalhit) checked.
- `git remote origin` → `ssh://git@ssh.github.com:443/ARMSTRONG-AISOSA/blessing-osamudiamen.git` (port 22 is blocked on the owner's network; HTTPS has no stored credentials).
- `seo.googleSiteVerification` set, so `<meta name="google-site-verification">` is on every page (URL-prefix property `https://blessing-osamudiamen.vercel.app/`).
- Files: `data/profile.ts`, `architecture.md`.
- Verified: `npm run build`; tag present in the built and live HTML.

### 2026-10-17 — Social link previews checked; X card → `summary`
- Checked share tags on every page: og:title/description/url/type/site_name, og:image (absolute URL, 449×560, 263 KB, under WhatsApp's ~300 KB limit) and twitter:* are all present, so X, Telegram, WhatsApp, LinkedIn and Facebook build a preview.
- Changed `twitter:card` from `summary_large_image` to `summary`. The large card crops to 2:1, which cuts a tall portrait through the face; `summary` shows a square thumbnail.
- Files: `app/layout.tsx`, `lib/seo.ts`, `architecture.md`.
- Verified: `npm run build`; tags read from `next start` HTML.

### 2026-10-17 — Full SEO pass: case-study pages, keywords, structured data, sitemap
- **Case-study pages** `/projects/<slug>` (5, statically generated): breadcrumb, navy header with key result and author byline, full analysis, files + author sidebar, "More case studies" links. Before this, case studies existed only inside a modal and could not be indexed. Body is shared with the modal via `components/projects/CaseStudyContent.tsx` (it now also shows the `method` paragraph). Home featured cards link to the pages; project-card titles link to them; the modal has an "Open as a page" link. `?open=<slug>` deep links still work.
- **Server-rendered projects grid:** `ProjectsExplorer` no longer uses `useSearchParams` (it reads `?open=` from `window.location` after mount, pushState + popstate), so the `<Suspense>` wrapper was removed and the 5 cards + filter tabs are now in the static HTML. `AnimatePresence initial={false}` keeps them visible before hydration. Previously `/projects` shipped with an empty grid until JavaScript ran.
- **Keywords & page copy** in a new `seo` object in `data/profile.ts`: ~110 keywords (identity, roles, credentials, modeling, FP&A, accounting, tools, case studies), per-page titles/descriptions, name variants, issuer URLs, Search Console / Bing verification slots (empty). Each project got a `keywords` array (facts from its PDF only). No location/nationality terms.
- **H1s now carry the keywords:** the eyebrow sits inside the H1 on Home ("Blessing Osamudiamen, ACA · Chartered Accountant · Financial Analyst"), About ("About Blessing Osamudiamen, ACA") and Projects ("Financial modeling & analytics case studies"). Looks the same as before.
- **Metadata** (`lib/seo.ts`, `app/layout.tsx`): absolute titles per page, canonical, keywords, OpenGraph `profile` (first/last name) / `article` / `website`, Twitter, googleBot `max-image-preview:large`, `max-snippet:-1`, applicationName/creator/publisher/category, formatDetection off, verification tags when filled in.
- **JSON-LD @graph:** WebSite + Person (given/family name, ACA suffix, alternate names, two Occupations with O*NET codes and skills, worksFor current employer, alumniOf, knowsAbout, every credential with issuer URL, ContactPoints, sameAs LinkedIn) in the layout; WebPage (Home), ProfilePage (About), CollectionPage + ItemList (Projects), WebPage + Article + BreadcrumbList (each case study). `JsonLd` component escapes `<`. WhatsApp moved from `sameAs` to a ContactPoint.
- **Sitemap:** 14 URLs: 3 pages, 5 case-study pages, CV PDF, 5 case-study PDFs; image entries (portrait) on Home/About; `lastmod` = `seo.updated` (real content date, not build time). robots.txt allows everything, points to the sitemap, sets host.
- **New routes:** `app/icon.svg` (BO monogram favicon), `app/apple-icon.tsx` (180px PNG), `app/manifest.ts`, `app/llms.txt/route.ts` (plain-text summary for AI search, generated from the data).
- **PDF metadata:** Title/Author/Subject/Keywords set on the CV and all 5 case-study PDFs (Google shows the PDF Title in results). Page content unchanged (verified text identical).
- Navbar: "Projects" stays active on case-study pages; mobile links got `aria-current` and hover/tap colours.
- Rule added: never credit Claude (CLAUDE.md rule 8). Abandoned open items (Zoho product, OG image, Tableau link) removed.
- Files: `data/profile.ts`, `lib/seo.ts`, `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, `app/projects/page.tsx`, `app/projects/[slug]/page.tsx` (new), `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg`, `app/apple-icon.tsx`, `app/manifest.ts`, `app/llms.txt/route.ts` (new), `components/JsonLd.tsx`, `components/projects/CaseStudyContent.tsx` (new), `components/projects/ProjectModal.tsx`, `ProjectCard.tsx`, `ProjectsExplorer.tsx`, `components/home/Hero.tsx`, `FeaturedProjects.tsx`, `components/about/Narrative.tsx`, `components/SectionHeading.tsx`, `components/layout/Navbar.tsx`, the 6 PDFs, `CLAUDE.md`, `architecture.md`, `design.md`.
- Verified: `npm run build` passes (16 static routes); every page checked for title, description, canonical, OG, H1 and parseable JSON-LD; sitemap/robots/manifest/icons/llms.txt fetched from `next start`; screenshots at 1440px and 390px (Home, Projects, case-study page, modal deep link).

### 2026-10-17 — CV grade removed, CV certifications detailed, footer credit
- CV PDF (`public/Blessing-Osamudiamen-Resume.pdf`): removed "Grade: 4.31/5.0" and moved the coursework bullet up to close the gap. Rewrote the CERTIFICATIONS lines to match the homepage (same order, newest first), each with issuer and date, e.g. "Association of Chartered Accountants (ACA) — Institute of Chartered Accountants of Nigeria, July 2026". Owner decision: city and phone number stay on the CV; only the grade goes. All 7 links in the PDF are preserved. Edited with PyMuPDF (redact + reinsert in Liberation Serif, the CV's own font).
- Footer bottom bar: added "Designed and maintained by **Bossstrong-Dev**" → `https://bossstrong-dev.vercel.app/` (new tab), on the right of the copyright on desktop and below it on phones. Hover/tap → orange-400. Label and URL live in `site.credit`.
- Files: `public/Blessing-Osamudiamen-Resume.pdf`, `data/profile.ts`, `components/layout/Footer.tsx`, `architecture.md`.
- Verified: `npm run build` passes (all 7 routes static); footer checked in screenshots at 1440px and 390px; CV text/links checked with PyMuPDF and `pdftotext`, page rendered and inspected.

### 2026-10-17 — Live URL, repo, new CV, wording, project docs
- `site.url` → `https://blessing-osamudiamen.vercel.app`. `package.json`: name `blessing-osamudiamen`, `homepage`, `repository` (GitHub).
- Home: section title "Certifications & exams" → **"Certifications"**. About: fact label "Seeking" → **"Open to"**.
- Replaced the CV download with the owner's new PDF, edited: age removed, LinkedIn text changed to `linkedin.com/in/blessing-osamudiamen` and made clickable (→ `https://www.linkedin.com/in/blessing-osamudiamen/`), and website `blessing-osamudiamen.vercel.app` added (clickable) at the top right of the name line. The existing links inside the PDF are preserved.
- Added `CLAUDE.md`, `architecture.md`, `design.md` and `progress.md` (this file) so a local Claude session can pick up full context.
- Initialised git with an initial commit and `origin` set to the GitHub repo (not pushed).
- Files: `data/profile.ts`, `components/home/Certifications.tsx`, `package.json`, `public/Blessing-Osamudiamen-Resume.pdf`, `README.md`, the new docs.
- Verified: `next build` passes; PDF text/links checked with PyMuPDF.

### 2026-10-17 — LinkedIn URL, hover/tap states, certification dates, Next 16
- LinkedIn everywhere → `https://www.linkedin.com/in/blessing-osamudiamen/`.
- Links are no longer underlined. Every `hover:` class got a matching `active:` class for tap feedback on phones. Tailwind `future.hoverOnlyWhenSupported`. `.btn-primary` / `.btn-secondary` got `active:` states. Global `a { text-decoration: none }` + colour transitions.
- Certifications: full names, issuers and dates, newest first: ACA (Jul 2026, ICAN, Qualified), AAT (Dec 2023, ICAN), CMSA (Jun 2023, CFI), FPWM (Jun 2023, CFI), FMVA™ (Sep 2022, CFI). Hero badge "FMVA™ Certified". JSON-LD credentials generated from the list with issuer and date.
- Upgraded Next 15.5.28 → **16.4.2**, React → ^19.2. Removed the `lint` script (Next 16 dropped `next lint`). Added `engines.node >=20.9`. Next rewrote tsconfig `jsx` → `react-jsx`.
- Verified: build passes; footer link computed style = orange-400, no underline, on hover.

### 2026-10-17 — Privacy, contact channels, real case studies
- Removed every mention of age, address/location, nationality and CGPA from the site. Education shows only "University of Benin · 2021 – 2025". Location fact → "Work mode: Remote".
- Hero chip → "Remote · Open to Accounting & Financial Analyst roles".
- Contact: footer email (`mailto:`), phone (`tel:`), "LinkedIn" label linking to her profile, and a "Get in touch" button with a WhatsApp icon → `wa.me`. About page: 4 contact buttons (Call, WhatsApp, LinkedIn, Email) before Work history (`components/about/ContactButtons.tsx`, `components/WhatsAppIcon.tsx`).
- Tools: added **Zoho**.
- Projects rebuilt from her five case-study PDFs (all figures taken from the PDFs), each with PDF download + Google Drive folder:
  1. Dangote Cement equity research: implied ₦141 vs ₦493 → Sell (Financial Modeling, featured)
  2. 99 Agency integrated budgeting model: revenue +17.1% to $119.2M (Financial Modeling)
  3. Sales & Performance Dashboard (Tableau): discounts ≥30% lost $204K (Data & Analytics, featured)
  4. Business Performance Analysis & Forecasting: op. profit £7k below budget (Data & Analytics)
  5. Freshmart cash-flow analysis: ₦73.8m net inflow, ₦66m idle cash (Accounting & Audit)
- Removed the earlier Zash Mart / KPMG project cards (they remain under Work history / Virtual experience).
- Stats band: 60% faster close · 5 case studies · 5 certifications · 15,892 order lines analysed.
- Earlier CV download was redacted (age/address/grade covered). It has since been superseded (see above).

### 2026-10-16 — CV content filled in
- All placeholders replaced with content from her CV: summary, 3 jobs (Johem Agro, Zash Mart, Patience Omono Retail), virtual experience (YAP Africa, Bank of America, NY Jobs CEO Council, KPMG via Forage), education, certifications, tools (Excel, Tableau, Power BI, QuickBooks, PowerPoint).
- Removed SQL/Python/Xero (not on her CV) and the tool proficiency bars (no evidence for levels).
- Owner decisions: contact via email + LinkedIn + phone; include the sales rep role; show virtual internships on About.

### 2026-10-16 — Initial build
- Brief: high-converting minimalist portfolio for an accounting graduate / financial analyst; navy + off-white + orange accent; Next.js, Tailwind, Lucide, Framer Motion; 3 pages; SEO (metadata, OpenGraph, JSON-LD); content separated for later CV paste.
- Built: Home (hero with portrait on the left, stats band, competencies, featured projects, certifications), About (narrative, timeline, education, toolstack), Projects (animated filter tabs, cards, deep-linkable modal).
- Portrait: supplied PNG with a transparent background, cropped to 449×560.
- Also built a clickable Claude Design canvas mockup (Home/About/Projects) on claude.ai as a visual reference.
