<template>
  <div class="salle-container">
    <!-- Option A : Le SVG en fond de page (cover) -->
    <div class="salle-background" :style="{ backgroundImage: `url(${planSalleG})` }">
      <div class="content-overlay">
        <h1>Salle G : Les Origines</h1>
        <p>Description de la salle...</p>
        <!-- Vos éléments interactifs ici -->
      </div>
    </div>
    
    <!-- Option B : Le SVG intégré directement (meilleur pour l'interactivité/clics) -->
    <!-- 
    <div class="salle-content">
      <img :src="planSalleG" alt="Plan de la salle F" class="plan-svg" />
      <h1>Salle G</h1>
    </div> 
    -->
    
    <!-- Bouton retour ou navigation -->
    <router-link to="/" class="btn-retour">Retour au plan général</router-link>
  </div>
</template>

<script>
import planSalleG from '@/assets/plans/salleg.svg' // Import du SVG

export default {
  name: 'SalleG',
  setup() {
    return {
      planSalleG
    }
  }
}
</script>

<style scoped>
.salle-container {
  position: relative;
  width: 100%;
  height: 100vh; /* Plein écran */
  overflow: hidden;
}

.salle-background {
  width: 100%;
  height: 100%;
  background-size: contain; /* ou cover selon votre besoin */
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-overlay {
  background: rgba(255, 255, 255, 0.8); /* Fond semi-transparent pour lire le texte */
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
}

.btn-retour {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  z-index: 10;
}
</style>