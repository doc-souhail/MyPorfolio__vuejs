<script setup>

</script>

<template>
  <span class="mouse" id="cursor"></span>
  <span class="mouse" id="mouse1"></span>
  <span class="mouse" id="mouse2"></span>
</template>

<style scoped>


.mouse {
  position: absolute;
  border-radius: 1500px;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
}

#cursor {
  background: #de5839;
  width: 14px;
  height: 14px;
}
#mouse1 {
  height: 300px;
  width: 300px;
  background: white;
  transition: 0.15s ease-out;
}
#mouse2 {
  height: 300px;
  width: 300px;
  background: rgb(41, 41, 41);
  transition: 0.25s ease-out;
}
</style>