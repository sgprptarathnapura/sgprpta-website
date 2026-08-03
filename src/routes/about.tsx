import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import { SectionHeading } from "./index";
import { BOARD, INFO_OFFICER, STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Authority — SGRPTA" },
      {
        name: "description",
        content:
          "Board of Directors, history, main functions and key statistics of the Sabaragamuwa Provincial Road Passenger Transport Authority.",
      },
      { property: "og:title", content: "About the Authority — SGPPTA" },
      {
        property: "og:description",
        content: "Leadership, history and statistics of SGRPTA.",
      },
    ],
  }),
  component: About,
});

type FunctionItem = { title: string; body: string };

function About() {
  const { t } = useTranslation();
  const functions = (t("functions", { returnObjects: true }) as FunctionItem[]) ?? [];
  return (
    <SiteLayout>
      <PageHero title={t("about.title")} subtitle={t("about.subtitle")} />

      <section className="container-narrow py-16">
        <SectionHeading eyebrow={t("about.story.eyebrow")} title={t("about.story.title")} />
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-muted-foreground">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container-narrow">
          <SectionHeading eyebrow={t("about.board.eyebrow")} title={t("about.board.title")} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((m) => (
              <div
                key={m.name}
                className="rounded-xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-sm"
              >
                <p className="font-display text-base font-semibold text-foreground">{m.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{t("about.member")}</p>
                <a
                  href={`tel:${m.phone.replace(/\s/g, "")}`}
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {m.phone}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-primary/20 bg-primary-soft p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              {t("about.infoOfficerRole")}
            </p>
            <p className="mt-1 font-display text-xl font-semibold">{INFO_OFFICER.name}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <a href={`tel:${INFO_OFFICER.mobile.replace(/\s/g, "")}`} className="text-primary hover:underline">
                {t("about.mobile")}: {INFO_OFFICER.mobile}
              </a>
              {INFO_OFFICER.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="text-foreground hover:text-primary">
                  {p}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-16">
        <SectionHeading eyebrow={t("about.mandate.eyebrow")} title={t("about.mandate.title")} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {functions.map((f, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6">
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
      </section>

      <section className="bg-primary-dark py-16 text-primary-foreground">
        <div className="container-narrow">
          <SectionHeading eyebrow={t("about.figures.eyebrow")} title={t("about.figures.title")} invert />
          <div className="mt-10 space-y-10">
            {(["ratnapura", "kegalle"] as const).map((district) => (
              <div key={district}>
                <h3 className="font-display text-xl font-semibold text-gold">
                  {t(`about.figures.${district}`)}
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {STATS.map((s) => (
                    <div
                      key={`${district}-${s.key}`}
                      className="rounded-xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur"
                    >
                      <p className="font-display text-4xl font-bold text-gold">{s.value}</p>
                      <p className="mt-1 text-sm opacity-90">{t(`stats.${s.key}`)}</p>
                    </div>
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

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-[image:var(--gradient-hero)] py-14 text-primary-foreground">
      <div className="container-narrow">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">SGPRPTA</p>
        <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-white/85">{subtitle}</p>
      </div>
    </section>
  );
}
