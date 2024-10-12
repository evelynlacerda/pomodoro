import { useTranslation } from "react-i18next";

const Definitions = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className="controls">
				<h2>{t("Definitions")}</h2>

				<div className="time">
					<p>{t("Minutes")}</p>
					<div className="time-set">
						<input type="radio" name="duration" id="fifty-min" />
						<label htmlFor="fifty-min">{t("15 minutes")}</label>
						<input type="radio" name="duration" id="twenty-min" />
						<label htmlFor="twenty-min">{t("25 minutes")}</label>
						<input type="radio" name="duration" id="fourty-min" />
						<label htmlFor="fourty-min">{t("45 minutes")}</label>
					</div>
				</div>

				<div className="break">
					<p>{t("Pause")}</p>
					<div className="break-set">
						<input type="radio" name="break-min" id="five-min" />
						<label htmlFor="five-min">{t("5 minutes")}</label>
						<input type="radio" name="break-min" id="ten-min" />
						<label htmlFor="ten-min">{t("10 minutes")}</label>
						<input type="radio" name="break-min" id="fifty-min" />
						<label htmlFor="fifty-min">{t("15 minutes")}</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Definitions;