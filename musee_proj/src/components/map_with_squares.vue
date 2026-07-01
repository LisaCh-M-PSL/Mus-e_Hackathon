<script setup>
const rooms = [
  { id: 'g', to: '/salle-g', x: 1730, y: 600, width: 600, height: 330, stroke: '#ff0000' },
  { id: 'h', to: '/salle-h', x: 1730, y: 980, width: 600, height: 330, stroke: '#00ff00' },
  { id: 'i', to: '/salle-i', x: 1730, y: 1350, width: 600, height: 500, stroke: '#0000ff' },
  { id: 'k', to: '/salle-k', x: 1770, y: 2550, width: 550, height: 490, stroke: '#ff00ff' },
  { id: 'l', to: '/salle-l', x: 1770, y: 3070, width: 550, height: 350, stroke: '#00ffff' },
  { id: 'm', to: '/salle-m', x: 1770, y: 3450, width: 550, height: 350, stroke: '#ffa500' },
  { id: 'n', to: '/salle-n', x: 1770, y: 3820, width: 550, height: 350, stroke: '#800080' },
  { id: 'o', to: '/salle-o', x: 1370, y: 4220, width: 950, height: 530, stroke: '#008000' }
]
</script>

<template>
  <section class="museum-map-page">
    <div class="museum-map-container">
      <svg viewBox="0 0 3508 4961" role="img" aria-label="Plan du musée">
        <image href="/map_test8.svg" x="0" y="0" width="3508" height="4961" />

        <router-link v-for="room in rooms" :key="room.id" :to="room.to" class="map-hotspot">
          <rect
            :x="room.x"
            :y="room.y"
            :width="room.width"
            :height="room.height"
            fill="transparent"
            :stroke="room.stroke"
            stroke-width="8"
          />
        </router-link>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.museum-map-page {
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  box-sizing: border-box;
}

.museum-map-container {
  width: min(100%, 1100px);
}

svg {
  width: 100%;
  height: auto;
  display: block;
}

.map-hotspot rect {
  cursor: pointer;
  transition: fill 0.2s ease, stroke-width 0.2s ease;
}

.map-hotspot:hover rect {
  fill: rgba(255, 0, 0, 0.12);
  stroke-width: 10;
}
</style>

