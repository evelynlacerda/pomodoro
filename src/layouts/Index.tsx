import useLang from "@/hooks/useLang";
import Buttons from "../components/Buttons";
import Definitions from "../components/Definitions";
import Stopwatch from "../components/Stopwatch";
import { useState } from "react";

const Index = () => {
	const { currentLanguage, handleChangeLanguage } = useLang();
	const [totalTime, setTotalTime] = useState(1500); 

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
					<Definitions onTimeChange={handleTimeChange}/>
					<Buttons totalTime={totalTime} />
				</div>
				<Stopwatch totalTime={totalTime} />
			</div>
		</main>
	);
};

export default Index;
