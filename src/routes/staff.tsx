import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";
import { STAFF } from "@/lib/site-data";
import { SectionHeading } from "./index";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Our Staff — SGPRPTA" },
      {
        name: "description",
        content:
          "Meet the staff of the Sabaragamuwa Provincial Road Passenger Transport Authority — management, operations and administration officers.",
      },
      { property: "og:title", content: "Our Staff — SGPRPTA" },
      {
        property: "og:description",
        content: "Management and administration officers of SGPRPTA.",
      },
    ],
  }),
  component: Staff,
});

function Staff() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Staff"
        subtitle="The team delivering reliable and quality passenger transport across Sabaragamuwa."
      />

      <section className="container-narrow py-16">
        <SectionHeading eyebrow="Meet the Team" title="Management & Administration" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAFF.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <img
                src={s.photo}
                alt={`Portrait of ${s.name}`}
                className="mx-auto h-28 w-28 rounded-full object-cover ring-4 ring-primary/15"
                loading="lazy"
              />
              <p className="mt-4 font-display text-lg font-semibold text-foreground">
                {s.name}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {s.role}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
          * Placeholder portraits shown. Official photographs will be published here once received
          from the Administration Division.
        </p>
      </section>
    </SiteLayout>
  );
}

