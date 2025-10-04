import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../pages/Home.vue') },
  { path: '/popular', name: 'popular', component: () => import('../pages/Popular.vue') },
  { path: '/recs', name: 'recs', component: () => import('../pages/Recs.vue') },
  { path: '/settings', name: 'settings', component: () => import('../pages/Settings.vue') },
  { path: '/profile', name: 'profile', component: () => import('../pages/Profile.vue') },
  { path: '/auth', name: 'auth', component: () => import('../pages/Auth.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
