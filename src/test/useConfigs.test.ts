import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useConfigStopwatch from "../hooks/useConfigs";

describe("useConfigStopwatch - cenários do ciclo foco/intervalo", () => {
	// Fake timers: o relógio é falso e só avança quando mandamos,
	// então não precisamos esperar segundos de verdade.
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	// Avança o relógio falso (em segundos) dentro do act
	const passar = (segundos: number) => {
		act(() => {
			vi.advanceTimersByTime(segundos * 1000);
		});
	};

	/*
	 * Cenário 1 — Tempo padrão de 25 minutos com intervalo de 5 minutos.
	 * Usa os valores pré-definidos da tela (25 min = 1500s, 5 min = 300s)
	 * e o repeat padrão (1).
	 * Resultado esperado: PASSA
	 *  - o timer começa em 25:00
	 *  - ao acabar os 25 minutos, entra no intervalo com 5:00
	 */
	it("Cenário 1: depois de 25 minutos entra no intervalo de 5 minutos", () => {
		const { result } = renderHook(() => useConfigStopwatch(1500, 300, 1));

		expect(result.current.formatTime(result.current.timeLeft)).toBe("25:00");

		act(() => {
			result.current.start();
		});
		passar(1500); // passa 25 minutos

		expect(result.current.isBreak).toBe(true);
		expect(result.current.timeLeft).toBe(300);
		expect(result.current.formatTime(result.current.timeLeft)).toBe("05:00");
	});

	/*
	 * Cenário 2 — Tempo padrão de 45 minutos com intervalo de 15 minutos,
	 * repeat 3 (1 execução do start + 3 repetições = 4 sessões de foco).
	 * Resultado esperado: PASSA
	 *  - o aviso de fim (onFinish) só dispara depois da 4ª sessão de foco
	 *  - não há intervalo depois da última sessão
	 */
	it("Cenário 2: 45 minutos, intervalo de 15 minutos e repeat 3 rodam 4 sessões", () => {
		const onFinish = vi.fn();
		const { result } = renderHook(() =>
			useConfigStopwatch(2700, 900, 3, onFinish)
		);

		act(() => {
			result.current.start();
		});

		// 3 primeiras sessões: foco de 45 min + intervalo de 15 min
		for (let i = 0; i < 3; i++) {
			passar(2700);
			expect(result.current.isBreak).toBe(true);

			passar(900);
			expect(result.current.isBreak).toBe(false);
		}

		// Ainda falta a 4ª sessão, então não terminou
		expect(onFinish).not.toHaveBeenCalled();

		// 4ª sessão de foco: ao acabar, finaliza sem intervalo
		passar(2700);
		expect(onFinish).toHaveBeenCalledTimes(1);
		expect(result.current.isRunning).toBe(false);
	});

	/*
	 * Cenário 3 — Tempo personalizado de 120 segundos com intervalo de 10 segundos.
	 * Usa o repeat padrão (1), ou seja, 2 sessões de foco.
	 * Resultado esperado: PASSA
	 *  - depois de 120s entra no intervalo de 10s
	 *  - depois de mais 10s volta para o foco, com 120s de novo
	 */
	it("Cenário 3: personalizado 120s alterna com intervalo de 10s", () => {
		const { result } = renderHook(() => useConfigStopwatch(120, 10, 1));

		act(() => {
			result.current.start();
		});

		// Acaba o foco: entra no intervalo
		passar(120);
		expect(result.current.isBreak).toBe(true);
		expect(result.current.timeLeft).toBe(10);

		// Acaba o intervalo: volta para o foco
		passar(10);
		expect(result.current.isBreak).toBe(false);
		expect(result.current.timeLeft).toBe(120);
	});

	/*
	 * Cenário 4 — Tempo personalizado de 240 segundos com intervalo de 60 segundos,
	 * repeat 2 (1 execução do start + 2 repetições = 3 sessões de foco).
	 * Resultado esperado: PASSA
	 *  - o aviso de fim (onFinish) só dispara depois da 3ª sessão de foco
	 */
	it("Cenário 4: personalizado 240s, intervalo de 60s e repeat 2 rodam 3 sessões", () => {
		const onFinish = vi.fn();
		const { result } = renderHook(() =>
			useConfigStopwatch(240, 60, 2, onFinish)
		);

		act(() => {
			result.current.start();
		});

		// 2 primeiras sessões: foco de 240s + intervalo de 60s
		for (let i = 0; i < 2; i++) {
			passar(240);
			expect(result.current.isBreak).toBe(true);

			passar(60);
			expect(result.current.isBreak).toBe(false);
		}

		expect(onFinish).not.toHaveBeenCalled();

		// 3ª sessão de foco: ao acabar, finaliza
		passar(240);
		expect(onFinish).toHaveBeenCalledTimes(1);
		expect(result.current.isRunning).toBe(false);
	});
});
