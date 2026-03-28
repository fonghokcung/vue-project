import { createRouter, createWebHistory } from 'vue-router'
import Vue3GridLayout from '@/rr/Vue3GridLayout.vue'

const routes = [
  { path: '/', component: Vue3GridLayout },
]

// https://router.vuejs.org/guide/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
