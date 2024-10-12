import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpBackend)
	.init({
		backend: {
			loadPath: "/src/locale/{{lng}}.json",
		},
		detection: {
			order: ["path", "navigator", "localStorage"],
			lookupFromPathIndex: 0,
		},
		react: {
			useSuspense: true,
		},
		lng: "en-us",
		fallbackLng: "en-us",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
