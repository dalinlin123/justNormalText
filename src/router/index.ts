import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from "./views/Home.vue";
import About from "./views/About.vue";



const routes:RouteRecordRaw[] = [
     {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'About',
        component: About,
        path: '/about',
        hidden: true, 
        meta: {
            title: '关于我们',
            isAdmin: false,
            requiresAuth: true,
        },
    },
]
const router = createRouter({
    routes,
    history:createWebHashHistory()
})
export default router