import { useCallback, useEffect, useState } from "react";

type Phase = "work" | "break";

const useConfigStopwatch = (
	workTime: number = 0,
	breakTime: number = 0,
	repeat: number = 1,
	onFinish?: () => void
) => {
	const [phase, setPhase] = useState<Phase>("work");
	const [session, setSession] = useState(1);
	const [timeLeft, setTimeLeft] = useState(workTime);
	const [isRunning, setIsRunning] = useState(false);

	const resetTimer = useCallback(() => {
		setIsRunning(false);
		setPhase("work");
		setSession(1);
		setTimeLeft(workTime);
	}, [workTime]);

	// Qualquer mudança nas configurações reinicia o ciclo
	useEffect(() => {
		resetTimer();
	}, [resetTimer, breakTime, repeat]);

	useEffect(() => {
		if (!isRunning) return;

		const timer = setInterval(() => {
			setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
		}, 1000);

		return () => clearInterval(timer);
	}, [isRunning]);

	// Quando a fase acaba, alterna entre foco e pausa até completar as repetições
	// (a primeira execução do start + o valor de repeat)
	useEffect(() => {
		if (!isRunning || timeLeft > 0) return;

		if (phase === "break") {
			setPhase("work");
			setSession((s) => s + 1);
			setTimeLeft(workTime);
		} else if (session <= repeat) {
			if (breakTime > 0) {
				setPhase("break");
				setTimeLeft(breakTime);
			} else {
				setSession((s) => s + 1);
				setTimeLeft(workTime);
			}
		} else {
			// Todas as repetições concluídas: zera o cronômetro e avisa quem usa o hook
			resetTimer();
			onFinish?.();
		}
	}, [timeLeft, isRunning, phase, session, repeat, workTime, breakTime, resetTimer, onFinish]);

	const start = () => setIsRunning(true);
	const pause = () => setIsRunning(false);

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
			2,
			"0"
		)}`;
	};

	return {
		timeLeft,
		isRunning,
		isBreak: phase === "break",
		phaseTime: phase === "break" ? breakTime : workTime,
		start,
		pause,
		resetTimer,
		formatTime,
	};
};

export default useConfigStopwatch;
