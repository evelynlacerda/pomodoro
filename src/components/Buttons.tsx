import { useTranslation } from "react-i18next";

const Buttons = () => {
	const { t } = useTranslation();

	return (
		<div className="buttons">
			<button>{t("Start")}</button>
            <div>
                <button>{t("Pause")}</button>
                <button>{t("Reset")}</button>
            </div>
		</div>
	);
};

export default Buttons;
