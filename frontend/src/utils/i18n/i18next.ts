import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import sv from "./locales/sv.json";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    resources: {
      en: { translation: en },
      sv: { translation: sv },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .catch(console.error);

export default i18next;
