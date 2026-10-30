import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const BREAK_COLOR = "#ef4444";

interface StopwatchProps {
    totalTime: number;
    timeLeft: number;
    isBreak: boolean;
    formatTime: (seconds: number) => string;
}

const Stopwatch = ({ totalTime, timeLeft, isBreak, formatTime }: StopwatchProps) => {
    const percentage = totalTime > 0 ? (timeLeft / totalTime) * 100 : 0;

    return (
			<div className="stopwatch">
                <div className="shadow"></div>
				<CircularProgressbar
					value={percentage}
					text={formatTime(timeLeft)}
					styles={isBreak ? buildStyles({ pathColor: BREAK_COLOR }) : undefined}
				/>
			</div>
		);
}

export default Stopwatch;
