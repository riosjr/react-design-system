/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:storybook/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-empty-interface': 'off',
		indent: ['error', 'tab'],
		'no-empty-pattern': 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		'react/react-in-jsx-scope': 'off',
		'react/no-unescaped-entities': 'off',
		semi: ['error', 'never'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
