<script setup>
import { ref } from 'vue'
import mapTest from '/map_test8.svg'
import pin from '../assets/pin_map.svg'
import pinBlue from '../assets/pin_map_blue.svg'

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

// 5 pins avec leurs positions (en %)
const pins = ref([
  { id: 1, x: 20, y: 25, name: 'Point 1' },
  { id: 2, x: 50, y: 30, name: 'Point 2' },
  { id: 3, x: 70, y: 55, name: 'Point 3' },
  { id: 4, x: 35, y: 70, name: 'Point 4' },
  { id: 5, x: 80, y: 75, name: 'Point 5' }
])

const selectedPin = ref(null)

const handlePinClick = (pinId) => {
  selectedPin.value = selectedPin.value === pinId ? null : pinId
  console.log('Pin clicked:', pinId)
}
</script>

<template>
  <section id="center">
    <div class="container" @wheel="handleWheel">
      <div class="map-wrapper" :style="{ transform: `scale(${zoom})`, transformOrigin: 'top left' }">
        <img :src="mapTest" class="base" alt="Carte" />
        <!-- Pins cliquables -->
        <button
          v-for="pinItem in pins"
          :key="pinItem.id"
          class="pin"
          :class="{ active: selectedPin === pinItem.id }"
          :style="{ left: pinItem.x + '%', top: pinItem.y + '%', transform: `translate(-50%, -50%) scale(${selectedPin === pinItem.id ? 1.3/zoom : 1/zoom})` }"
          :title="pinItem.name"
          @click="handlePinClick(pinItem.id)"
        >
          <img :src="selectedPin === pinItem.id ? pinBlue : pin" :alt="pinItem.name" />
        </button>
      </div>
    </div>
    <div v-if="selectedPin" class="pin-info">
      <p>Pin sélectionné: {{ pins.find(p => p.id === selectedPin)?.name }}</p>
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
            <img class="logo" :src="viteLogo" alt="" />
            Explore Vite
          </a>
        </li>
        <li>
          <a href="https://vuejs.org/" target="_blank">
            <img class="button-icon" :src="vueLogo" alt="" />
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

.pin {
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

.pin img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.pin-info {
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

