import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import logo from "@/assets/logo.png";
import heroBuses from "@/assets/bus.png";
import { LEADERSHIP, COMPLAINTS, STATS_BY_DISTRICT } from "@/lib/site-data";
import { ContactLink } from "@/components/ContactLink";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGRPTA — Sabaragamuwa Provincial Road Passenger Transport Authority" },
      {
        name: "description",
        content:
          "Reliable and quality passenger transport in Sabaragamuwa. Leadership, complaints hotlines and RTI contacts.",
      },
    ],
  }),
  component: Home,
});

type FunctionItem = { title: string; body: string };

function Home() {
  const { t } = useTranslation();
  const functions = (t("functions", { returnObjects: true }) as FunctionItem[]) ?? [];
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
        <img
          src={heroBuses}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-right opacity-90"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/85 to-primary-dark/10"
        />
         <div className="container-narrow relative grid gap-10 py-16 text-center md:min-h-[520px] md:grid-cols-[1.1fr_auto] md:items-center md:py-28 md:text-left">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold ring-1 ring-white/20">
              {t("home.eyebrow")}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight drop-shadow-lg sm:text-5xl md:text-6xl">
              {t("home.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/90 drop-shadow sm:text-lg md:mx-0">{t("home.tagline")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                to="/services"
                className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-primary-dark shadow-elegant transition hover:brightness-110"
              >
                {t("home.cta.services")}
              </Link>
              <Link
                to="/staff"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant transition hover:bg-white/90"
              >
                {t("home.cta.staff")}
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {t("home.cta.contact")}
              </Link>
            </div>
          </div>
         
        </div>
      </section>

      {/* Leadership */}
      <section className="container-narrow py-16">
        <SectionHeading eyebrow={t("home.leadership.eyebrow")} title={t("home.leadership.title")} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((p) => (
            <div
              key={p.roleKey}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-elegant sm:text-left"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground sm:mx-0">
                <span className="font-display text-2xl">
                  {p.name.split(" ").slice(-2, -1)[0]?.[0] ?? p.name[0]}
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                {t(`leadership.${p.roleKey}`)}
              </p>
              <p className="mt-1 font-display text-lg font-semibold">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Functions */}
      <section className="bg-secondary/50 py-16">
        <div className="container-narrow">
          <SectionHeading eyebrow={t("home.functions.eyebrow")} title={t("home.functions.title")} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {functions.map((f, i) => (
              <div key={i} className="relative rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-primary">{f.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — split per district */}
      <section className="container-narrow py-16">
        <SectionHeading eyebrow={t("home.stats.eyebrow")} title={t("home.stats.title")} />
        <div className="mt-10 space-y-10">
          {(["ratnapura", "kegalle"] as const).map((district) => (
            <div key={district}>
              <h3 className="font-display text-xl font-semibold text-primary">
                {t(`home.stats.${district}`)}
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {STATS_BY_DISTRICT[district].map((s) => (
                  <div
                    key={`${district}-${s.key}`}
                    className="rounded-xl border border-border bg-card p-6 text-center"
                  >
                    <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t(`stats.${s.key}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Complaints */}
      <section className="bg-primary-dark py-16 text-primary-foreground">
        <div className="container-narrow">
          <SectionHeading
            eyebrow={t("home.complaints.eyebrow")}
            title={t("home.complaints.title")}
            invert
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {(
              [
                [t("home.district.ratnapura"), COMPLAINTS.ratnapura],
                [t("home.district.kegalle"), COMPLAINTS.kegalle],
              ] as const
            ).map(([district, nums]) => (
              <div
                key={district}
                className="rounded-xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur sm:text-left"
              >
               <p className="text-xs font-semibold uppercase tracking-wider text-gold">{district}</p>
                <div className="mt-3 flex flex-col items-center gap-1.5 sm:items-start">
                  {nums.map((n) => (
                    <ContactLink
                      key={n}
                      number={n}
                      iconClassName="h-5 w-5"
                      className="font-display text-2xl font-semibold hover:text-gold"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  invert,
}: {
  eyebrow: string;
  title: string;
  invert?: boolean;
}) {
  return (
    <div className="text-center">
      <p
        className={
          "text-xs font-semibold uppercase tracking-[0.2em] " +
          (invert ? "text-gold" : "text-primary")
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          "mt-2 font-display text-3xl font-bold sm:text-4xl " +
          (invert ? "text-primary-foreground" : "text-foreground")
        }
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
    </div>
  );
}
