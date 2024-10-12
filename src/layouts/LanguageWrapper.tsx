import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useParams } from "react-router-dom";

export const LanguageWrapper: React.FC = () => {
	const { lang } = useParams<{ lang: string }>();
	const { i18n } = useTranslation();

	React.useEffect(() => {
		if (lang && i18n.language !== lang) {
			i18n.changeLanguage(lang);
		}
	}, [lang, i18n]);

	return <Outlet />;
};