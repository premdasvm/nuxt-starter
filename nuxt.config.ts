// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/icon', '@vueuse/nuxt', '@nuxtjs/color-mode'],
	tailwindcss: {
		cssPath: '~/assets/css/global.css',
	},
	colorMode: {
		classSuffix: '',
	},
	future: {
		compatibilityVersion: 4,
	},
});
