import { certifications } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import CertificationBadge from "@/components/CertificationBadge";

export default function Certifications() {
  return (
    <section className="container-page pb-24 pt-20 sm:pt-24">
      <SectionHeading eyebrow="Credentials" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => <CertificationBadge key={c.name} {...c} />)}
      </div>
    </section>
  );
}
