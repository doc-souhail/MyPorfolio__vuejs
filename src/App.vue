<script setup>
import NavBar from './components/NavBar.vue'
import Cursor from "./components/Cursor.vue";
import Footer from './components/Footer.vue';
import ModalProgress from "./components/ModalProgress.vue";

const containerProjects = document.getElementById("projects-container");
const skillsContainer = document.getElementById("skills-container");
const seoContainer = document.getElementById("seo-container");

const seoContents = [
  {
    description: " Développeur web full-stack à Bordeaux, spécialisé en Java, Spring Boot, Angular et Vue.js. J’aide les entreprises à concevoir des solutions digitales modernes et performantes. ",
  },
  {
    description:
        "Passionné par le développement web je crée des applications et sites internet sur mesure en utilisant des technologies comme Java, Spring Boot et Vue.js",
  },
  {
    description:
        "Besoin d’un développeur full-stack à Bordeaux ? J’accompagne les entreprises et startups dans la réalisation de leurs projets web avec une approche agile et moderne",
  },
  {
    description:
        "Création de sites web et applications sur mesure en Java, Angular et Vue.js, wordpress, webflow no code Expert en développement full-stack, je conçois des solutions performantes et évolutives",
  },
  {
    description: "Développeur expérimenté en Java, Spring Boot et frameworks modernes,je réalise des projets web de A à Z, du design à la mise en ligne",
  },
]

const skills = [
  {
    title: "🎨 UI Design",
    description: "I design intuitive and visually appealing user interfaces that enhance digital experiences."
  },
  {
    title: "💻 Full-Stack Development",
    description: "I develop web applications using Java and modern frameworks like Spring Boot, Angular, and Vue.js. I adapt to different technologies, including no-code and low-code platforms like Webflow and WordPress, to deliver tailored solutions."
  },
  {
    title: "🎮 Interactive & 3D Experiences",
    description: "I'm exploring Three.js to create immersive web interactions and bring ideas to life in 3D."
  },
  {
    title: "🧩 Problem Solving",
    description: "In my free time, I enjoy solving algorithmic challenges and improving my coding skills. I love tackling complex problems, optimizing code, and continuously learning new patterns to enhance performance and efficiency."
  }
];

const projects = [
  {
    title: "Spring-boot-OpenAI",
    link: "https://github.com/doc-souhail/Spring-boot-OpenAI",
    description: "A chatbot using Spring AI and OpenAI API to generate smart responses.",
  },
  {
    title: "Flappy-Bird-Game-Java",
    link: "https://github.com/doc-souhail/Flappy-bird-Game-Java",
    description: "A Java remake of Flappy Bird.",
  },
  {
    title: "Snake-Game-Java",
    link: "https://github.com/doc-souhail/Snake-Game-Java",
    description: "A classic Snake game built in Java with simple controls.",
  },
  {
    title: "Portfolio with Bootstrap",
    link: "https://github.com/doc-souhail/Portfolio_1",
    description: "A responsive personal portfolio built using Bootstrap for styling and layout.",
  },
  {
    title: "Instagram Clone",
    link: "https://github.com/doc-suell/instaGame",
    description: "A project inspired by Instagram. Using PHP for backend and Vue.js in frontend.",
  },
];

skills.forEach((skill, index) => {
  const skillHTML = `
      <div class="border border-dark-subtle py-3">
        <div class="d-flex justify-content-between px-5">
          <h3>${skill.title}</h3>
          <img class="about__section_icons z-3 toggle-btn" data-index="${index}"
               src="./assets/imgs/noun-plus-6826217.svg" alt="plus">
        </div>
        <p class="collapse px-5" id="skill-${index}" style="display: none;">${skill.description}</p>
      </div>
    `;
  skillsContainer.innerHTML += skillHTML;
});

projects.forEach(project => {
  const projectHTML = `
      <div class="border border-dark-subtle py-3">
        <a href="${project.link}" target="_blank">
          <div class="d-flex justify-content-between px-5">
            <h4 class="text-decoration-underline">${project.title}</h4>
            <img class="about__section_icons" src="./assets/imgs/arrowForLinks.svg" alt="arrow">
          </div>
          <p class="px-5">${project.description}</p>
        </a>
      </div>
    `;
  containerProjects.innerHTML += projectHTML;
});

seoContents.forEach(content => {
  const projectHTML = `
       <p class="user-select-none">
       ${content.description}
      </p>
    `;
  seoContainer.innerHTML += projectHTML;
});

document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    const desc = document.getElementById(`skill-${index}`);
    const isVisible = desc.style.display === "block";

    desc.style.display = isVisible ? "none" : "block";

  });
});


</script>

<template>
<ModalProgress></ModalProgress>
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
  <div class="py-5 about__section_skills" id="skills-container"></div>
</section>

<!------------  WORKs SECTION ------------>
<section class="works__section my-5">
  <div class="container">
    <h3 class="text-center pb-5">Here are some of the projects I’ve worked </h3>
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
