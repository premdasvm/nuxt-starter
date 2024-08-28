<script lang="ts" setup>
const colorMode = useColorMode();

function toggleColorMode() {
	colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
}
</script>

<template>
	<button @click="toggleColorMode">
		<Icon name="carbon:sun" v-if="colorMode.preference === 'light'" />
		<Icon name="carbon:moon" v-else />
	</button>
</template>
