<template>
    <FlexLayout class="flex-col md:flex-row flex-wrap">
        <FlexItemLayout v-for="e in repos" :key="e.path" class="focusShadow border border-white/25 px-4 py-2 flex-grow">
            <md-ripple></md-ripple>
            <TitleLarge>
                <a :href="e.path" class="on-primary-text transition-all underline underline-offset-2 hover:underline-offset-4">{{ e.name }}</a>
            </TitleLarge>
            <BodyLarge>
                <p class="on-primary-text">{{ e.desc }}</p>
            </BodyLarge>
        </FlexItemLayout>
    </FlexLayout>
</template>

<script setup lang="ts">
import FlexItemLayout from '@/layouts/FlexItemLayout.vue';
import FlexLayout from '@/layouts/FlexLayout.vue';


const useRepo = (name: string, path: string, desc = '') => ({
    name,
    desc,
    path,
})

const repos = [
    useRepo('To-Do', 'https://github.com/bre97-web/To-Do', 'This is my first public repository and my first time learning Vue.js.'),
    useRepo('copy-emojis', 'https://github.com/bre97-web/copy-emojis', 'Copy your favorite emoji.'),
    useRepo('scroll-button', 'https://github.com/bre97-web/scroll-button', 'Scroll button for any frame, one click to scroll to the end. Scrolling direction and speed can be selected.'),
    useRepo('spinner-lit', 'https://github.com/bre97-web/spinner-lit', 'A lit web component for everywhere, like vue, react and angular.'),
    
]
</script>

<style scoped>
.focusShadow:hover,
.focusShadow:focus {
    transition: all 0.15s;
    box-shadow: 8px 8px 0px 0px yellow;
    background-color: rgb(255 255 255 / 0.1);
}
</style>