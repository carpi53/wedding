import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Day from '../pages/Day.vue'
import Travel from '../pages/Travel.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/day/:id', component: Day },
  { path: '/travel', component: Travel },
]

const router = createRouter({
  history: createWebHistory('/wedding/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Optional: enables smooth scrolling
      };
    }
    return { top: 0 };
  },
})

export default router
