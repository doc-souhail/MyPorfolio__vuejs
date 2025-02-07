<script setup>
import NavBar from './components/NavBar.vue'
import Cursor from "./components/Cursor.vue";
import Footer from './components/Footer.vue';
import ModalProgress from "./components/ModalProgress.vue";
</script>

<template>
<ModalProgress></ModalProgress>
<NavBar></NavBar>
<!------------  HERO SECTION ------------>
<section class="container hero__section vh-100">
  <div class="text-center">
    <h2 data-aos="zoom-in">SOUHAIL</h2>
    <span>Web Developer & UI Designer 🫡.</span>
    <h2 data-aos="zoom-in" class="mt-2">naji</h2>
  </div>
  <div class="scroll__hero d-flex justify-content-center align-items-center">
    <span >Scroll to explore</span>
  </div>
</section>

<!------------  ABOUT SECTION ------------>
<section class="container about__section">
  <h3 data-aos="zoom-in" class="text-center pb-5">I design and build interactive web experiences that elevate brands.</h3>
</section>
<section>
  <div class="py-5 about__section_skills" id="skills-container"></div>
</section>

<!------------  WORKs SECTION ------------>
<section class="works__section my-5">
  <div class="container">
    <h3 data-aos="zoom-in" class="text-center pb-5">Here are some of the projects I’ve worked </h3>
  </div>
  <div id="projects-container"></div>
</section>
  <section class="seo__section">
    <div style="font-size: 5px; color: transparent;" id="seo-container">
    </div>
  </section>

<Footer></Footer>
<Cursor></Cursor>
</template>

<style scoped>

/* -------------- HERO SECTION-------------- */

.hero__section h2{
  font-family: 'nohemiRegular', sans-serif;
  font-size: 200px;
  color: var(--text-color-1);
  text-transform: uppercase;
}

.scroll__hero{
  color: var(--text-color-2);
  background-color: var(--secondary-color);
  height: 250px;
  width: 250px;
  transform: translateY(-80%);
  animation: morph 7s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  transition: all 0.1s ease-in-out;
}

@keyframes morph {
  0% {
    border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius:  30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius:  60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}

/* -------------- ABOUT SECTION-------------- */

h3{
  font-size: 70px;
}
.about__section_skills h3{
  font-size: 40px;
}

.about__section_skills p{
  font-size: 12px;
  text-transform: uppercase;
}

/* -------------- WORKS SECTION-------------- */

.works__section h3{
  font-size: 70px;
}

.works__section p{
  font-size: 11px;
}



</style>
