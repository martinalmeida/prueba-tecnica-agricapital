import { createRouter, createWebHistory } from 'vue-router'
import SimulatorView from '@/views/simulator/SimulatorView.vue'
import View404 from '@/views/errors/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'simulador',
      component: SimulatorView
    },
    {
      path: "/:pathMatch(.*)*",
      component: View404,
    },
    // ,{
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
