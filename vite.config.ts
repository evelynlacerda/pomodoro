import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
    server: {
        host: "localhost",
        port: 5000,
    },
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"#": path.resolve(__dirname, "./public"),
		},
	},
});
