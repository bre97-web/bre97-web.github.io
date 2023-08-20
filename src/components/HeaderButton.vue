<template>
    <div class="h-full">
        <TitleLarge>
            <p class="font-bold transition-all hover:underline underline-offset-0 hover:underline-offset-4" :class="router.currentRoute.value.path === props.path ? 'text-white/100' : 'text-white/75'" @click="router.push(props.path)">
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
