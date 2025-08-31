import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import { configs, plugins } from "eslint-config-airbnb-extended";
import { rules as prettierConfigRules } from "eslint-config-prettier";
import compat from "eslint-plugin-compat";
import deMorgan from "eslint-plugin-de-morgan";
import jsdoc from "eslint-plugin-jsdoc";
import prettierPlugin from "eslint-plugin-prettier";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import path from "node:path";

const gitignorePath = path.resolve(".", ".gitignore");

const jsConfig = [
	// ESLint Recommended Rules
	{
		name: "js/config",
		...js.configs.recommended,
	},
	// Stylistic Plugin
	plugins.stylistic,
	// Import X Plugin
	plugins.importX,
	// Airbnb Base Recommended Config
	...configs.base.recommended,
	sonarjs.configs.recommended,
	eslintPluginUnicorn.configs.recommended,
	deMorgan.configs.recommended,
	jsdoc.configs["flat/recommended-typescript-flavor"],
	compat.configs["flat/recommended"],
];

const reactConfig = [
	// React Plugin
	plugins.react,
	// React Hooks Plugin
	plugins.reactHooks,
	// React JSX A11y Plugin
	plugins.reactA11y,
	// Airbnb React Recommended Config
	...configs.react.recommended,
	reactRefresh.configs.recommended,
];

const typescriptConfig = [
	// TypeScript ESLint Plugin
	plugins.typescriptEslint,
	// Airbnb Base TypeScript Config
	...configs.base.typescript,
	// Airbnb React TypeScript Config
	...configs.react.typescript,
];

const prettierConfig = [
	// Prettier Plugin
	{
		name: "prettier/plugin/config",
		plugins: {
			prettier: prettierPlugin,
		},
	},
	// Prettier Config
	{
		name: "prettier/config",
		rules: {
			...prettierConfigRules,
			"prettier/prettier": "error",
		},
	},
];

export default [
	// Ignore .gitignore files/folder in eslint
	includeIgnoreFile(gitignorePath),
	// Javascript Config
	...jsConfig,
	// React Config
	...reactConfig,
	// TypeScript Config
	...typescriptConfig,
	// Prettier Config
	...prettierConfig,

	{
		ignores: ["eslint.config.mjs", "tailwind.config.ts", "vite.config.ts"],
		rules: {
			"react/function-component-definition": "off",
			"react/react-in-jsx-scope": "off",
			"react/require-default-props": "off",
			"unicorn/filename-case": [
				"error",
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
				},
			],
			"unicorn/no-null": "off",
			"unicorn/no-useless-undefined": "off",
			"unicorn/prevent-abbreviations": "off",
		},
	},
];
