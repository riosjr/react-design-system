/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		// changing all the fonts and colors.
		// But it could be useful do extend in some cases.
		fontSize: {
			xs: 14,
			sm: 16,
			md: 18,
			lg: 20,
			xl: 24,
			'2xl': 32,
		},
		colors: {
			transparent: 'transparent',
			black: '#000',
			white: '#FFF',
			gray: {
				900: '#121214',
				800: '#202024',
				400: '#7C7C8A',
				200: '#C4C4CC',
				100: '#E1E1E6',
			},

			cyan: {
				500: '#61DAFB',
				300: '#9BE1FB',
			},
		},
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif',
			},
		},
	},
	plugins: [],
}
