// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import MapWithSquares from '../components/map_with_squares.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MapWithSquares
  },
  {
    path: '/salle-g',
    name: 'SalleG',
    component: () => import('../views/SalleG.vue')
  },
  {
    path: '/salle-h',
    name: 'SalleH',
    component: () => import('../views/SalleH.vue')
  },
  {
    path: '/salle-i',
    name: 'SalleI',
    component: () => import('../views/SalleI.vue')
  },
  {
    path: '/preview-salles',
    name: 'PreviewSalles',
    component: () => import('../views/PreviewSalles.vue')
  },
  // Ajoutez autant de salles que nécessaire
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router