<template>
    <div class="flex flex-col max-h-screen h-full min-h-screen">
        <header class="px-4 py-2 flex place-content-start items-center">
            <div class="flex gap-2 items-center justify-start">
                <md-icon>labs</md-icon>
                <div>
                    <TitleMedium>Vue3 Template</TitleMedium>
                <BodySmall>Local Server</BodySmall>
                </div>
            </div>
        </header>

        <main class="container self-center m-4 flex-grow overflow-y-auto rounded-[28px] bg-[var(--md-sys-color-surface-container-lowest)]">
            <router-view></router-view>
        </main>

        <nav></nav>

        <footer></footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>