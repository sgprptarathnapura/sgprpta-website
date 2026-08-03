import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import { NAV, SITE, COMPLAINTS } from "@/lib/site-data";
import i18n, { LANG_LABEL, LANG_STORAGE_KEY, SUPPORTED_LANGS, type Lang } from "@/lib/i18n";

function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && window.localStorage.getItem(LANG_STORAGE_KEY)) as Lang | null;
    if (stored && (SUPPORTED_LANGS as readonly string[]).includes(stored)) {
      setLang(stored);
      if (i18n.language !== stored) void i18n.changeLanguage(stored);
    }
  }, []);

  const change = (l: Lang) => {
    setLang(l);
    window.localStorage.setItem(LANG_STORAGE_KEY, l);
    void i18n.changeLanguage(l);
  };

  const { t } = useTranslation();


  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
      {(Object.keys(LANG_LABEL) as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => change(l)}
          className={
            "rounded-md border px-3 py-1.5 text-sm transition " +
            (lang === l
              ? "border-gold bg-gold text-primary-dark font-semibold"
              : "border-white/25 text-white/85 hover:border-gold hover:text-gold")
          }
        >
          {LANG_LABEL[l]}
        </button>
      ))}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}

function WhatsAppIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.52 3.48A11.79 11.79 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.66a11.86 11.86 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9a11.8 11.8 0 0 0-3.45-8.42Zm-8.46 18.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.67-.24-.38a9.85 9.85 0 0 1-1.51-5.23c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.44 9.87-9.91 9.87Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.21 5.1 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function WhatsAppLink({ number, label }: { number: string; label: string }) {
  const digits = number.replace(/\D/g, "");
  const wa = digits.startsWith("0") ? "94" + digits.slice(1) : digits;
  return (
    <a
      href={`https://wa.me/${wa}`}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-medium hover:bg-white/20 sm:px-2.5 sm:py-0.5"
      title={`WhatsApp ${label}`}
    >
      <WhatsAppIcon />
      <span>{label} {number}</span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useTranslation();

 return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-narrow flex flex-col items-center gap-1.5 py-2 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:gap-2 sm:py-1.5 sm:text-left">
          <span className="opacity-90">{t("header.province")}</span>
          <span className="flex w-full flex-col items-center gap-1.5 opacity-95 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
            <span className="font-semibold">{t("header.complaints")}</span>
            <span className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
              <WhatsAppLink number={COMPLAINTS.ratnapura[0]} label={t("header.ratnapura")} />
              <WhatsAppLink number={COMPLAINTS.kegalle[0]} label={t("header.kegalle")} />
            </span>
          </span>
        </div>
      </div>
     <div className="container-narrow grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 md:flex md:justify-between md:gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={logo} alt="SGPRPTA emblem" className="h-10 w-10 shrink-0 rounded-full ring-2 ring-primary/20 sm:h-12 sm:w-12" />
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-[15px] font-bold text-primary sm:text-base">
              {SITE.shortName}
            </div>
            <div className="hidden text-[11px] text-muted-foreground sm:block">
              Sabaragamuwa Road Passenger Transport Authority
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => {
            const key = n.to === "/" ? "home" : n.to.replace(/^\/+/, "");
            const active = n.to === "/" ? path === "/" : path.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                  (active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:bg-primary-soft hover:text-primary")
                }
              >
                {t(`nav.${key}`, n.label)}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="shrink-0 justify-self-end rounded-md border border-border p-2 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border md:hidden">
          <div className="container-narrow flex flex-col py-2 text-center">
            {NAV.map((n) => {
              const key = n.to === "/" ? "home" : n.to.replace(/^\/+/, "");
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary"
                >
                  {t(`nav.${key}`, n.label)}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="mt-16 bg-primary-dark text-primary-foreground">
      <div className="container-narrow grid gap-8 py-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
        <div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <img src={logo} alt="" className="h-10 w-10 rounded-full bg-white p-1" />
            <span className="font-display font-bold">SGPRPTA</span>
          </div>
          <p className="mt-3 text-sm opacity-80">{t("footer.tagline")}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">{t("footer.headOffice")}</h4>
          <p className="text-sm opacity-90">
            New Town, Ratnapura
            <br />
            +94 45 222 2085
            <br />
            sgprptarathnapura@gmail.com
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">{t("footer.districtOffice")}</h4>
          <p className="text-sm opacity-90">
            Rathambalawatta, Kegalle
            <br />
            +94 35 223 2295
            <br />
            sgprptakegalle@gmail.com
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">{t("footer.quickLinks")}</h4>
          <ul className="space-y-1.5 text-sm opacity-90">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold hover:underline">
                  {t(`nav.${n.key}`)}
                </Link>
              </li>
            ))}
            <li>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                {t("footer.facebook")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-narrow py-6">
          <LanguageSwitcher />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-narrow flex flex-col items-center justify-between gap-2 py-4 text-center text-xs opacity-80 sm:flex-row sm:text-left">
          <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
          <span>{t("footer.govNote")}</span>
        </div>
      </div>
    </footer>
  );
}


export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
