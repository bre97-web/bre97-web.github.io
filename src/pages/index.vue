<template>
    <Page>
        <Intro></Intro>

        <Divider></Divider>

        <MyFavoriteColors></MyFavoriteColors>
        
        <Divider></Divider>

        <MyFavoriteSongs></MyFavoriteSongs>
    </Page>
</template>

<script setup lang="ts">
import Divider from '@/components/Divider.vue';
import Intro from '@/components/Intro.vue';
import MyFavoriteColors from '@/components/MyFavoriteColors.vue';
import MyFavoriteSongs from '@/components/MyFavoriteSongs.vue';
import Page from '@/layouts/Page.vue';


</script>

<style lang="scss" scoped>

</style>