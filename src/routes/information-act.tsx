import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";
import { RTI_OFFICER, BUS_TIMETABLE } from "@/lib/site-data";


export const Route = createFileRoute("/information-act")({
  head: () => ({
    meta: [
      { title: "Right to Information — SGPRPTA" },
      {
        name: "description",
        content:
          "Right to Information Act — designated Information Officer, contact details and links to the RTI resources of Sri Lanka.",
      },
      { property: "og:title", content: "Right to Information — SGPRPTA" },
      { property: "og:description", content: "SGPRPTA RTI officer, downloads and external RTI resources." },
    ],
  }),
  component: InfoAct,
});

const EXTERNAL = [
  { label: "Right to Information — Sri Lanka", href: "https://www.rti.gov.lk/" },
  { label: "RTI Applications & Forms", href: "https://www.rti.gov.lk/rti-forms" },
  { label: "Contact the RTI Information Officers", href: "https://www.rti.gov.lk/contact-us" },
];

function InfoAct() {
  return (
    <SiteLayout>
      <PageHero
        title="Right to Information"
        subtitle="Transparency of public institutions maintained by the tax monies of the people."
      />
      <section className="container-narrow grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">Right to Information Act</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/85">
            <p>
              With the establishment of republic states, a concept which denotes that the ownership
              of the state lies with the people was evolved. State and public institutions are
              maintained by the tax monies of the people — the fundamental principle being that the
              people have the right to know how the functions of the state are accomplished using
              public funds.
            </p>
            <p>
              In order to effectively safeguard the said right to information, three core
              prerequisites must be concerned with: an accessible officer, a documented process, and
              published records.
            </p>
          </div>

          <h3 className="mt-10 font-display text-xl font-semibold text-primary">
            For More Information
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Official RTI documents will be published here once verified copies are received from
            SGPRPTA. In the meantime, the following external resources are authoritative:
          </p>
          <ul className="mt-4 space-y-2">
            {EXTERNAL.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary-soft"
                >
                  {l.label} <span>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-xl border border-primary/20 bg-primary-soft p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Responsible Officer
          </p>
          <p className="mt-2 font-display text-lg font-semibold">{RTI_OFFICER.name}</p>
          <p className="text-sm text-muted-foreground">{RTI_OFFICER.role}</p>

          <dl className="mt-4 space-y-2 text-sm">
            <Row label="Mobile" value={RTI_OFFICER.mobile} tel />
            {RTI_OFFICER.phones.map((p) => (
              <Row key={p} label="Phone" value={p} tel />
            ))}
            <Row label="Fax" value={RTI_OFFICER.fax} />
            <Row label="Email" value={RTI_OFFICER.email} mail />
          </dl>
        </aside>
      </section>

     
    </SiteLayout>
  );
}


function Row({ label, value, tel, mail }: { label: string; value: string; tel?: boolean; mail?: boolean }) {
  const content = tel ? (
    <a href={`tel:${value.replace(/\s/g, "")}`} className="text-primary hover:underline">{value}</a>
  ) : mail ? (
    <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a>
  ) : (
    <span>{value}</span>
  );
  return (
    <div className="flex justify-between gap-4 border-b border-primary/10 pb-2 last:border-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium">{content}</dd>
    </div>
  );
}
