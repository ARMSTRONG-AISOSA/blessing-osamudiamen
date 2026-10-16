# CLAUDE.md — start here

Portfolio website for **Blessing Osamudiamen, ACA** (Chartered Accountant & Financial Analyst).

- Live site: https://blessing-osamudiamen.vercel.app (hosted on Vercel)
- Repository: https://github.com/ARMSTRONG-AISOSA/blessing-osamudiamen.git
- Project owner: Armstrong. He builds and maintains the site for Blessing.

## First thing in a new session

Before changing anything, read these files in full, in this order:

1. `progress.md`: what has been built, every change so far, open items. **Read the latest entry first.**
2. `architecture.md`: stack, versions, folder structure, data flow, and decisions that must not be undone by accident.
3. `design.md`: the design system (colors, type, spacing, components, interaction states). New UI must follow it.
4. `data/profile.ts`: all site content lives here.

Then skim `app/`, `components/` and `lib/seo.ts` to confirm the docs still match the code. If the code and the docs disagree, the code is the truth: say so, then fix the docs.

## Rules that must hold

1. **Content belongs in `data/profile.ts`, not JSX.** Components only render data.
2. **Privacy:** never show her **age, home address, nationality or CGPA/grade** on the site. Contact is only through email, LinkedIn, WhatsApp and the phone (call) link. Exception: issuer names on certifications (e.g. "Institute of Chartered Accountants of Nigeria") are allowed, because the owner provided them.
3. **No invented facts or numbers.** Every figure must come from her CV or her case-study PDFs in `public/case-studies/`. If something is missing, ask the owner. Don't guess.
4. **Follow `design.md`.** Orange is for accents only. Text links are never underlined. Every link and button changes colour on hover and on tap (`active:`).
5. **Keep versions as recorded in `architecture.md`.** Don't upgrade major versions (Next, React, Tailwind) without asking.
6. **Log every change.** After any change, add a dated entry at the top of the log in `progress.md` saying what changed, why, and which files. Update `architecture.md` or `design.md` too if a decision or standard changed.
7. **Verify before saying "done":** run `npm run build`. It must pass type-check and generate all pages. For visual changes, check desktop (1440px) and phone (390px) widths.

## Commands

```bash
npm install          # Node.js >= 20.9 required (Next 16)
npm run dev          # http://localhost:3000
npm run build        # production build (Turbopack) + type-check
npm start            # serve the production build
```

There is no lint script: Next 16 removed `next lint`.

## Where things are

| Need to change… | Edit |
|---|---|
| Any text, stats, jobs, certifications, tools, projects | `data/profile.ts` |
| Contact details / links / live URL | `site` object in `data/profile.ts` |
| CV download | replace `public/Blessing-Osamudiamen-Resume.pdf` (same filename) |
| Case-study PDF downloads | `public/case-studies/<slug>.pdf` + `pdf` field of the project |
| SEO metadata / JSON-LD | `lib/seo.ts`, `app/layout.tsx` |
| Shared styles (buttons, cards, eyebrow) | `app/globals.css` (`@layer components`) |
| Page sections | `components/home|about|projects/*` |

## Gotchas

- `next/font/google` downloads IBM Plex Sans/Mono at build time. A sandbox without internet fails the build with "Failed to fetch font". Locally and on Vercel this works.
- `useSearchParams` in `ProjectsExplorer` must stay inside the `<Suspense>` in `app/projects/page.tsx`, or the static build fails.
- `site.url` must be a valid absolute URL. It feeds `metadataBase`, the sitemap and JSON-LD.
- A Claude Design canvas mockup of the same three pages also exists on claude.ai. It is a visual reference only; this repo is the source of truth.
