import { reactive, watch } from "vue";

const LocalStorageName = 'theme_store'

const theme = reactive(JSON.parse(localStorage.getItem(LocalStorageName) as string) || {
    isDark: false
})

watch(() => theme.isDark, () => {
    syncDarkClassToHtml()
    localStorage.setItem(LocalStorageName, JSON.stringify(theme))
}, {immediate: true})


export const isDark = (): boolean => theme.isDark
export const setDark = (e: boolean) => {
    theme.isDark = e
}
export const toggleDark = () => {
    theme.isDark = !theme.isDark
}

function syncDarkClassToHtml() {
    document.documentElement.classList[theme.isDark ? 'add' : 'remove']('dark')
}