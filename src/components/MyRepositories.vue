<template>
    <PageContentLayout>
        <DisplayLarge class="text-white">My Public repositories</DisplayLarge>

        <MyPublicRepositoriesList></MyPublicRepositoriesList>
    </PageContentLayout>
</template>

<script setup lang="ts">
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import MyPublicRepositoriesList from './MyPublicRepositoriesList.vue';

</script>

<style scoped>

</style>