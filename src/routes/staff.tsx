import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";
import { SectionHeading } from "./index";
import { STAFF } from "@/lib/site-data";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Our Staff — SGPRPTA" },
      {
        name: "description",
        content:
          "Meet the staff of the Sabaragamuwa Provincial Road Passenger Transport Authority — General Manager, Head Office (Ratnapura) and District Office (Kegalle).",
      },
      { property: "og:title", content: "Our Staff — SGPRPTA" },
      {
        property: "og:description",
        content: "General Manager, Head Office (Ratnapura) and District Office (Kegalle) teams of SGPRPTA.",
      },
    ],
  }),
  component: Staff,
});

type Member = { name: string; positionKey: string; photo: string };

function StaffCard({ s }: { s: Member }) {
  const { t } = useTranslation();
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-elegant">
      <img
        src={s.photo}
        alt={`Portrait of ${s.name}`}
        className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-primary/15"
        loading="lazy"
      />
      <p className="mt-4 font-display text-lg font-semibold text-foreground">{s.name}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
        {t(`positions.${s.positionKey}`)}
      </p>
    </div>
  );
}

function Staff() {
  const { t } = useTranslation();
  const gm = STAFF.find((s) => s.positionKey.startsWith("gm")) ?? STAFF[0];
  const others = STAFF.filter((s) => s.name !== gm.name);

  return (
    <SiteLayout>
      <PageHero title={t("staff.title")} subtitle={t("staff.subtitle")} />

      <section className="container-narrow py-16">
        <SectionHeading eyebrow={t("staff.gmEyebrow")} title={t("staff.gmTitle")} />
        <div className="mx-auto mt-10 max-w-sm">
          <StaffCard s={gm} />
        </div>
      </section>

      <section className="border-t border-border bg-primary-soft/30">
        <div className="container-narrow py-16">
          <SectionHeading eyebrow={t("staff.hoEyebrow")} title={t("staff.hoTitle")} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <StaffCard key={`ho-${i}-${s.name}`} s={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-narrow py-16">
          <SectionHeading eyebrow={t("staff.doEyebrow")} title={t("staff.doTitle")} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s, i) => (
              <StaffCard key={`do-${i}-${s.name}`} s={s} />
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
            {t("staff.note")}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
