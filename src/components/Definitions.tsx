import {
	POMODORO_BREAK,
	POMODORO_REPEAT,
	POMODORO_TIMING,
} from "@/constants/configsDefine";
import { useTranslation } from "react-i18next";

const Definitions = ({
	onTimeChange,
}: {
	onTimeChange: (time: number) => void;
}) => {
	const { t } = useTranslation();

	const handleTimeChange = (duration: number) => {
		onTimeChange(duration);
	};

	return (
		<>
			<div className="controls">
				<h2>{t("Settings")}</h2>

				<div className="time">
					<p>{t("Minutes")}</p>
					<div className="time-set">
						{POMODORO_TIMING.map((timeItem) => (
							<div key={timeItem.id}>
								<input
									type="radio"
									name="duration"
									id={timeItem.id}
									onChange={() => handleTimeChange(timeItem.duration!)}
								/>
								<label htmlFor={timeItem.id}>{t(timeItem.name)}</label>
							</div>
						))}
					</div>
				</div>

				<div className="break">
					<p>{t("Break")}</p>
					<div className="break-set">
						{POMODORO_BREAK.map((breakItem) => (
							<div key={breakItem.id}>
								<input type="radio" name="break-min" id={breakItem.id} />
								<label htmlFor={breakItem.id}>{t(breakItem.name)}</label>
							</div>
						))}
					</div>
				</div>

				<div className="custom">
					<p>{t("Custom")}</p>
					<div className="custom-set">
						<input
							type="number"
							placeholder={`${t("Minutes")}`}
							onChange={(e) => handleTimeChange(Number(e.target.value) * 60)}
						/>
						<input type="number" placeholder={`${t("Break")}`} />
					</div>
				</div>

				<div className="repeat">
					<p>{t("Repeat")}</p>
					<div className="repeat-set">
						{POMODORO_REPEAT.map((repeatItem) => (
							<div key={repeatItem.id}>
								<input type="radio" name="repeat-value" id={repeatItem.id} />
								<label htmlFor={repeatItem.id}>{t(repeatItem.name)}</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Definitions;
