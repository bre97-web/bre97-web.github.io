import { RouteRecordRaw, Router, createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/pages/index.vue'
import Repositories from '@/pages/repositories.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/repositories',
        name: 'Repositories',
        component: Repositories
    }
]

const Router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkExactActiveClass: 'active'
})

export default Router
