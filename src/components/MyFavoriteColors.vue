<template>
    <PageContent>
        <DisplayLarge class="text-white">You know My Favorite colors</DisplayLarge>

        <main class="space-y-4">
            <ul class="flex flex-wrap gap-4 items-center justify-start">
                <li v-for="(e, index) in colors" :key="index" class="w-16 h-16 overflow-hidden hover:rounded-lg" :class="{'rounded-2xl ring-4 ring-yellow-100': currentColorIndex === index}" @click="currentColorIndex = index">
                    <div class="w-full h-full" :style="{backgroundColor: e.code}"></div>
                </li>
            </ul>

            <section class="flex flex-col gap-2">
                <HeadlineLarge class="text-white">{{ colors[currentColorIndex].color.toUpperCase() }}</HeadlineLarge>
                <BodyMedium class="text-white/75">{{ colors[currentColorIndex].code }}</BodyMedium>
                <BodyLarge class="text-white">{{ colors[currentColorIndex].describe }}</BodyLarge>
            </section>
        </main>

        <div></div>
    </PageContent>
</template>

<script setup lang="ts">
import PageContent from '@/layouts/PageContent.vue'
import { ref } from 'vue';


const colors = [
{
        color: 'red',
        code: '#F44336',
        describe: 'Red is vibrant and it can give you courage some of the time.'
    },
    {
        color: 'yellow',
        code: '#FFD600',
        describe: 'The yellow is warm and gives people a bright feeling.'
    },
    {
        color: 'orange',
        code: '#FF9800',
        describe: 'Orange is a gentle flame and a good bedtime story.'
    },
    {
        color: 'green',
        code: '#4CAF50',
        describe: 'Green is associated with nature, the surge of the ocean and the tranquility of the forest.'
    },
]

const currentColorIndex = ref(0)
</script>

<style scoped lang="css">
ul li {
    transition: all 0.250s;
}
</style>