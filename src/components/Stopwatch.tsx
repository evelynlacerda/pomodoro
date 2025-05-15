import useConfigStopwatch from "@/hooks/useConfigs";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Stopwatch = ({ totalTime }: { totalTime: number }) => {
    const {timeLeft, formatTime} = useConfigStopwatch(totalTime);
    const percentage = (timeLeft / totalTime) * 100;
    // const percentage = 75;
    
    return (
			<div className="stopwatch">
                <div className="shadow"></div>
				<CircularProgressbar
					value={percentage}
					text={formatTime(timeLeft)}
				/>
			</div>
		);
}

export default Stopwatch;
