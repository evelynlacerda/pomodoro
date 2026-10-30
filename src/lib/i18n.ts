import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enUS from "@/locale/en-us.json";
import ptBR from "@/locale/pt-br.json";

/*
 * As traduções são embutidas no bundle: em produção a pasta src/ não é
 * servida, então carregar os JSON via HTTP só funcionava no servidor de dev.
 */
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      "en-us": { translation: enUS },
      "pt-br": { translation: ptBR },
    },
    supportedLngs: ["en-us", "pt-br"],
    lowerCaseLng: true,
    detection: {
      order: ["path", "navigator", "localStorage"],
      lookupFromPathIndex: 0,
      // "pt", "pt-BR", "pt-PT"... viram pt-br; qualquer outro idioma cai em en-us
      convertDetectedLanguage: (lng: string) =>
        lng.toLowerCase().startsWith("pt") ? "pt-br" : "en-us",
    },
    fallbackLng: "en-us",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
