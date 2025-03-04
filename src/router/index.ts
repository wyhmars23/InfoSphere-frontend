import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/entrance',
    },
    {
      path: '/Data-Search',
      name: 'Data-Search',
      component: () => import('@/views/Data-Search/index.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: () => import('@/views/entrance/index.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/Data-history',
      name: 'Data-history',
      component: () => import('@/views/Data-history/index.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/Data-Analysis/:id',
      name: 'Data-Analysis',
      component: () => import('@/views/Data-Analysis/index.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/Data-storage',
      name: 'Data-storage',
      component: () => import('@/views/Data-storage/index.vue'),
      meta: { requiresAuth: true },
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
      meta: { requiresAuth: true },
    },
    {
      path: '/KnowledgeEvolution',
      name: 'KnowledgeEvolution',
      component: () => import('@/views/KnowledgeEvolution/index.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/SankeyDiagram/:id',
      name: 'SankeyDiagram',
      component: () => import('@/views/SankeyDiagram/index.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/TechnicalPedigree',
      name: 'TechnicalPedigree',
      component: () => import('@/views/TechnicalPedigree/index.vue'),
      meta: { requiresAuth: true },
    },
  ],
});

// 路由守卫，检查是否需要登录
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // 判断是否登录

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login'); // 未登录，跳转到登录页面
    } else {
      next(); // 已登录，继续访问目标页面
    }
  } else {
    next(); // 不需要登录的页面，直接访问
  }
});

export default router;
