import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Stopwatch = () => {
    const percentage = 50;
    
    return (
			<div className="stopwatch">
                <div className="shadow"></div>
				<CircularProgressbar
					value={percentage}
					text="00:22:30"
				/>
			</div>
		);
}

export default Stopwatch