import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import RSVP from '../pages/RSVP.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/rsvp', component: RSVP },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
