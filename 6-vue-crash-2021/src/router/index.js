import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'



//let's create an array of routes:
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
]

//let's define our router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})


export default router