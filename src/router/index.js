import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router