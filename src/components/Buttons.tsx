import useConfigStopwatch from "@/hooks/useConfigs";
import { useTranslation } from "react-i18next";

const Buttons = ({totalTime}: {totalTime: number}) => {
	const { t } = useTranslation();
    const {start, pause, resetTimer} = useConfigStopwatch(totalTime); 

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
