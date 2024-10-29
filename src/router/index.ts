import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/Data-Search',
      name: 'Data-Search',
      component: () => import('@/views/Data-Search/index.vue'),
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: () => import('@/views/entrance/index.vue'),
    },
    {
      path: '/Data-history',
      name: 'Data-history',
      component: () => import('@/views/Data-history/index.vue'),
    },
    {
      path: '/Data-Analysis',
      name: 'Data-Analysis',
      component: () => import('@/views/Data-Analysis/index.vue'),
    },
    {
      path: '/Data-storage',
      name: 'Data-storage',
      component: () => import('@/views/Data-storage/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: () => import('@/views/personalCenter/index.vue'),
    },
  ],
})

export default router
