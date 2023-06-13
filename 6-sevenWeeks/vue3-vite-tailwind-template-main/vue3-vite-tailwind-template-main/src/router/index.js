import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: LayoutView,
      redirect: '/pinia',
      children: [
        {
          path: '/pinia',
          name: 'pinia',
          component: () => import('../views/Pinia.vue')
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/DashboardView.vue')
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('../views/CategoryView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'sime',
          name: 'sime',
          component: () => import('../views/SimeFormView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
  ]
})

export default router
