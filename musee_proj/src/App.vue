<script setup>
import HelloWorld from './components/map_with_squares.vue'
</script>

<template>
  <HelloWorld />
</template>

<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Reset CSS de base si nécessaire */
body {
  margin: 0;
  font-family: sans-serif;
}
</style>