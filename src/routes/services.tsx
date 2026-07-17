import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SGPRPTA" },
      {
        name: "description",
        content:
          "Services provided by SGPRPTA: passenger and cargo transportation, common services, bus services and staff services.",
      },
      { property: "og:title", content: "Services — SGPRPTA" },
      { property: "og:description", content: "Passenger and cargo transportation, common services and staff services." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Services"
        subtitle="Effective, efficient service driven by results-based management, public relations and team spirit."
      />
      <section className="container-narrow py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {SERVICES.map((cat) => (
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
