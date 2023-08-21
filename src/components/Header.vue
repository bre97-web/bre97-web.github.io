<template>
    <header class="relative z-50 px-4 py-2 flex gap-16 backdrop-blur-xl">
        <GithubIconButton class="invert" href="https://github.com/bre97-web"></GithubIconButton>

        <FlexLayout class="hidden md:flex flex-grow gap-8">
            <FlexItemLayout v-for="e in routerList" :key="e.path">
                <HeaderButton :label="e.label" :path="e.path"></HeaderButton>
            </FlexItemLayout>
        </FlexLayout>

        <FlexLayout class="flex md:hidden justify-end flex-grow">
            <md-icon-button @click="expand = true">
                <md-icon class="text-white">
                    more_horiz
                </md-icon>
            </md-icon-button>
        </FlexLayout>

        <!-- Fullscreen Menu -->
        <div
            class="fixed top-0 left-0 w-screen h-screen overflow-auto bg-black px-4 py-2 space-y-8"
            :class="{'hidden': !expand}"
        >
            <div class="flex justify-end w-full">
                <md-icon-button @click="expand = false">
                    <md-icon class="text-white">
                        close
                    </md-icon>
                </md-icon-button>
            </div>
            <FlexLayout class="flex-col">
                <FlexItemLayout v-for="e in routerList" :key="e.path" class="flex-grow border-y border-white/50 px-4 py-2">
                    <HeaderButton :label="e.label" :path="e.path"></HeaderButton>
                </FlexItemLayout>
            </FlexLayout>
        </div>
    </header>
</template>

<script setup lang="ts">
import GithubIconButton from './GithubIconButton.vue';
import HeaderButton from './HeaderButton.vue';
import FlexLayout from '@/layouts/FlexLayout.vue'
import FlexItemLayout from '@/layouts/FlexItemLayout.vue'
import { routerList } from '@/scripts/navigation';
import { ref } from 'vue';

const expand = ref(false)
</script>

<style scoped></style>