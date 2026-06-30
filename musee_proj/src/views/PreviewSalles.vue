<template>
  <div class="preview-salles">
    <h1>Prévisualisation des salles</h1>
    <ul>
      <li><router-link to="/salle-g">Salle G</router-link></li>
      <li><router-link to="/salle-h">Salle H</router-link></li>
      <li><router-link to="/salle-i">Salle I</router-link></li>
      <li><router-link to="/salle-k">Salle K</router-link></li>
      <li><router-link to="/salle-l">Salle L</router-link></li>
      <li><router-link to="/salle-m">Salle M</router-link></li>
      <li><router-link to="/salle-n">Salle N</router-link></li>
      <li><router-link to="/salle-o">Salle O</router-link></li>
    </ul>
    <router-link to="/" class="btn-retour">Retour à la carte principale</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.preview-salles {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: #fff;
}

.preview-salles h1 {
  margin-bottom: 20px;
}

.preview-salles ul {
  list-style: none;
  padding: 0;
}

.preview-salles li {
  margin-bottom: 12px;
}

.preview-salles a {
  color: #1d4ed8;
  text-decoration: none;
}

.preview-salles a:hover {
  text-decoration: underline;
}

.btn-retour {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 18px;
  background: #333;
  color: white;
  text-decoration: none;
  border-radius: 8px;
}
</style>
