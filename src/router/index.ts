import Home from "./views/Home.vue";
import About from "./views/About.vue";



const router = [
    {
        name: 'Home',
        comments:Home,
        path: '/home',   
    },
    {
        name: 'About',
        comments:About,
        path: '/about',  
        hidden: true,
        meta: {
            title: "关于我们",
            isAdmin: false,
            requireAuth: true
        }
    },
]