<template>
	<div class="flex min-h-screen items-center justify-center">
		<div class="flex items-center justify-center gap-3">
			<h1>Nuxt 3 Starter</h1>
			<Icon name="logos:nuxt-icon" size="20" />
			<button v-show="colorMode.preference === 'light'" @click="colorMode.preference = 'dark'">
				<Icon name="iconamoon:mode-dark-light" class="h-8 w-8" />
			</button>
			<button v-show="colorMode.preference === 'dark'" @click="colorMode.preference = 'light'">
				<Icon name="iconamoon:mode-light-light" class="h-8 w-8" />
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<style></style>
