<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import mapTest from '/map_test8.svg'
import squareK from '../assets/squareK.svg'

const count = ref(0)
const zoom = ref(1)
const router = useRouter()
const squareRoutes = {
  1: '/salle-g',
  2: '/salle-h',
  3: '/salle-i',
  4: '/salle-k',
  5: '/salle-l',
  6: '/salle-m',
  7: '/salle-n',
  8: '/salle-o'
}

// Gestion du zoom
const handleWheel = (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    zoom.value = Math.max(1, Math.min(3, zoom.value + delta))
  }
}

const squares = ref([
  { id: 1, x: 52.8, y: 12.3, name: 'Point 1' },
  { id: 2, x: 52.8, y: 19.6, name: 'Point 2' },
  { id: 3, x: 52.8, y: 28.5, name: 'Point 3' },
  { id: 4, x: 53.1, y: 53, name: 'Point 4' },
  { id: 5, x: 53.1, y: 62, name: 'Point 5' },
  { id: 6, x: 53.1, y: 69.4, name: 'Point 6' },
  { id: 7, x: 53.1, y: 76.8, name: 'Point 7' },
  { id: 8, x: 53.1, y: 86.6, name: 'Point 8' }
])

const selectedSquare = ref(null)

const handleSquareClick = (squareId) => {
  selectedSquare.value = selectedSquare.value === squareId ? null : squareId
  const target = squareRoutes[squareId]
  if (target) {
    router.push(target)
  }
}
</script>
<template>

  <section id="center">
    <div class="container" @wheel="handleWheel">
      <div class="map-wrapper" :style="{ transform: `scale(${zoom})`, transformOrigin: 'top left' }">
        <img :src="mapTest" class="base" alt="Carte" />
        <!-- Squares cliquables -->
        <button
          v-for="squareItem in squares"
          :key="squareItem.id"
          class="square"
          :class="{ active: selectedSquare === squareItem.id }"
          :style="{ left: squareItem.x + '%', top: squareItem.y + '%' }"
          :title="squareItem.name"
          @click="handleSquareClick(squareItem.id)"
        >
          <img :src="squareK" :alt="squareItem.name" />
        </button>
      </div>
    </div>
    <div v-if="selectedSquare" class="square-info">
      <p>Square sélectionné: {{ squares.find(s => s.id === selectedSquare)?.name }}</p>
    </div>

  </section>

  
</template>

<style>
.container {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #f5f5f5;
  margin: 0 auto;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;
}

.base {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.square {
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 44px;
  height: 56px;
  transition: filter 0.2s;
  z-index: 10;
}

.square img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.square-info {
  margin-top: 15px;
  padding: 10px;
  background-color: #f0f0f0;
  border-left: 4px solid #ff6464;
  font-weight: bold;
}

.photo {
  position: absolute; /* Required for z-index to work here */
  width: 200px;
  height: auto;
  transition: transform 0.3s;
}


/* Stacking order */
.photo1 { top: 20px; left: 20px; z-index: 1; }
.photo2 { top: 60px; left: 60px; z-index: 2; }
</style>

