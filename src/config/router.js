import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPaginas from '@/components/admin/AdminPaginas'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'paginasAdmin',
    path: '/admin',
    component: AdminPaginas
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router