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

<!------------  WORKs SECTION ------------>
<section class="works__section my-5">
  <div class="container">
    <h3 class="text-center pb-5">Here are some of the projects I’ve worked </h3>
  </div>
  <div class="border border-dark-subtle py-3">
    <a href="https://github.com/doc-souhail/Spring-boot-OpenAI" target=”_blank”>
      <div class="d-flex justify-content-between px-5">
        <h4 class="text-decoration-underline">Spring-boot-OpenAI</h4>
        <img class="about__section_icons" src="./assets/imgs/arrowForLinks.svg" alt="arrow">
      </div>
      <p class="px-5">A chatbot using Spring AI and OpenAI API to generate smart responses</p>
    </a>
  </div>
  <div class="border border-dark-subtle py-3">
    <a href="https://github.com/doc-souhail/Flappy-bird-Game-Java" target=”_blank”>
      <div class="d-flex justify-content-between px-5">
        <h4 class="text-decoration-underline">Flappy-Bird-Game-Java</h4>
        <img class="about__section_icons" src="./assets/imgs/arrowForLinks.svg" alt="arrow">
      </div>
      <p class="px-5">A Java remake of Flappy Bird.</p>
    </a>
  </div>
  <div class="border border-dark-subtle py-3">
    <a href="https://github.com/doc-souhail/Snake-Game-Java" target=”_blank”>
      <div class="d-flex justify-content-between px-5">
        <h4 class="text-decoration-underline">Snake-Game-Java</h4>
        <img class="about__section_icons" src="./assets/imgs/arrowForLinks.svg" alt="arrow">
      </div>
      <p class="px-5">A classic Snake game built in Java with simple controls.</p>
    </a>
  </div>
  <div class="border border-dark-subtle py-3">
    <a href="https://github.com/doc-souhail/Portfolio_1" target=”_blank”>
      <div class="d-flex justify-content-between px-5">
        <h4 class="text-decoration-underline">Portfolio with Bootstrap</h4>
        <img class="about__section_icons" src="./assets/imgs/arrowForLinks.svg" alt="arrow">
      </div>
      <p class="px-5">A responsive personal portfolio built using Bootstrap for styling and layout.</p>
    </a>
  </div>
  <div class="border border-dark-subtle py-3">
    <a href="https://github.com/doc-suell/instaGame" target=”_blank”>
      <div class="d-flex justify-content-between px-5">
        <h4 class="text-decoration-underline">Portfolio with Bootstrap</h4>
        <img class="about__section_icons" src="./assets/imgs/arrowForLinks.svg" alt="arrow">
      </div>
      <p class="px-5">A responsive personal portfolio built using Bootstrap for styling and layout.</p>
    </a>
  </div>
</section>
  <section class="seo__section">
    <div style="font-size: 5px; color: transparent;">
      <p class="user-select-none">
        Développeur web full-stack à Bordeaux, spécialisé en Java, Spring Boot,
        Angular et Vue.js. J’aide les entreprises à concevoir des solutions digitales modernes et performantes.
      </p>
      <p class="user-select-none">
        Passionné par le développement web,
        je crée des applications et sites internet sur mesure en utilisant des technologies comme Java,
        Spring Boot et Vue.js
      </p>
      <p class="user-select-none">
        Besoin d’un développeur full-stack à Bordeaux ?
        J’accompagne les entreprises et startups dans la réalisation de leurs projets web avec une approche agile et moderne
      </p>
      <p class="user-select-none">
        Création de sites web et applications sur mesure en Java, Angular et Vue.js, wordpress, webflow no code.
        Expert en développement full-stack, je conçois des solutions performantes et évolutives
      </p>
      <p class="user-select-none">
        Développeur expérimenté en Java, Spring Boot et frameworks modernes,
        je réalise des projets web de A à Z, du design à la mise en ligne
      </p>

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
  width: 40px;
}

/* -------------- WORKS SECTION-------------- */

.works__section h3{
  font-size: 70px;
}

.works__section p{
  font-size: 11px;
}


</style>
