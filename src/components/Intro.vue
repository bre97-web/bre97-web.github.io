<template>
    <PageContentLayout class="relative flex flex-col items-start justify-start min-h-screen pt-8">
        <div class="maskTarget absolute w-full h-full left-0 top-0 brightness-50">
            <video class="h-full w-full object-cover" id="intro" autoplay muted loop name="media">
                <source src="../assets/video/intro.webm" type="video/webm" />
            </video>
        </div>

        <div class="drop-shadow-md">
            <DisplayLarge>
                <p class="active font-[700] md:text-8xl md:max-w-md text-white whitespace-normal">
                    {{ title }}
                </p>
            </DisplayLarge>
            <HeadlineSmall>
                <p class="text-white/50">- {{ author }}</p>
            </HeadlineSmall>
        </div>
        <a
            href="https://github.com/bre97-web"
            class="relative max-w-max text-white rounded-md flex gap-2 items-center border-2 hover:border-red-500 transition-all px-4 py-2"
            target="_blank"
        >
            <md-ripple></md-ripple>
            <GithubIcon class="invert"></GithubIcon>
            <div>
                <TitleMedium>View on Github</TitleMedium>
                <BodySmall>https://github.com/bre97-web</BodySmall>
            </div>
        </a>

    </PageContentLayout>
</template>

<script setup lang="ts">
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue';
import GithubIcon from './GithubIcon.vue';

const author = "bre97"
const titles = [
    "do what you want anytime",
    "Time is running out for everyone"
]

const currentTitleIndex = ref(0)
const updateTitleIndex = () => {
    currentTitleIndex.value = currentTitleIndex.value + 1 === titles.length ? 0 : currentTitleIndex.value + 1
}
const title = computed(() => titles[currentTitleIndex.value])

var timer: any = null
onMounted(() => {
    timer = setInterval(updateTitleIndex, 8000)
})
onUnmounted(() => {
    clearInterval(timer)
})
</script>

<style scoped>
.maskTarget::after {
    content: ' ';
    position: absolute;
    display: block;
    height: 100%;
    width: 100%;
    left: 0%;
    top: 0%;
    background-image: linear-gradient(to bottom, transparent, rgb(0 0 0 / 0.9));
}

.active {
    position: relative;
    opacity: 0;
    animation: titleAnimation 8s infinite;
}

@keyframes titleAnimation {
    0% {
        transform: translateX(-2%);
        opacity: 0;
    }

    10%,
    90% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(2%);
        opacity: 0;
    }
}</style>