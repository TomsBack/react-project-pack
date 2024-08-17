/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), checker({ typescript: true })],
	server: {
		port: 3000,
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/tests/setup.ts",
		coverage: {
			provider: "v8",
			all: false,
		},
	},
});
