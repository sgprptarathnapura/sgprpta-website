import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";
import newsData from "@/lib/news.json";

type NewsItem = {
  id: string;
  date: string;
  heading: string;
  description: string;
  images?: string[];
  link?: { url: string; label: string };
};

const NEWS: NewsItem[] = ((newsData as { news?: NewsItem[] }).news ?? [])
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — SGPRPTA" },
      {
        name: "description",
        content:
          "Latest news, notices and announcements from the Sabaragamuwa Provincial Road Passenger Transport Authority.",
      },
      { property: "og:title", content: "News & Updates — SGPRPTA" },
      {
        property: "og:description",
        content: "Latest news, notices and announcements from SGPRPTA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NewsPage,
});

function formatDate(date: string, lang: string) {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(lang === "en" ? "en-GB" : lang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function NewsPage() {
  const { t, i18n } = useTranslation();

  return (
    <SiteLayout>
      <PageHero title={t("news.title")} subtitle={t("news.subtitle")} />

      <section className="container-narrow py-16">
        {NEWS.length === 0 ? (
          <div className="mx-auto max-w-2xl rounded-xl border-2 border-dashed border-primary/40 bg-primary-soft/40 p-10 text-center">
            <p className="font-display text-xl font-semibold text-primary">{t("news.emptyTitle")}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t("news.emptyBody")}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {NEWS.map((n) => (
              <article
                key={n.id}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-sm sm:text-left"
              >
                <time dateTime={n.date} className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {formatDate(n.date, i18n.language)}
                </time>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">{n.heading}</h2>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {n.description}
                </p>

                {n.images && n.images.length > 0 && (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {n.images.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt={n.heading}
                        loading="lazy"
                        className="h-48 w-full rounded-lg border border-border object-cover"
                      />
                    ))}
                  </div>
                )}

                {n.link && (
                  <a
                    href={n.link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                  >
                    {n.link.label}
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
