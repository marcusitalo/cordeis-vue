import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Cordel from '@/components/Cordel.vue'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'cordel',
        path: '/cordel/:id',
        component: Cordel
    }
]

const router = new Router({routes})

export default router