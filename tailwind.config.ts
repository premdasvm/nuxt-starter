import type { Config } from 'tailwindcss';

const config = {
	darkMode: 'class',
	content: [],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				border: 'hsl(var(--border))',
			},
			fontFamily: {
				sans: ['Poppins'],
			},
		},
	},
} satisfies Config;

export default config;
