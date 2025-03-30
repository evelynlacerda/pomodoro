import { useState } from "react";
import { useTranslation } from "react-i18next";

const useLang = () => {
	const {
		t,
		i18n: { changeLanguage, language },
	} = useTranslation();

	const [currentLanguage, setCurrentLanguage] = useState(language);

	const handleChangeLanguage = () => {
		const newLanguage = currentLanguage === "en-us" ? "pt-br" : "en-us";
		changeLanguage(newLanguage);
		setCurrentLanguage(newLanguage);
	};

	return {
		t,
		currentLanguage,
		handleChangeLanguage,
	};
};

export default useLang;
