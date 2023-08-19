// Vue
import { createApp } from 'vue'
import App from '@/App.vue'

/**
 * Vue-Router
 */
import Router from '@/router/index'

/**
 * Tailwindcss
 */
import '@/assets/tailwind.css'
import '@/assets/index.css'

/**
 * Google's Material Design
 */
import '@material/web/all'
import 'material-symbols/outlined.css'
// import '@fontsource/roboto/unicode.json'
// import '@fontsource/noto-sans-sc/unicode.json'

/**
 * Global Components.
 * It's some Unit Text.
 */
import DisplayLarge from '@/typography/DisplayLarge.vue'
import DisplayMedium from '@/typography/DisplayMedium.vue'
import DisplaySmall from '@/typography/DisplaySmall.vue'
import HeadlineLarge from '@/typography/HeadlineLarge.vue'
import HeadlineMedium from '@/typography/HeadlineMedium.vue'
import HeadlineSmall from '@/typography/HeadlineSmall.vue'
import TitleLarge from '@/typography/TitleLarge.vue'
import TitleMedium from '@/typography/TitleMedium.vue'
import TitleSmall from '@/typography/TitleSmall.vue'
import LabelLarge from '@/typography/LabelLarge.vue'
import LabelMedium from '@/typography/LabelMedium.vue'
import LabelSmall from '@/typography/LabelSmall.vue'
import BodyLarge from '@/typography/BodyLarge.vue'
import BodyMedium from '@/typography/BodyMedium.vue'
import BodySmall from '@/typography/BodySmall.vue'


/**
 * Pinia
 */
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app
    .component('DisplayLarge', DisplayLarge)
    .component('DisplayMedium', DisplayMedium)
    .component('DisplaySmall', DisplaySmall)
    .component('HeadlineLarge', HeadlineLarge)
    .component('HeadlineMedium', HeadlineMedium)
    .component('HeadlineSmall', HeadlineSmall)
    .component('TitleLarge', TitleLarge)
    .component('TitleMedium', TitleMedium)
    .component('TitleSmall', TitleSmall)
    .component('LabelLarge', LabelLarge)
    .component('LabelMedium', LabelMedium)
    .component('LabelSmall', LabelSmall)
    .component('BodyLarge', BodyLarge)
    .component('BodyMedium', BodyMedium)
    .component('BodySmall', BodySmall)
app.use(pinia).use(Router)
app.mount('#app')
