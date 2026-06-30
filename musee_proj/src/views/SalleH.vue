<script setup>
import { ref } from 'vue'
import planSalle from '@/assets/plans/salleh.svg'
import pinMap from '@/assets/pin_map.svg'
import pinMapBlue from '@/assets/pin_map_blue.svg'

const zoom = ref(1)
const pins = ref([
  { id: 1, x: 20, y: 25, name: 'Point 1' },
  { id: 2, x: 50, y: 30, name: 'Point 2' },
  { id: 3, x: 70, y: 55, name: 'Point 3' },
  { id: 4, x: 35, y: 70, name: 'Point 4' }
])
const selectedPin = ref(null)

const handleWheel = (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    zoom.value = Math.max(1, Math.min(3, zoom.value + delta))
  }
}

const handlePinClick = (pinId) => {
  selectedPin.value = selectedPin.value === pinId ? null : pinId
}
</script>

<template>
  <section class="salle-root">
    <div class="phone-frame" @wheel="handleWheel">
      <div class="map-wrapper" :style="{ transform: `scale(${zoom})`, transformOrigin: 'top left' }">
        <img :src="planSalle" class="base" alt="Plan de Salle H" />

        <button
          v-for="pin in pins"
          :key="pin.id"
          class="pin"
          :class="{ active: selectedPin === pin.id }"
          :style="{ left: pin.x + '%', top: pin.y + '%', transform: `translate(-50%, -50%) scale(${selectedPin === pin.id ? 1.3/zoom : 1/zoom})` }"
          :title="pin.name"
          @click="handlePinClick(pin.id)"
          type="button"
        >
          <img :src="selectedPin === pin.id ? pinMapBlue : pinMap" :alt="pin.name" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.salle-root {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
}

.phone-frame {
  width: min(375px, 100vw);
  height: min(667px, 100vh);
  border: 16px solid #000;
  border-radius: 32px;
  background: #fff6e3;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  position: relative;
}

.map-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-origin: top left;
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
  z-index: 10;
}

.pin img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

</style>
