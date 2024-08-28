<script lang="ts" setup>
const colorMode = useColorMode();

function toggleColorMode() {
	colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
}
</script>

<template>
	<button @click="toggleColorMode">
		<Icon v-if="colorMode.preference === 'light'" name="carbon:sun" />
		<Icon v-else name="carbon:moon" />
	</button>
</template>
