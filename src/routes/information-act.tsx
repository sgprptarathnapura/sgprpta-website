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

      {/* Bus Time Table */}
      <section className="border-t border-border bg-secondary/40 py-16">
        <div className="container-narrow">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Public Information</p>
              <h2 className="mt-2 font-display text-3xl font-bold">Bus Time Table — Sample Schedule</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Indicative departures on major routes operated under SGPRPTA. Timings are a sample
                and may be revised — confirm with the relevant sub-branch before travel.
              </p>
            </div>
            <span className="rounded-md bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary">
              Effective sample · 2025
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Route</th>
                    <th className="px-4 py-3 font-semibold">From</th>
                    <th className="px-4 py-3 font-semibold">To</th>
                    <th className="px-4 py-3 font-semibold">Departure</th>
                    <th className="px-4 py-3 font-semibold">Arrival</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Days</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {BUS_TIMETABLE.map((t, i) => (
                    <tr key={i} className="hover:bg-primary-soft/50">
                      <td className="px-4 py-3 font-mono font-semibold text-primary">{t.route}</td>
                      <td className="px-4 py-3">{t.from}</td>
                      <td className="px-4 py-3">{t.to}</td>
                      <td className="px-4 py-3 font-mono">{t.departure}</td>
                      <td className="px-4 py-3 font-mono">{t.arrival}</td>
                      <td className="px-4 py-3">
                        <span
                          className={
                            "inline-block rounded-full px-2.5 py-0.5 text-xs font-medium " +
                            (t.type === "Semi-Luxury"
                              ? "bg-gold/20 text-primary-dark"
                              : "bg-primary/10 text-primary")
                          }
                        >
                          {t.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{t.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            * This is a sample schedule for demonstration. The complete, authoritative timetable will
            be published here once received from the Operations Division.
          </p>
        </div>
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
