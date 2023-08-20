<template>
    <PageContent class="relative flex flex-col items-start justify-around min-h-screen">
        <div class="maskTarget absolute w-full h-full left-0 top-0 brightness-50">
            <video class="h-full w-full object-cover" id="intro" autoplay muted loop name="media">
                <source src="../assets/video/intro.webm" type="video/webm" />
            </video>
        </div>

        <div class="space-y-8">
            <div class="drop-shadow-md">
                <PageTitle class="active">
                    {{ title }}
                </PageTitle>
                <HeadlineSmall>
                    <p class="text-white/50">- {{ author }}</p>
                </HeadlineSmall>
            </div>
        </div>
        

        <div>
            <a href="https://github.com/bre97-web" class="relative max-w-max text-white rounded-md flex gap-2 items-center border-2 hover:border-red-500 transition-all px-4 py-2" target="_blank">
                <md-ripple></md-ripple>
                <svg class="invert" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                    <path
                        d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                    </path>
                </svg>
                <div>
                    <TitleMedium>View on Github</TitleMedium>
                    <BodySmall>https://github.com/bre97-web</BodySmall>
                </div>
            </a>
        </div>

    </PageContent>
</template>

<script setup lang="ts">
import PageTitle from '@/layouts/PageTitle.vue'
import PageContent from '@/layouts/PageContent.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue';

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
    // document.getElementById('intro').play()
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
    transition: all 0.1s;
    animation: titleAnimation 8s infinite;
}

@keyframes titleAnimation {
    0% {
        transform: translateX(-2%);
        opacity: 0;
    }

    25%,
    75% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(2%);
        opacity: 0;
    }
}
</style>