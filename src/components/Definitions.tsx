import {
	POMODORO_BREAK,
	POMODORO_REPEAT,
	POMODORO_TIMING,
} from "@/constants/configsDefine";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Definitions = ({
	onTimeChange,
	onBreakChange,
	onRepeatChange,
}: {
	onTimeChange: (time: number) => void;
	onBreakChange: (time: number) => void;
	onRepeatChange: (repeat: number) => void;
}) => {
	const { t } = useTranslation();

	const [selectedTime, setSelectedTime] = useState<string | null>(null);
	const [selectedBreak, setSelectedBreak] = useState<string | null>(null);
	const [customTime, setCustomTime] = useState("");
	const [customBreak, setCustomBreak] = useState("");

	const handlePresetTime = (id: string, duration: number) => {
		setSelectedTime(id);
		setCustomTime("");
		onTimeChange(duration);
	};

	const handlePresetBreak = (id: string, duration: number) => {
		setSelectedBreak(id);
		setCustomBreak("");
		onBreakChange(duration);
	};

	// O valor personalizado é informado em segundos e anula o preset escolhido
	const handleCustomTime = (value: string) => {
		setCustomTime(value);
		if (value !== "") setSelectedTime(null);
		onTimeChange(Number(value));
	};

	const handleCustomBreak = (value: string) => {
		setCustomBreak(value);
		if (value !== "") setSelectedBreak(null);
		onBreakChange(Number(value));
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
									checked={selectedTime === timeItem.id}
									onChange={() =>
										handlePresetTime(timeItem.id!, timeItem.duration!)
									}
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
								<input
									type="radio"
									name="break-min"
									id={breakItem.id}
									checked={selectedBreak === breakItem.id}
									onChange={() =>
										handlePresetBreak(breakItem.id!, breakItem.duration!)
									}
								/>
								<label htmlFor={breakItem.id}>{t(breakItem.name)}</label>
							</div>
						))}
					</div>
				</div>

				<div className="custom">
					<p>
						{t("Custom")}
						<span
							className="info"
							tabIndex={0}
							role="img"
							aria-label={t("Enter the time in seconds. Ex: 1 minute = 60")}
						>
							i
							<span className="tooltip" role="tooltip">
								{t("Enter the time in seconds. Ex: 1 minute = 60")}
							</span>
						</span>
					</p>
					<div className="custom-set">
						<input
							type="number"
							min={0}
							placeholder={`${t("Seconds")}`}
							value={customTime}
							onChange={(e) => handleCustomTime(e.target.value)}
						/>
						<input
							type="number"
							min={0}
							placeholder={`${t("Break")} (${t("seconds")})`}
							value={customBreak}
							onChange={(e) => handleCustomBreak(e.target.value)}
						/>
					</div>
				</div>

				<div className="repeat">
					<p>{t("Repeat")}</p>
					<div className="repeat-set">
						{POMODORO_REPEAT.map((repeatItem) => (
							<div key={repeatItem.id}>
								<input
									type="radio"
									name="repeat-value"
									id={repeatItem.id}
									onChange={() => onRepeatChange(repeatItem.quantity!)}
								/>
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
