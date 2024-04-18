import antfu from "@antfu/eslint-config"

export default await antfu(
	{
		typescript: true,
		astro: true,
		stylistic: {
			indent: "tab",
			quotes: "double",
		},
	},
	{
		files: ["**/*.json"],
		rules: {
			"jsonc/indent": ["warn", 2],
			"style/eol-last": ["error", "never"],
		},
	},
	{
		files: ["**/*.mjs"],
		rules: {
			"style/eol-last": ["error", "never"],
		},
	},
	{
		files: ["**/*.ts"],
		rules: {
			"style/indent": ["warn", "tab"],
		},
	},
	{
		files: ["**/*.yml"],
		rules: {
			"yaml/flow-mapping-curly-spacing": ["warn", "never"],
		},
	},
)
