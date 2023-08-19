<template>
    <md-switch ref="switchRef" @click="handle"></md-switch>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import '@material/web/switch/switch'

const props = withDefaults(defineProps<{
    selected?: boolean
    disabled?: boolean
}>(), {
    selected: false,
    disabled: false
})
const emits = defineEmits<{
    (e: 'click'): void;
}>()

const switchRef = ref()

const handle = () => {
    emits('click')
}

onMounted(() => {
    switchRef.value.selected = props.selected
    switchRef.value.disabled = props.disabled
})
</script>

<style scoped>

</style>@/scripts/useThemeStore