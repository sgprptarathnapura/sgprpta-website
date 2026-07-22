import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroBuses from "@/assets/bus.png";
import {
  LEADERSHIP,
  MAIN_FUNCTIONS,
  NOTICES,
  COMPLAINTS,
  STATS,
  SITE,
} from "@/lib/site-data";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGPRPTA — Sabaragamuwa Provincial Road Passenger Transport Authority" },
      {
        name: "description",
        content:
          "Reliable and quality passenger transport in Sabaragamuwa. Notices, leadership, complaints hotlines and RTI contacts.",
      },
    ],
  }),
  component: Home,
});

function Home() {
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
        <div className="container-narrow relative grid gap-10 py-20 md:min-h-[520px] md:grid-cols-[1.1fr_auto] md:items-center md:py-28">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold ring-1 ring-white/20 notranslate" translate="no">
              Government of Sri Lanka · Sabaragamuwa Province
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight drop-shadow-lg sm:text-5xl md:text-6xl">
              Sabaragamuwa Provincial Road Passenger Transport Authority
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90 drop-shadow">{SITE.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-primary-dark shadow-elegant transition hover:brightness-110"
              >
                Explore Services
              </Link>
              <Link
                to="/staff"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow-elegant transition hover:bg-white/90"
              >
                Meet Our Staff
              </Link>
              <Link
                to="/contact"
                className="rounded-md border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact & Complaints
              </Link>
            </div>
          </div>
         
        </div>
      </section>


      {/* Notices bar */}
      <section className="border-b border-border bg-primary-soft/60">
        <div className="container-narrow grid gap-3 py-4 md:grid-cols-2">
          {NOTICES.map((n) => (
            <a
              key={n.href}
              href={n.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-md border border-primary/15 bg-background px-4 py-3 text-sm transition hover:border-primary hover:shadow-sm"
            >
              <span className="rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                {n.tag}
              </span>
              <span className="flex-1 font-medium text-foreground group-hover:text-primary">
                {n.title}
              </span>
              <span className="text-primary">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="container-narrow py-16">
        <SectionHeading eyebrow="Our Leadership" title="The people who guide the Authority" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((p) => (
            <div
              key={p.role}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-display text-2xl">
                  {p.name.split(" ").slice(-2, -1)[0]?.[0] ?? p.name[0]}
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">{p.role}</p>
              <p className="mt-1 font-display text-lg font-semibold">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Functions */}
      <section className="bg-secondary/50 py-16">
        <div className="container-narrow">
          <SectionHeading eyebrow="Main Functions" title="What the Authority does" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {MAIN_FUNCTIONS.map((f, i) => (
              <div key={f.title} className="relative rounded-xl border border-border bg-card p-6">
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

      {/* Stats */}
      <section className="container-narrow py-16">
        <SectionHeading eyebrow="By the Numbers" title="Serving Sabaragamuwa" />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Complaints */}
      <section className="bg-primary-dark py-16 text-primary-foreground">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Report an Issue"
            title="Complaint Hotlines"
            invert
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {(
              [
                ["Ratnapura District", COMPLAINTS.ratnapura],
                ["Kegalle District", COMPLAINTS.kegalle],
              ] as const
            ).map(([district, nums]) => (
              <div
                key={district}
                className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">{district}</p>
                <div className="mt-3 space-y-1.5">
                  {nums.map((n) => (
                    <a
                      key={n}
                      href={`tel:${n.replace(/\s/g, "")}`}
                      className="block font-display text-2xl font-semibold hover:text-gold"
                    >
                      {n}
                    </a>
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
