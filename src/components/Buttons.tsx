import { useTranslation } from "react-i18next";

interface ButtonsProps {
	start: () => void;
	pause: () => void;
	resetTimer: () => void;
}

const Buttons = ({ start, pause, resetTimer }: ButtonsProps) => {
	const { t } = useTranslation();

	return (
		<div className="buttons">
			<button onClick={start}>{t("Start")}</button>
            <div>
                <button onClick={pause}>{t("Pause")}</button>
                <button onClick={resetTimer}>{t("Reset")}</button>
            </div>
		</div>
	);
};

export default Buttons;
