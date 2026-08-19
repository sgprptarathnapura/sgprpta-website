import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";
import {
  OFFICES,
  SUB_BRANCHES_RATNAPURA,
  SUB_BRANCHES_KEGALLE,
  COMPLAINTS,
} from "@/lib/site-data";
import { ContactLink } from "@/components/ContactLink";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SGRPTA" },
      {
        name: "description",
        content:
          "Contact the Sabaragamuwa Provincial Road Passenger Transport Authority — head office (Ratnapura), district office (Kegalle), sub-branches and complaint hotlines.",
      },
      { property: "og:title", content: "Contact — SGRPTA" },
      { property: "og:description", content: "Head office, district office, sub-branches and complaint hotlines." },
    ],
  }),
  component: Contact,
});

type Branch = { town: string; stand: string; phone?: string };

function BranchGrid({ items }: { items: Branch[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((b) => (
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
  );
}

function Contact() {
  const { t } = useTranslation();
  const total = SUB_BRANCHES_RATNAPURA.length + SUB_BRANCHES_KEGALLE.length;
  return (
    <SiteLayout>
      <PageHero title={t("contact.title")} subtitle={t("contact.subtitle")} />

      {/* Offices */}
      <section className="container-narrow grid gap-6 py-16 md:grid-cols-2">
        {OFFICES.map((o) => (
          <div key={o.key} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="bg-primary px-6 py-4 text-primary-foreground">
              <h2 className="font-display text-xl font-bold">{t(o.titleKey)}</h2>
            </div>
            <div className="grid gap-4 p-6 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.address")}</p>
                <address className="mt-1 not-italic text-foreground/85">
                  {o.address.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </address>
              </div>
               <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.phone")}</p>
                  <div className="mt-1 space-y-0.5">
                    {o.phones.map((p) => (
                      <ContactLink key={p} number={p} className="hover:text-primary" iconClassName="h-3.5 w-3.5" />
                    ))}
                    
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t("contact.email")}</p>
                <a href={`mailto:${o.email}`} className="mt-1 block text-primary hover:underline">
                  {o.email}
                </a>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-primary/25 bg-primary-soft px-4 py-2 text-sm font-medium text-primary transition hover:border-primary"
              >
                {t("contact.viewMap")} <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Complaint Hotlines */}
      <section className="bg-primary-dark py-14 text-primary-foreground">
        <div className="container-narrow">
          <h2 className="font-display text-2xl font-bold">{t("contact.hotlines")}</h2>
          <p className="mt-1 text-sm opacity-85">{t("contact.hotlinesNote")}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(
              [
                [t("home.district.ratnapura"), COMPLAINTS.ratnapura],
                [t("home.district.kegalle"), COMPLAINTS.kegalle],
              ] as const
            ).map(([district, nums]) => (
              <div key={district} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{district}</p>
                <div className="mt-2 flex flex-wrap gap-4">
                  {nums.map((n) => (
                   <ContactLink
                      key={n}
                      number={n}
                      iconClassName="h-5 w-5"
                      className="font-display text-xl font-semibold hover:text-gold"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-branches split by district */}
      <section className="container-narrow py-16">
        <h2 className="font-display text-2xl font-bold text-primary">{t("contact.subBranches")}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("contact.subBranchesNote", { count: total })}
        </p>

        <div className="mt-10">
          <h3 className="font-display text-lg font-semibold text-primary">
            {t("contact.subBranchesRatnapura")}
          </h3>
          <BranchGrid items={SUB_BRANCHES_RATNAPURA} />
        </div>

        <div className="mt-10">
          <h3 className="font-display text-lg font-semibold text-primary">
            {t("contact.subBranchesKegalle")}
          </h3>
          <BranchGrid items={SUB_BRANCHES_KEGALLE} />
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-secondary/50 py-16">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-primary">{t("contact.sendMessage")}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t("contact.sendMessageNote")}</p>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactForm() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        if (!fd.get("name") || !fd.get("email") || !fd.get("message")) {
          setError(t("contact.form.error"));
          return;
        }
        setError(null);
        setSent(true);
        (e.currentTarget as HTMLFormElement).reset();
      }}
      className="mt-6 space-y-4 rounded-xl border border-border bg-card p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label={t("contact.form.name")} required />
        <Field name="email" label={t("contact.form.email")} type="email" required />
      </div>
      <Field name="subject" label={t("contact.form.subject")} />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {t("contact.form.message")} <span className="text-primary">*</span>
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
          {t("contact.form.success")}
        </p>
      )}
      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:bg-primary-dark"
      >
        {t("contact.form.send")}
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
