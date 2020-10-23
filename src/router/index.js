import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home'
import About from '../views/About.vue'
import Extrato from '../components/extrato/Extrato'
import Deposito from '../components/deposito/Deposito'
import Saque from '../components/saque/Saque'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/extrato',
        name: 'Extrato',
        component: Extrato
    },
    {
        path: '/deposito',
        name: 'Depósito',
        component: Deposito
    },
    {
        path: '/saque',
        name: 'Saque',
        component: Saque
    },
    {
        path: '/about',
        name: 'About',
        component: About
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router