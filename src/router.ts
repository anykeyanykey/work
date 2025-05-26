import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { COCKTAILS_MAP } from './const';
import Cocktail from './pages/cocktails/cocktails';
import NotFound from './pages/404';

const NotFoundRouteName = 'NotFound';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/' + Object.keys(COCKTAILS_MAP)[0] },
  {
    path: '/:cocktail',
    component: Cocktail,
    beforeEnter: (to, from, next) => {
      const exists = Object.keys(COCKTAILS_MAP).includes(to.params.cocktail as string);
      if (!exists) {
        next({ name: NotFoundRouteName });
      } else {
        next();
      }
    },
  },
  { path: '/:pathMatch(.*)*', name: NotFoundRouteName, component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
