import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { COCKTAIL_CODES } from './const';
import Cocktail from './pages/cocktails';
import NotFound from './pages/404';

const NotFoundRoteName = 'NotFound'

const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/' + Object.keys(COCKTAIL_CODES)[0] },
    {
        path: '/:cocktail', component: Cocktail, props: true,
        beforeEnter: (to, from, next) => {
            const exists = Object.keys(COCKTAIL_CODES).includes(to.params.cocktail as string);
            if (!exists) {
                next({ name: NotFoundRoteName });
            } else {
                next();
            }
        }
    },
    { path: '/:pathMatch(.*)*', name: NotFoundRoteName, component: NotFound }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;