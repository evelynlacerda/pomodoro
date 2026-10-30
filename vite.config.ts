import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		setupFiles: "./src/test/setup.ts",
		globals: false,
	},
    server: {
        host: "localhost",
        port: 5000,
    },
	css: {
		preprocessorOptions: {
			scss: {
				// Vite 5 usa a API legada do Sass por padrão; força a API moderna
				api: "modern-compiler",
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"#": path.resolve(__dirname, "./public"),
		},
	},
});
