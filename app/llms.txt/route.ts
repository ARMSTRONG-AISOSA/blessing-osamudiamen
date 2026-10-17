import { about, certifications, education, experience, projects, site, tools } from "@/data/profile";
import { abs } from "@/lib/seo";

export const dynamic = "force-static";

/** /llms.txt: a plain-text summary of the site for AI search tools (llmstxt.org format). Built from data/profile.ts. */
export function GET() {
  const text = `# ${site.name}, ACA — ${site.jobTitle}

> ${site.description}

${about.narrative}

## Pages

- [Home](${abs("/")}): profile, key figures, core competencies, featured case studies, certifications
- [About](${abs("/about")}): work history, internships and job simulations, education, tools, contact
- [Projects](${abs("/projects")}): all case studies
- [Resume (PDF)](${abs(site.resumeUrl)})

## Case studies

${projects.map((p) => `- [${p.title}](${abs(`/projects/${p.slug}`)}): ${p.keyResult}. ${p.takeaway} [PDF](${abs(p.pdf)})`).join("\n")}

## Certifications

${certifications.map((c) => `- ${c.name}: ${c.issuer}, ${c.date} (${c.status})`).join("\n")}
- ${education.degree}: ${education.institution}, ${education.years}

## Experience

${experience.map((e) => `- ${e.role}, ${e.company} (${e.start} – ${e.end})${e.impact ? `: ${e.impact}` : ""}`).join("\n")}

## Tools

${tools.map((t) => `- ${t.name}: ${t.use}`).join("\n")}

## Contact

- Email: ${site.email}
- Phone: ${site.phone}
- WhatsApp: ${site.whatsappHref}
- LinkedIn: ${site.linkedin}
- Work mode: ${site.workMode}
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
