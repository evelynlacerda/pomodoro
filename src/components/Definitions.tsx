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
						<div>
							<input type="radio" name="duration" id="fifty-min" />
							<label htmlFor="fifty-min">{t("15 minutes")}</label>
						</div>
						<div>
							<input type="radio" name="duration" id="twenty-min" />
							<label htmlFor="twenty-min">{t("25 minutes")}</label>
						</div>
						<div>
							<input type="radio" name="duration" id="fourty-min" />
							<label htmlFor="fourty-min">{t("45 minutes")}</label>
						</div>
					</div>
				</div>

				<div className="break">
					<p>{t("Break")}</p>
					<div className="break-set">
						<div>
							<input type="radio" name="break-min" id="five-min" />
							<label htmlFor="five-min">{t("5 minutes")}</label>
						</div>
						<div>
							<input type="radio" name="break-min" id="ten-min" />
							<label htmlFor="ten-min">{t("10 minutes")}</label>
						</div>
						<div>
							<input type="radio" name="break-min" id="fifty-min" />
							<label htmlFor="fifty-min">{t("15 minutes")}</label>
						</div>
					</div>
				</div>

				<div className="custom">
					<p>{t("Custom")}</p>
					<div className="custom-set">
						<input type="number" placeholder={`${t("Minutes")}`} />
						<input type="number" placeholder={`${t("Break")}`} />
					</div>
				</div>

				<div className="repeat">
					<p>{t("Repeat")}</p>
					<div className="repeat-set">
						<div>
							<input type="radio" name="repeat-value" id="repeat-one" />
							<label htmlFor="repeat-one">1</label>
						</div>
						<div>
							<input type="radio" name="repeat-value" id="repeat-two" />
							<label htmlFor="repeat-two">2</label>
						</div>
						<div>
							<input type="radio" name="repeat-value" id="repeat-three" />
							<label htmlFor="repeat-three">3</label>
						</div>
						<div>
							<input type="radio" name="repeat-value" id="repeat-four" />
							<label htmlFor="repeat-four">4</label>
						</div>
						<div>
							<input type="radio" name="repeat-value" id="repeat-five" />
							<label htmlFor="repeat-five">5</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Definitions;
