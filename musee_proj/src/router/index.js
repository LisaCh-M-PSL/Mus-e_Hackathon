// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// On importera les composants des salles plus tard

const routes = [
  {
    path: '/salle-f',
    name: 'SalleF',
    component: () => import('../views/SalleF.vue')
  },
  // Ajoutez autant de salles que nécessaire
]

const router = createRouter({
  history: createWebHistory(), // Attention: pour GitHub Pages, il faudra ajouter la 'base' ici aussi si besoin
  routes
})

export default router