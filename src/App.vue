<template>
    <div class="h-screen max-h-screen bg-black/90 overflow-y-auto">
        <Header class="sticky top-0"></Header>

        <main class="w-full h-full">
            <router-view></router-view>
        </main>

        <nav></nav>

        <footer></footer>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<style scoped>

</style>