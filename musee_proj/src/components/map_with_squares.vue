<script setup>
import { ref } from 'vue'
import mapTest from '../../public/map_test5.svg'
import squareK from '../assets/squareK.svg'


const count = ref(0)
const zoom = ref(1)

// Gestion du zoom
const handleWheel = (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    zoom.value = Math.max(1, Math.min(3, zoom.value + delta))
  }
}

// 5 squares avec leurs positions 
const squares = ref([
  { id: 1, x: 16.5, y: 43.7, name: 'Point 1' },
  { id: 2, x: 23, y: 43.7, name: 'Point 2' },
  { id: 3, x: 31.3, y: 43.7, name: 'Point 3' },
  { id: 4, x: 53.7, y: 43.6, name: 'Point 4' },
  { id: 5, x: 62, y: 43.6, name: 'Point 5' },
  { id: 6, x: 68.9, y: 43.6, name: 'Point 6' },
  { id: 7, x: 76, y: 43.6, name: 'Point 7' },
  { id: 8, x: 85, y: 43.6, name: 'Point 8' }
])

const selectedSquare = ref(null)

const handleSquareClick = (squareId) => {
  selectedSquare.value = selectedSquare.value === squareId ? null : squareId
  console.log('Square clicked:', squareId)
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
          :style="{ left: squareItem.x + '%', top: squareItem.y + '%'}"
          :title="squareItem.name"
          @click="handleSquareClick(squareItem.id)"
        >
          <img :src="selectedSquare === squareItem.id ? squareKActive : squareK" :alt="squareItem.name" />
        </button>
      </div>
    </div>
    <div v-if="selectedSquare" class="square-info">
      <p>Square sélectionné: {{ squares.find(s => s.id === selectedSquare)?.name }}</p>
    </div>
    <div>
      <h1>Get started</h1>
      <p>Edit <code>src/App.vue</code> and save to test <code>HMR</code></p>
    </div>
    <button type="button" class="counter" @click="count++">
      Count is {{ count }}
    </button>
  </section>

  <div class="ticks"></div>

  <section id="next-steps">
    <div id="docs">
      <svg class="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#documentation-icon"></use>
      </svg>
      <h2>Documentation</h2>
      <p>Your questions, answered</p>
      <ul>
        <li>
          <a href="https://vite.dev/" target="_blank">
            Explore Vite
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/" target="_blank">
            Learn more
          </a>
        </li>
      </ul>
    </div>
    <div id="social">
      <svg class="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2>Connect with us</h2>
      <p>Join the Vite community</p>
      <ul>
        <li>
          <a href="https://github.com/vitejs/vite" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon"></use>
            </svg>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://chat.vite.dev/" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#discord-icon"></use>
            </svg>
            Discord
          </a>
        </li>
        <li>
          <a href="https://x.com/vite_js" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#x-icon"></use>
            </svg>
            X.com
          </a>
        </li>
        <li>
          <a href="https://bsky.app/profile/vite.dev" target="_blank">
            <svg class="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon"></use>
            </svg>
            Bluesky
          </a>
        </li>
      </ul>
    </div>
  </section>

  <div class="ticks"></div>
  <section id="spacer"></section>
</template>

<style>
.container {
  position: relative;
  width: 375px;
  height: 667px;
  border: 2px solid #333;
  overflow: auto;
  background-color: #f5f5f5;
  margin: 20px auto;
}

.map-wrapper {
  position: relative;
  width: 600px;
  height: 800px;
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
  width: 30px;
  height: 40px;
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

