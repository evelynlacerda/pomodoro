import useLang from "@/hooks/_useLang";
import Buttons from "../components/Buttons";
import Definitions from "../components/Definitions";
import Stopwatch from "../components/Stopwatch";

const Index = () => {
	const { currentLanguage, handleChangeLanguage } = useLang();

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
					<Definitions />
					<Buttons />
				</div>
				<Stopwatch />
			</div>
		</main>
	);
};

export default Index;