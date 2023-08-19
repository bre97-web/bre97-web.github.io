<template>
    <div class="space-y-16 px-8 py-4">
        <header>
            <DisplayLarge>
                Hello Vue3 Template
            </DisplayLarge>
            <TitleLarge>
                You have started the local server
            </TitleLarge>
        </header>

        <main class="space-y-8">
            <div>
                <BodyMedium>
                    This template provides a preset theme (light and dark), provides a set of preset styles and components based on the Material Design scheme.
                </BodyMedium>
                <DarkSwitch></DarkSwitch>
            </div>

            <div>
                <BodyMedium>
                    The dependencies of this template include @material/web components, which is the latest MD component library from the Google team.
                </BodyMedium>
                <div class="card flex flex-wrap gap-4 items-start">
                    <md-filled-tonal-button>MD 3</md-filled-tonal-button>
                    <md-filled-button>MD 3</md-filled-button>
                    <md-fab label="MD 3">
                        <md-icon slot="icon">favorite</md-icon>
                    </md-fab>
                    <md-checkbox></md-checkbox>
                    <md-switch></md-switch>
                    <md-filled-text-field label="MD 3"></md-filled-text-field>
                    <md-tabs>
                        <md-tab>MD 3</md-tab>
                        <md-tab>MD 3</md-tab>
                    </md-tabs>
                    <md-circular-progress indeterminate></md-circular-progress>
                </div>
            </div>

            <div>
                <BodyMedium>
                    If you need to enable the font specified in the style, please use npm to download the following dependencies:
                </BodyMedium>
                <pre><md-elevation></md-elevation><code>npm i @fontsource/noto-sans-sc @fontsource/roboto</code></pre>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import DarkSwitch from '@/components/DarkSwitch.vue'
</script>

<style scoped>
pre,
div.card {
    @apply hover:elevation relative border border-[var(--md-sys-color-outlined)] rounded-md px-8 py-4;
}
main > div {
    @apply space-y-4;
}
</style>