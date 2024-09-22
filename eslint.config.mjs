import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...fixupConfigRules(
		compat.extends(
			"eslint:recommended",
			"plugin:@typescript-eslint/recommended",
			"plugin:react-hooks/recommended",
			"plugin:react/jsx-runtime",
			"prettier"
		)
	),
	{
		plugins: {
			"@typescript-eslint": fixupPluginRules(typescriptEslint),
			react: fixupPluginRules(react),
			"react-refresh": reactRefresh,
		},

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

			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": "off",
		},
	},
];
