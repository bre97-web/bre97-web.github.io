<template>
    <header class="relative z-50 px-4 py-2 flex gap-16 bg-transparent backdrop-blur-xl">
        <GithubIconButton class="invert" href="https://github.com/bre97-web"></GithubIconButton>
        
        <FlexLayout class="flex-grow gap-8">
            <FlexItemLayout v-for="e in routerList" :key="e.path">
                <HeaderButton :label="e.label" :path="e.path"></HeaderButton>
            </FlexItemLayout>
        </FlexLayout>
    </header>
</template>

<script setup lang="ts">
import GithubIconButton from './GithubIconButton.vue';
import HeaderButton from './HeaderButton.vue';
import FlexLayout from '@/layouts/FlexLayout.vue'
import FlexItemLayout from '@/layouts/FlexItemLayout.vue'

const useNavigation = (label: string, path: string) => {
    return {
        label: label,
        path: path
    }
}

const routerList = [
    useNavigation('homepage', '/'),
    useNavigation('repositories', '/repositories'),
]
</script>

<style scoped>

</style>