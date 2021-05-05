export default [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/public/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/private/Home.vue'),
    meta: { 
      requiresAuth: true
    }
  }
];
