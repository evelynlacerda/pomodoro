import useLang from "@/hooks/useLang";
import useConfigStopwatch from "@/hooks/useConfigs";
import Buttons from "../components/Buttons";
import Definitions from "../components/Definitions";
import Stopwatch from "../components/Stopwatch";
import confetti from "canvas-confetti";
import { useState } from "react";

const Index = () => {
	const { currentLanguage, handleChangeLanguage } = useLang();
	const [totalTime, setTotalTime] = useState(1500);
	const [breakTime, setBreakTime] = useState(0);
	const [repeat, setRepeat] = useState(1);
	const { timeLeft, isBreak, phaseTime, start, pause, resetTimer, formatTime } =
		useConfigStopwatch(totalTime, breakTime, repeat, () =>
			confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } })
		);

    const handleTimeChange = (time: number) => {
        setTotalTime(time);
    }

	return (
		<main>
			<h1 className="title">Pomodoro</h1>
			<button type="button" className="lang" onClick={handleChangeLanguage}>
				<span
					className={`fi fi-${currentLanguage === "en-us" ? "us" : "br"}`}
				></span>
			</button>
			<div className="content">
				<div>
					<Definitions
						onTimeChange={handleTimeChange}
						onBreakChange={setBreakTime}
						onRepeatChange={setRepeat}
					/>
					<Buttons start={start} pause={pause} resetTimer={resetTimer} />
				</div>
				<Stopwatch
					totalTime={phaseTime}
					timeLeft={timeLeft}
					isBreak={isBreak}
					formatTime={formatTime}
				/>
			</div>
		</main>
	);
};

export default Index;
