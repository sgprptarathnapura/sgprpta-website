import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";
import { OFFICES, SUB_BRANCHES, COMPLAINTS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SGPRPTA" },
      {
        name: "description",
        content:
          "Contact the Sabaragamuwa Provincial Road Passenger Transport Authority — head office (Kegalle), district office (Ratnapura), sub-branches and complaint hotlines.",
      },
      { property: "og:title", content: "Contact — SGPRPTA" },
      { property: "og:description", content: "Head office, district office, sub-branches and complaint hotlines." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero title="Contact Us" subtitle="Reach the right office quickly — head office, district office or your nearest sub-branch." />

      {/* Offices */}
      <section className="container-narrow grid gap-6 py-16 md:grid-cols-2">
        {OFFICES.map((o) => (
          <div key={o.key} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="bg-primary px-6 py-4 text-primary-foreground">
              <h2 className="font-display text-xl font-bold">{o.title}</h2>
            </div>
            <div className="grid gap-4 p-6 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Address</p>
                <address className="mt-1 not-italic text-foreground/85">
                  {o.address.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </address>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Phone</p>
                  <div className="mt-1 space-y-0.5">
                    {o.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-primary">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Fax</p>
                  <p className="mt-1">{o.fax}</p>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Email</p>
                <a href={`mailto:${o.email}`} className="mt-1 block text-primary hover:underline">
                  {o.email}
                </a>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary-soft"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Complaints */}
      <section className="bg-primary-dark py-14 text-primary-foreground">
        <div className="container-narrow">
          <h2 className="font-display text-2xl font-bold">Complaint Hotlines</h2>
          <p className="mt-1 text-sm opacity-85">Report bus service issues directly to the district you are travelling in.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(
              [
                ["Ratnapura District", COMPLAINTS.ratnapura],
                ["Kegalle District", COMPLAINTS.kegalle],
              ] as const
            ).map(([district, nums]) => (
              <div key={district} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{district}</p>
                <div className="mt-2 flex flex-wrap gap-4">
                  {nums.map((n) => (
                    <a key={n} href={`tel:${n.replace(/\s/g, "")}`} className="font-display text-xl font-semibold hover:text-gold">
                      {n}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-branches */}
      <section className="container-narrow py-16">
        <h2 className="font-display text-2xl font-bold text-primary">Sub-Branches Across the Province</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Transport Authority sub-branches at central bus stands. ({SUB_BRANCHES.length} locations)
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SUB_BRANCHES.map((b) => (
            <div key={b.town} className="rounded-lg border border-border bg-card p-4 transition hover:border-primary/40">
              <p className="font-display text-base font-semibold text-primary">{b.town}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{b.stand}</p>
              {b.phone && (
                <a href={`tel:${b.phone.replace(/\s/g, "")}`} className="mt-1 block text-sm text-foreground hover:text-primary">
                  {b.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-secondary/50 py-16">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-primary">Send us a Message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in the form and our team will respond to your query.
          </p>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        if (!fd.get("name") || !fd.get("email") || !fd.get("message")) {
          setError("Please fill in your name, email and message.");
          return;
        }
        setError(null);
        setSent(true);
        (e.currentTarget as HTMLFormElement).reset();
      }}
      className="mt-6 space-y-4 rounded-xl border border-border bg-card p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Your Name" required />
        <Field name="email" label="Your Email" type="email" required />
      </div>
      <Field name="subject" label="Subject" />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Your Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {sent && (
        <p className="rounded-md bg-primary-soft px-4 py-3 text-sm text-primary">
          Thank you — your message has been recorded. We will get back to you shortly.
        </p>
      )}
      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary-dark"
      >
        Send Message
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
