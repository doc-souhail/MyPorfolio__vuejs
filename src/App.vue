<script setup>
import NavBar from './components/NavBar.vue'
import Cursor from "./components/Cursor.vue";
import Footer from './components/Footer.vue';
</script>

<template>
<NavBar></NavBar>
<!------------  HERO SECTION ------------>
<section class="container hero__section vh-100">
  <div class="text-center">
    <h2>souhail</h2>
    <span>Web Developer & UI Designer 🫡.</span>
    <h2 class="mt-2">naji</h2>
  </div>
  <div class="scroll__hero d-flex justify-content-center align-items-center">
    <span >Scroll to explore</span>
  </div>
</section>

<!------------  ABOUT SECTION ------------>
<section class="container about__section">
  <h3 class="text-center pb-5">I design and build interactive web experiences that elevate brands.</h3>
</section>
<section>
  <div class="py-5 about__section_skills">
    <div class="border border-dark-subtle py-3">
    <div class="d-flex justify-content-between px-5">
      <h3>🎨 UI Design</h3>
      <img data-bs-toggle="collapse" href="#design" role="button" aria-expanded="false"
           aria-controls="design" class="about__section_icons z-3" src="./assets/imgs/noun-plus-6826217.svg" alt="plus">
    </div>
      <p class="collapse px-5" id="design">I design intuitive and visually appealing user interfaces that enhance
        digital experiences</p>
    </div>
    <div class="border border-dark-subtle py-3">
      <div class="d-flex justify-content-between px-5">
        <h3  >💻  Full-Stack Development
        </h3>
        <img data-bs-toggle="collapse" href="#development" role="button" aria-expanded="false"
             aria-controls="development" class="about__section_icons z-3" src="./assets/imgs/noun-plus-6826217.svg"
             alt="plus">
      </div>
      <p class="collapse px-5" id="development">I develop web applications using Java and modern frameworks like Spring Boot,
        Angular, and Vue.js. I adapt to different technologies,
        including no-code and low-code platforms like Webflow and WordPress, to deliver tailored solutions.</p>
    </div>
    <div class="border border-dark-subtle py-3">
      <div class="d-flex justify-content-between px-5">
        <h3 >🎮 Interactive & 3D Experiences</h3>
        <img data-bs-toggle="collapse" href="#3d" role="button" aria-expanded="false"
             aria-controls="3d" class="about__section_icons z-3" src="./assets/imgs/noun-plus-6826217.svg" alt="plus">
      </div>
      <p class="collapse px-5" id="3d">I'm exploring Three.js to create immersive web interactions and bring ideas to life
        in 3D.</p>
    </div>
    <div class="border border-dark-subtle py-3">
      <div class="d-flex justify-content-between px-5">
        <h3 >🧩 Problem Solving</h3>
        <img data-bs-toggle="collapse" href="#problem" role="button" aria-expanded="false"
             aria-controls="problem" class="about__section_icons z-3" src="./assets/imgs/noun-plus-6826217.svg"
             alt="plus">
      </div>
      <p class="collapse px-5" id="problem">In my free time, I enjoy solving algorithmic challenges and improving my coding skills. I love tackling complex problems, optimizing code, and continuously learning new patterns to enhance performance and efficiency.</p>
    </div>
  </div>
</section>

<!------------  ABOUT SECTION ------------>
<section class="works__section">
  <div class="container">
    <h3 class="text-center pb-5">Here are some of the projects I’ve worked </h3>
  </div>
  <div>
    <div class="border border-dark-subtle py-3">
      <div class="d-flex">
        <h3>Spring-boot-OpenAI</h3>
        <img class="about__section_icons" src="./assets/imgs/arrowForLinks.svg" alt="arrow">
      </div>
      <p>A chatbot using Spring AI and OpenAI API to generate smart responses</p>
    </div>
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

.about__section_icons{
  width: 50px;
}

/* -------------- WORKS SECTION-------------- */

.works__section h3{
  font-size: 40px;
}


</style>
