/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				border: 'hsl(var(--border))',
			},
		},
	},
	plugins: [],
};
