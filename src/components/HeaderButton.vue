<template>
    <div class="h-full">
        <TitleLarge>
            <p class="font-bold text-white/75 hover:text-white/90" :class="{'text-white/100': router.currentRoute.value.path === props.path}" @click="router.push(props.path)">
                {{ props.label }}
            </p>
        </TitleLarge>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
    label: string
    path: string
}>()

const router = useRouter()
</script>

<style scoped>
</style>