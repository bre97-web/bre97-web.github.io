import { RouteRecordRaw, Router, createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/pages/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: Index
    }
]

const Router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: 'active'
})

export default Router
