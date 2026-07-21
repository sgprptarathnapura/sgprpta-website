import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logo from "@/assets/logo.png";
import { NAV, SITE, COMPLAINTS } from "@/lib/site-data";

type Lang = "en" | "si" | "ta";

const LANG_LABEL: Record<Lang, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};

function setGoogleTranslateCookie(lang: Lang) {
  const value = lang === "en" ? "/en/en" : `/en/${lang}`;
  const host = window.location.hostname;
  // set for current host and parent domain so widget picks it up
  const parts = host.split(".");
  const domain = parts.length > 1 ? "." + parts.slice(-2).join(".") : host;
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${host}`;
  document.cookie = `googtrans=${value};path=/;domain=${domain}`;
}

function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    // read current
    const m = document.cookie.match(/googtrans=([^;]+)/);
    if (m) {
      const parts = decodeURIComponent(m[1]).split("/");
      const cur = parts[2] as Lang;
      if (cur === "si" || cur === "ta" || cur === "en") setLang(cur);
    }
    // inject Google Translate script once
    if (!document.getElementById("google-translate-script")) {
      (window as unknown as { googleTranslateElementInit: () => void }).googleTranslateElementInit = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new (window as any).google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "en,si,ta", autoDisplay: false },
          "google_translate_element",
        );
      };
      const s = document.createElement("script");
      s.id = "google-translate-script";
      s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const change = (l: Lang) => {
    setLang(l);
    setGoogleTranslateCookie(l);
    window.location.reload();
  };

  return (
    <div className="flex flex-wrap items-center gap-2 notranslate" translate="no">
      <span className="text-xs font-semibold uppercase tracking-wider text-gold">Translate</span>
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


function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-narrow flex flex-wrap items-center justify-between gap-2 py-1.5">
          <span className="opacity-90">Sabaragamuwa Provincial Council · Sri Lanka</span>
          <span className="opacity-90">
            Complaints — Ratnapura {COMPLAINTS.ratnapura[0]} · Kegalle {COMPLAINTS.kegalle[0]}
          </span>
        </div>
      </div>
      <div className="container-narrow flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="SGPRPTA emblem" className="h-12 w-12 rounded-full ring-2 ring-primary/20" />
          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold text-primary sm:text-base">
              {SITE.shortName}
            </div>
            <div className="hidden text-[11px] text-muted-foreground sm:block">
              Sabaragamuwa Provincial Road Passenger Transport Authority
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => {
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
                {n.label}
              </Link>
            );
          })}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-md border border-border p-2 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border md:hidden">
          <div className="container-narrow flex flex-col py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 bg-primary-dark text-primary-foreground">
      <div className="container-narrow grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded-full bg-white p-1" />
            <span className="font-display font-bold">SGPRPTA</span>
          </div>
          <p className="mt-3 text-sm opacity-80">
            Regulating and improving public passenger transport across Sabaragamuwa Province.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Head Office</h4>
          <p className="text-sm opacity-90">
            New Town, Ratnapura
            <br />
            +94 45 222 2085
            <br />
            sgprptarathnapura@gmail.com
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">District Office</h4>
          <p className="text-sm opacity-90">
            Rathambalawatta, Kegalle
            <br />
            +94 35 223 2295
            <br />
            sgprptakegalle@gmail.com
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
          <ul className="space-y-1.5 text-sm opacity-90">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                Facebook
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
        <div className="container-narrow flex flex-col items-center justify-between gap-2 py-4 text-xs opacity-80 sm:flex-row">
          <span>© {new Date().getFullYear()} Sabaragamuwa Provincial Road Passenger Transport Authority</span>
          <span>Government of Sri Lanka · Sabaragamuwa Province</span>
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
