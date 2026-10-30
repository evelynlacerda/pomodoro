# ⏱️ Pomodoro

**Pomodoro** is a web timer built around the Pomodoro technique: choose a focus time, a break time and how many times the cycle repeats, then let the timer alternate between focus and break until everything is done.

Built with **React 19**, **TypeScript**, **Vite** and **Sass**, with i18n support (English and Portuguese) and unit tests with **Vitest**.

![Issues](https://img.shields.io/github/issues/evelynlacerda/pomodoro?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/evelynlacerda/pomodoro?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/evelynlacerda/pomodoro?style=for-the-badge)

> 🌎 Read this in other languages:
> **[Português (Brasil)](./README.pt-br.md)**

## 🚀 Technologies

![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router%206-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing%20Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Features

- **Focus and break cycle** — the timer alternates between focus and break phases, and the progress ring changes color during breaks.
- **Preset durations** — focus of 25, 45 or 60 minutes and breaks of 5, 10 or 15 minutes.
- **Custom times** — type your own focus and break durations, in seconds.
- **Repetitions** — the cycle runs once when you press start, plus the number you select in *Repeat*. Selecting `1` runs the cycle twice, `2` runs it three times, and so on.
- **Start, pause and reset** — full control of the timer; changing any setting restarts the cycle.
- **Celebration** — confetti when every repetition is completed.
- **Internationalization** — English and Portuguese (Brazil), switchable in the interface.

## 📁 Project Structure

```bash
pomodoro/
├── public/
├── src/
│   ├── assets/              # global Sass: reset, themes (variables) and component styles
│   ├── components/          # Buttons, Definitions and Stopwatch
│   ├── constants/           # preset focus, break and repeat options
│   ├── hooks/               # useConfigs (timer cycle), useLang, useWatch
│   ├── layouts/             # page layout and language wrapper
│   ├── lib/                 # i18n configuration
│   ├── locale/              # translations (en-us, pt-br)
│   ├── routes/              # router
│   ├── test/                # Vitest setup and tests
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
└── package.json
```

## ⚙️ Installation & Local Setup

### Requirements

- **Node.js 24+**

### 1. Clone the repository

```bash
git clone https://github.com/evelynlacerda/pomodoro.git
cd pomodoro
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run in development mode

```bash
npm run dev
```

The app will be available at `http://localhost:5000`.

## 📜 Scripts

| Command              | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `npm run dev`        | Starts the Vite dev server with HMR                  |
| `npm run build`      | Type-checks with `tsc -b` and builds for production  |
| `npm run preview`    | Serves the generated `dist/` output locally          |
| `npm run lint`       | Runs ESLint across the project                       |
| `npm test`           | Runs the test suite once with Vitest                 |
| `npm run test:watch` | Runs Vitest in watch mode                            |

## 🔁 How the cycle works

The whole cycle lives in the `useConfigStopwatch` hook (`src/hooks/useConfigs.ts`), which receives the focus time, the break time, the repetitions and a callback for when everything finishes:

```ts
const { timeLeft, isBreak, phaseTime, start, pause, resetTimer, formatTime } =
	useConfigStopwatch(totalTime, breakTime, repeat, onFinish);
```

1. When the focus phase ends, the timer moves to the break (if a break time was set) or straight to the next focus.
2. When the break ends, the next focus session starts.
3. After the last repetition, the timer resets and `onFinish` is called.

## 🌐 Internationalization

Translations live in `src/locale/` (`en-us.json` and `pt-br.json`) and are loaded with `i18next`. To add a language, create a new JSON file with the same keys and register it in `src/lib/i18n.ts`.

## 🚀 Deployment (Vercel)

Automatic deployment on every push to the main branch. The Node.js version is defined in `package.json` (`engines`) and must also match **Vercel → Project → Settings → Build and Deployment → Node.js Version**.

## 👩‍💻 Author

Built by **Évelyn Lacerda** |
[GitHub](https://github.com/evelynlacerda) · [LinkedIn](https://www.linkedin.com/in/evelyndsl) · [Portfolio](https://www.evelynlacerda.com.br)
