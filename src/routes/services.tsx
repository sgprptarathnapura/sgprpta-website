import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SGRPTA" },
      {
        name: "description",
        content:
          "Services provided by SGRPTA: passenger and cargo transportation, common services, bus services and staff services.",
      },
      { property: "og:title", content: "Services — SGRPTA" },
      { property: "og:description", content: "Passenger and cargo transportation, common services and staff services." },
    ],
  }),
  component: Services,
});

type ServiceCategory = { title: string; items: string[] };

function Services() {
  const { t } = useTranslation();
  const services = (t("servicesList", { returnObjects: true }) as ServiceCategory[]) ?? [];

  return (
    <SiteLayout>
      <PageHero
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />
      <section className="container-narrow py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((cat) => (
            <article
              key={cat.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3 border-b border-border pb-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <h2 className="font-display text-xl font-bold text-primary">{cat.title}</h2>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary/70" />
                    <span className="text-foreground/85">{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
