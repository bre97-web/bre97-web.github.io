<template>
    <PageLayout>
        <Intro></Intro>

        <Divider></Divider>

        <MyFavoriteColors></MyFavoriteColors>
        
        <Divider></Divider>

        <MyFavoriteSongs></MyFavoriteSongs>
    </PageLayout>
</template>

<script setup lang="ts">
import Divider from '@/components/Divider.vue';
import Intro from '@/components/Intro.vue';
import MyFavoriteColors from '@/components/MyFavoriteColors.vue';
import MyFavoriteSongs from '@/components/MyFavoriteSongs.vue';
import PageLayout from '@/layouts/PageLayout.vue';


</script>

<style lang="scss" scoped>

</style>