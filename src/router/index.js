import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../views/admin/Dashboard'),
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'not-found', 
        component: () => import('../components/404'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;