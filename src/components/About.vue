<script setup>

</script>

<template>
<div class="container about__section my-5 position-relative">
  <div class="row p-5">
    <div class="col left__sec me-2">
      <h3 class="pb-2">NAME</h3>
      <p class="about__paragraphe ps-3">Souhail - full-stack developer</p>
      <h3 class="pb-2">DESCRIPTION</h3>
      <p class="about__paragraphe ps-3  ">I’m a full-stack developer who loves designing and building things—whether
        it’s websites (with code or no-code tools), simple games, or experimenting with new technologies.
        Recently, I’ve been learning and building cool stuff with Three.js (👉ﾟヮﾟ)👉.
        My favorite tech stack includes Java for backend development with Spring Boot,
        and for the frontend, I enjoy working with Angular and Vue.js.
        I’m always eager to learn and explore new technologies to create innovative and efficient solutions.</p>
      <blockquote class="blockquote">
        <p class="mt-5">- A software developer is a student for life. The moment you stop learning, you start falling
          behind.</p>
      </blockquote>
    </div>
    <div class="col right__sec ms-2">
      <img class="w-100 rounded-4" src="../assets/imgs/giphy.gif" alt="">
    </div>
  </div>
  <div>
    <span class="about__arrow">
      <img class="position-absolute" src="../assets/imgs/noun-curved-arrow-4120281.svg" alt="arrow">
    </span>
  </div>
</div>
</template>

<style scoped>
.about__section{
  color: var(--primary-color);
  background-color: var(--secondary-color);
  border-radius: 20px;
}

.about__paragraphe{
  text-transform: lowercase;
  font-size: 10px;
  line-height: 20px;
}

.blockquote{
  font-style: italic;
  font-size: 10px;
}
.about__arrow > img{
  width: 200px;
  top: -193px;
  right: 186px;
  rotate: -74deg;
  animation: arrowAnimation 2s ease-in-out infinite;
}

@keyframes arrowAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

</style>