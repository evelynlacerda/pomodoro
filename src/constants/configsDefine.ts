interface DataPomodoro {
    id: string | undefined;
    name: string;
    duration?: number;
    quantity?: number;
};

export const POMODORO_TIMING: DataPomodoro[] = [
    { id: '1', name: "25 minutes", duration: 1500 },
    { id: '2', name: "45 minutes", duration: 2700 },
    { id: '3', name: "60 minutes", duration: 3600 },
];

export const POMODORO_BREAK: DataPomodoro[] = [
    { id: '1', name: "5 minutes", duration: 300 },
    { id: '2', name: "10 minutes", duration: 600 },
    { id: '3', name: "15 minutes", duration: 900 },
];

export const POMODORO_REPEAT: DataPomodoro[] = [
    { id: '1', name: "1", quantity: 1 },
    { id: '2', name: "2", quantity: 2 },
    { id: '3', name: "3", quantity: 3 },
    { id: '4', name: "4", quantity: 4 },
    { id: '5', name: "5", quantity: 5 },
];
