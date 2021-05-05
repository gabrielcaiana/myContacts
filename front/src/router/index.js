import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { auth } from '@/services/firebase';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',  
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(
    (currentRoute) => currentRoute.meta.requiresAuth
  );

  if (requiresAuth && !auth.currentUser) {
    next('/login');
  } else if (!requiresAuth && auth.currentUser) {
    next('/home');
  } else {
    next();
  }
});

export default router;
