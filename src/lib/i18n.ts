import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import si from "@/locales/si.json";
import ta from "@/locales/ta.json";

export const SUPPORTED_LANGS = ["en", "si", "ta"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const LANG_LABEL: Record<Lang, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};

export const LANG_STORAGE_KEY = "sgrpta-lang";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      si: { translation: si },
      ta: { translation: ta },
    },
    lng: "en", // SSR-safe default; client swaps in useEffect after hydration
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
