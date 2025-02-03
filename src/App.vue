<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
<NavBar></NavBar>
  <div class="circle"></div>
  <div class="big-circle"></div>
</template>

<style scoped>

.circle{
  width: 20px;
  height: 20px;
  background-color: var(--text-color);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none; /* Prevents blocking interactions */
  transition: transform 0.2s linear; /* Smooth movement */
  transform: translate(-50%, -50%);
}
.big-circle{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5));
  opacity: 0.6;
  z-index: 1; /* Makes sure the large circle is behind the small one */
  transform: translate(-50%, -50%);
  transition: transform 0.5s ease-out;
}
</style>
