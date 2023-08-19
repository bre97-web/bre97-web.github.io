<template>
    <md-switch ref="switchRef" @click="toggleDark()"></md-switch>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/scripts/dark';
import { onMounted, ref } from 'vue';

const switchRef = ref()

onMounted(() => {
    switchRef.value.selected = isDark()
})
</script>

<style scoped>

</style>@/scripts/useThemeStore