# ⏱️ Pomodoro

O **Pomodoro** é um cronômetro web baseado na técnica Pomodoro: escolha o tempo de foco, o tempo de intervalo e quantas vezes o ciclo se repete, e deixe o timer alternar entre foco e intervalo até terminar tudo.

Desenvolvido com **React 19**, **TypeScript**, **Vite** e **Sass**, com suporte a i18n (inglês e português) e testes unitários com **Vitest**.

![Issues](https://img.shields.io/github/issues/evelynlacerda/pomodoro?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/evelynlacerda/pomodoro?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/evelynlacerda/pomodoro?style=for-the-badge)

> 🌎 Leia em outros idiomas:
> **[English](./README.md)**

## 🚀 Tecnologias

![React](https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router%206-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing%20Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Funcionalidades

- **Ciclo de foco e intervalo** — o timer alterna entre as fases de foco e intervalo, e o anel de progresso muda de cor durante o intervalo.
- **Durações predefinidas** — foco de 25, 45 ou 60 minutos e intervalo de 5, 10 ou 15 minutos.
- **Tempos personalizados** — informe você mesmo as durações de foco e intervalo, em segundos.
- **Repetições** — o ciclo roda uma vez ao apertar iniciar, mais o número selecionado em *Repetir*. Selecionar `1` roda o ciclo duas vezes, `2` roda três vezes, e assim por diante.
- **Iniciar, pausar e reiniciar** — controle completo do timer; alterar qualquer configuração reinicia o ciclo.
- **Comemoração** — confete ao concluir todas as repetições.
- **Internacionalização** — inglês e português (Brasil), com troca direto na interface.

## 📁 Estrutura do Projeto

```bash
pomodoro/
├── public/
├── src/
│   ├── assets/              # Sass global: reset, temas (variáveis) e estilos dos componentes
│   ├── components/          # Buttons, Definitions e Stopwatch
│   ├── constants/           # opções predefinidas de foco, intervalo e repetição
│   ├── hooks/               # useConfigs (ciclo do timer), useLang, useWatch
│   ├── layouts/             # layout da página e wrapper de idioma
│   ├── lib/                 # configuração do i18n
│   ├── locale/              # traduções (en-us, pt-br)
│   ├── routes/              # roteador
│   ├── test/                # setup do Vitest e testes
│   ├── App.tsx
│   └── main.tsx
├── vite.config.ts
└── package.json
```

## ⚙️ Instalação e Execução Local

### Requisitos

- **Node.js 24+**

### 1. Clone o repositório

```bash
git clone https://github.com/evelynlacerda/pomodoro.git
cd pomodoro
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em modo de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:5000`.

## 📜 Scripts

| Comando              | Descrição                                               |
| -------------------- | ------------------------------------------------------- |
| `npm run dev`        | Inicia o servidor de desenvolvimento do Vite com HMR    |
| `npm run build`      | Verifica os tipos com `tsc -b` e gera o build           |
| `npm run preview`    | Serve localmente o resultado gerado em `dist/`          |
| `npm run lint`       | Executa o ESLint em todo o projeto                      |
| `npm test`           | Executa a suíte de testes uma vez com o Vitest          |
| `npm run test:watch` | Executa o Vitest em modo watch                          |

## 🔁 Como o ciclo funciona

Todo o ciclo fica no hook `useConfigStopwatch` (`src/hooks/useConfigs.ts`), que recebe o tempo de foco, o tempo de intervalo, as repetições e um callback para quando tudo terminar:

```ts
const { timeLeft, isBreak, phaseTime, start, pause, resetTimer, formatTime } =
	useConfigStopwatch(totalTime, breakTime, repeat, onFinish);
```

1. Quando a fase de foco acaba, o timer vai para o intervalo (se houver tempo de intervalo definido) ou direto para o próximo foco.
2. Quando o intervalo acaba, começa a próxima sessão de foco.
3. Após a última repetição, o timer é zerado e o `onFinish` é chamado.

## 🌐 Internacionalização

As traduções ficam em `src/locale/` (`en-us.json` e `pt-br.json`) e são carregadas com o `i18next`. Para adicionar um idioma, crie um novo arquivo JSON com as mesmas chaves e registre-o em `src/lib/i18n.ts`.

## 🚀 Deploy (Vercel)

Deploy automático a cada push na branch principal. A versão do Node.js é definida no `package.json` (`engines`) e também precisa estar de acordo com **Vercel → Project → Settings → Build and Deployment → Node.js Version**.

## 👩‍💻 Autora

Desenvolvido por **Évelyn Lacerda** |
[GitHub](https://github.com/evelynlacerda) · [LinkedIn](https://www.linkedin.com/in/evelyndsl) · [Portfolio](https://www.evelynlacerda.com.br)
