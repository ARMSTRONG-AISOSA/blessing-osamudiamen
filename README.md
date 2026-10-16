# Blessing Osamudiamen — Portfolio

Portfolio website for Blessing Osamudiamen, ACA (Chartered Accountant & Financial Analyst).

- **Live:** https://blessing-osamudiamen.vercel.app
- **Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 3.4 · Framer Motion · Lucide · TypeScript
- **Requires:** Node.js 20.9 or newer

## Run it

```bash
npm install
npm run dev                # http://localhost:3000
npm run build && npm start # production
```

## Deploy (Vercel)

1. Push this repo to GitHub: `https://github.com/ARMSTRONG-AISOSA/blessing-osamudiamen.git`
2. On vercel.com → **Add New… → Project** → import the repo. The Next.js preset is detected and no environment variables are needed.
3. Set the project name / domain to `blessing-osamudiamen` → `https://blessing-osamudiamen.vercel.app`.

## Editing content

All text, figures, projects and links live in **`data/profile.ts`**. Downloads live in `public/` (CV: `Blessing-Osamudiamen-Resume.pdf`, case studies: `case-studies/*.pdf`).

## Project docs

| File | Purpose |
|---|---|
| `CLAUDE.md` | Start here: context + rules for Claude (or any developer) |
| `architecture.md` | Stack, versions, structure, decision log |
| `design.md` | Design system: colours, type, components, interaction states |
| `progress.md` | Full change history + open items |
