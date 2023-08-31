<template>
    <div class="h-screen max-h-screen flex flex-col bg-black/90 overflow-y-auto">
        <Header class="sticky top-0"></Header>

        <main class="pb-32 w-full overflow-y-auto">
            <div class="flex">
                <router-view></router-view>
            </div>
        </main>

    </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<style scoped>

</style>