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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/private/Profile.vue'),
    meta: { 
      requiresAuth: true
    }
  }
];
