import { useEffect, useState } from "react";

const useConfigStopwatch = (initialTime: number = 0) => {
	const [timeLeft, setTimeLeft] = useState(initialTime);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		// Atualiza o tempo restante quando o tempo total muda
		setTimeLeft(initialTime);
	}, [initialTime]);

	useEffect(() => {
		let timer: NodeJS.Timeout | null = null;

		if (isRunning) {
			timer = setInterval(() => {
				setTimeLeft((prevTime) => {
					if (prevTime > 0) {
						return prevTime - 1; // Decrementa o tempo
					} else {
						setIsRunning(false); // Para o cronômetro ao chegar em 0
						return 0;
					}
				});
			}, 1000);
		}

		return () => {
			if (timer) clearInterval(timer); // Limpa o intervalo ao desmontar ou parar
		};
	}, [isRunning]);

	const start = () => setIsRunning(true);
	const pause = () => setIsRunning(false);
	const resetTimer = () => {
		setIsRunning(false);
		setTimeLeft(initialTime);
	};

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
			2,
			"0"
		)}`;
	};

	return { timeLeft, isRunning, start, pause, resetTimer, formatTime };
};

export default useConfigStopwatch;
