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
  // Ajoutez autant de salles que nécessaire
]

const router = createRouter({
  history: createWebHistory(), // Attention: pour GitHub Pages, il faudra ajouter la 'base' ici aussi si besoin
  routes
})

export default router