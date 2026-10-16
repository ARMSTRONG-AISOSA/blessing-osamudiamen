# Progress log

History of everything done on Blessing Osamudiamen's portfolio. **Newest entry first.** After every change, add a dated entry at the top of the Log: what changed, why, files touched, and how it was verified.

## Current state (as of 2026-10-17)

- Three pages, built and static: **Home**, **About**, **Projects** (5 case studies with modal, PDF download and Google Drive link).
- Next.js 16.4.2 · React 19 · Tailwind 3.4 · Framer Motion · TypeScript. `npm run build` passes.
- Live target: https://blessing-osamudiamen.vercel.app · Repo: https://github.com/ARMSTRONG-AISOSA/blessing-osamudiamen.git
- All content is in `data/profile.ts`. No `[PASTE_CV_HERE]` placeholders remain.

### Open items / ideas

- [ ] Push to GitHub and connect the repo to Vercel (first deploy).
- [ ] The downloadable CV (`public/Blessing-Osamudiamen-Resume.pdf`) still shows "Benin City, Edo State, Nigeria", the phone number and "Grade: 4.31/5.0". The owner asked only for the age to be removed from this file. Confirm whether those should go too (the site itself hides them).
- [ ] Zoho tool description is generic ("Accounting & business operations"). Confirm which Zoho product she uses.
- [ ] Optional: a dedicated OpenGraph image (1200×630) instead of the portrait.
- [ ] Optional: a Tableau Public link for the Sales Dashboard. Her CV links to it: https://public.tableau.com/views/SalesandPerformanceDashboard_17843717088220/PerformanceDashboard

## Log

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
