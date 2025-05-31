import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactPlugin from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	{
		ignores: ["eslint.config.mjs"],
	},
	js.configs.recommended,
	eslintConfigPrettier,
	tseslint.configs.recommendedTypeChecked,
	tseslint.configs.stylisticTypeChecked,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	reactRefresh.configs.recommended,
	reactHooks.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},

			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},

		rules: {
			"react/react-in-jsx-scope": "off",
			camelcase: "error",

			"spaced-comment": [
				"error",
				"always",
				{
					markers: ["/"],
				},
			],
			quotes: ["warn", "double"],
			"no-duplicate-imports": "error",
			"react/jsx-fragments": "error",
			"react/self-closing-comp": [
				"error",
				{
					component: true,
					html: true,
				},
			],

			"react-refresh/only-export-components": [
				"warn",
				{
					allowConstantExport: true,
				},
			],

			"@typescript-eslint/no-misused-promises": [
				"error",
				{
					checksSpreads: false,
				},
			],
			"@typescript-eslint/no-misused-promises": ["off"],
		},
	},
	{ settings: { react: { version: "19" } } },
]);
