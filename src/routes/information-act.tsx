import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "./about";
import { RTI_OFFICER, FARE_TABLES_URL, BUS_TIMETABLE_URL } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import vacanciesData from "@/assets/vacancies.json";

type Vacancy = {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  salary: string;
  applicationDeadline: string;
};

const VACANCIES: Vacancy[] = vacanciesData.vacancies ?? [];


export const Route = createFileRoute("/information-act")({
  head: () => ({
    meta: [
      { title: "Right to Information — SGPRPTA" },
      {
        name: "description",
        content:
          "Right to Information Act — designated Information Officer, contact details and links to the RTI resources of Sri Lanka.",
      },
      { property: "og:title", content: "Right to Information — SGPRPTA" },
      { property: "og:description", content: "SGPRPTA RTI officer, downloads and external RTI resources." },
    ],
  }),
  component: InfoAct,
});

const EXTERNAL = [
  { label: "Right to Information — Sri Lanka", href: "https://www.rti.gov.lk/" },
  { label: "RTI Applications & Forms", href: "https://rti.gov.lk/rti-forms/" },
  { label: "Contact the RTI Information Officers", href: "https://rti.gov.lk/contact-info/" },
];

function DriveIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#1FA463" d="m12 2 5.7 9.9H6.3z" />
      <path fill="#4285F4" d="M6.3 11.9 3.4 17l2.9 5.1h5.8l2.9-5.1z" />
      <path fill="#FFBA00" d="M17.7 11.9 14.8 17l2.9 5.1L23.4 12z" />
    </svg>
  );
}

function InfoAct() {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <PageHero title={t("rti.title")} subtitle={t("rti.subtitle")} />
      <section className="container-narrow grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-primary">{t("rti.heading")}</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-foreground/85">
            <p>{t("rti.p1")}</p>
          </div>

          <h3 className="mt-10 font-display text-xl font-semibold text-primary">
            {t("rti.moreInfo")}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("rti.moreInfoDesc")}</p>
          <ul className="mt-4 space-y-2">
            {EXTERNAL.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary-soft"
                >
                  {l.label} <span>↗</span>
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-display text-xl font-semibold text-primary">{t("rti.fareTitle")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("rti.fareDesc")}</p>
          <a
            href={FARE_TABLES_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-3 rounded-lg border border-primary/25 bg-primary-soft px-5 py-3 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:shadow-elegant"
          >
            <DriveIcon />
            {t("rti.fareCta")}
            <span aria-hidden>↗</span>
          </a>

          <h3 className="mt-10 font-display text-xl font-semibold text-primary">{t("rti.timetableTitle")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("rti.timetableDesc")}</p>
          <a
            href={BUS_TIMETABLE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-3 rounded-lg border border-primary/25 bg-primary-soft px-5 py-3 text-sm font-semibold text-primary shadow-sm transition hover:border-primary hover:shadow-elegant"
          >
            <DriveIcon />
            {t("rti.timetableCta")}
            <span aria-hidden>↗</span>
          </a>

          <h3 className="mt-10 font-display text-xl font-semibold text-primary">
            {t("rti.vacanciesTitle")}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("rti.vacanciesDesc")}</p>

          {VACANCIES.length === 0 ? (
            <p className="mt-4 rounded-lg border border-dashed border-primary/30 bg-primary-soft px-5 py-6 text-center text-sm font-medium text-primary">
              {t("rti.vacanciesEmpty")}
            </p>
          ) : (
            <Accordion className="mt-4 rounded-lg border border-border bg-card px-4">
              {VACANCIES.map((v) => (
                <AccordionItem key={v.id} value={`vacancy-${v.id}`}>
                  <AccordionTrigger className="text-base font-semibold text-primary">
                    {v.title}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 text-sm text-foreground/85">
                    <p>{v.description}</p>
                    <div>
                      <p className="font-semibold text-primary">{t("rti.vacancyRequirements")}</p>
                      <ul className="mt-1 list-disc space-y-1 pl-5">
                        {v.requirements.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <dl className="grid gap-1 sm:grid-cols-3">
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                          {t("rti.vacancyLocation")}
                        </dt>
                        <dd className="font-medium">{v.location}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                          {t("rti.vacancySalary")}
                        </dt>
                        <dd className="font-medium">{v.salary}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                          {t("rti.vacancyDeadline")}
                        </dt>
                        <dd className="font-medium">{v.applicationDeadline}</dd>
                      </div>
                    </dl>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>


        <aside className="h-fit rounded-xl border border-primary/20 bg-primary-soft p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {t("rti.officer")}
          </p>
          <p className="mt-2 font-display text-lg font-semibold">{RTI_OFFICER.name}</p>
          <p className="text-sm text-muted-foreground">{t("rti.officerRole")}</p>

          <dl className="mt-4 space-y-2 text-sm">
            <Row label={t("about.mobile")} value={RTI_OFFICER.mobile} tel />
            {RTI_OFFICER.phones.map((p) => (
              <Row key={p} label={t("rti.phone")} value={p} tel />
            ))}
            <Row label={t("rti.fax")} value={RTI_OFFICER.fax} />
            <Row label={t("rti.email")} value={RTI_OFFICER.email} mail />
          </dl>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Row({ label, value, tel, mail }: { label: string; value: string; tel?: boolean; mail?: boolean }) {
  const content = tel ? (
    <a href={`tel:${value.replace(/\s/g, "")}`} className="text-primary hover:underline">{value}</a>
  ) : mail ? (
    <a href={`mailto:${value}`} className="text-primary hover:underline">{value}</a>
  ) : (
    <span>{value}</span>
  );
  return (
    <div className="flex justify-between gap-4 border-b border-primary/10 pb-2 last:border-0">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right font-medium">{content}</dd>
    </div>
  );
}
