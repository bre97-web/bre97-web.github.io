<template>
    <PageContentLayout>
        <DisplayLarge class="text-white">And You know My Favorite songs</DisplayLarge>

        <div class="relative max-w-2xl mx-auto text-white text-right border rounded-xl">

            <div :class="{'updating': updating, 'updated': !updating}" class="h-96 overflow-y-auto whitespace-normal px-4 py-2 space-y-8">
                <TitleLarge>{{ songs[currentIndex].name }}</TitleLarge>
                <div class="space-y-4">
                    <HeadlineLarge v-for="line in songs[currentIndex].lyrics">
                        <p class="font-bold text-4xl">
                            {{ line }}
                        </p>
                    </HeadlineLarge>
                </div>
            </div>

            <div @click="setCurrentIndex(currentIndex + 1)" class="w-16 h-16 bg-red-500 absolute -right-[1rem] -bottom-[1rem] grid place-content-center select-none" :class="{'grayscale': currentIndex + 1 === songs.length}">
                <md-ripple></md-ripple>
                <md-icon class="scale-150">play_arrow</md-icon>
            </div>
            <div @click="setCurrentIndex(currentIndex - 1)" class="w-16 h-16 bg-red-500 absolute -left-[1rem] -top-[1rem] grid place-content-center select-none" :class="{'grayscale': currentIndex === 0}">
                <md-ripple></md-ripple>
                <md-icon class="scale-150 rotate-180">play_arrow</md-icon>
            </div>
        </div>
    </PageContentLayout>
</template>

<script setup lang="ts">
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import { ref } from 'vue'

const updating = ref(false)

const currentIndex = ref(0)
const setCurrentIndex = async (index: number) => {
    if(updating.value) {
        return 
    }
    updating.value = true
    const setUpdatingFalse = async () => new Promise(() => setTimeout(() => {
        updating.value = false
        currentIndex.value = index === songs.length ? currentIndex.value : index < 0 ? currentIndex.value : index
    }, 1000))
    await setUpdatingFalse()
}
const songs = [
    {
        name: 'Six Feet Under',
        describe: '.',
        lyrics: [
            'Help, I lost myself again',
            'But I remember you'
        ]
    },
    {
        name: 'Annihilate',
        describe: '.',
        lyrics: [
            'All this boosting up my senses',
            'I won\'t start but I finish',
            'I shoot my shot, bet I won\'t miss it',
            'Only way to go is go the distance',
            'Nothing can shake me now',
            'Nothing can break me down'
        ]
    },
    {
        name: 'Lovely',
        describe: '.',
        lyrics: [
            'Isn\'t it lovely all alone?',
            'Heart made of glass, my mind of stone',
            'Tear me to pieses, skin to bone',
            'Hello, welcome home'
        ]
    },
    {
        name: 'Everything I wanted',
        describe: '.',
        lyrics: [
            'if i knew it all then, would i do it again?',
            "would i do it again?",
            'if they knew what they said would go stright to my head',
            'what would they say instead?'
        ]
    },
]

</script>

<style scoped lang="css">
.updating {
    opacity: 0;
    animation: outAnimation 0.25s normal;
}
.updated {
    opacity: 1;
    animation: inAnimation 0.5s normal;
}

@keyframes inAnimation {
    0% {
        transform: translateX(-2%);
        opacity: 0;
    }
    75%,
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes outAnimation {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    75%,
    100% {
        transform: translateX(2%);
        opacity: 0;
    }
}
</style>