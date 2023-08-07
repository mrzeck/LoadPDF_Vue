import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ViewPage from './views/ViewPage.vue';

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: { transition: 'slide-left' },
    },
    {
        path: '/view/:id',
        component: ViewPage,
        meta: { transition: 'slide-left' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;