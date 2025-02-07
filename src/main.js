import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
createApp(App).mount('#app');
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import Swal from 'sweetalert2';

const mouses = document.querySelectorAll(".mouse");
document.getElementById("date").textContent = getFormattedDate();
const button = document.getElementById("menu__button")
const modale = document.getElementById("modale")
const containerProjects = document.getElementById("projects-container");
const skillsContainer = document.getElementById("skills-container");
const seoContainer = document.getElementById("seo-container");



window.addEventListener("mousemove", (e) => {
    mouses.forEach((mouse) => {
        mouse.style.top = e.pageY + "px";
        mouse.style.left = e.pageX + "px";
    });
});
function getFormattedDate() {
    const options = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    };
    return `${new Date().toLocaleDateString("en-GB", options)}, France`;
}
function toggleModale(){
    modale.classList.toggle("active_modale");    
}
button.addEventListener("click",toggleModale);


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
        description: "I design intuitive and visually appealing user interfaces that enhance digital experiences.",
        icon: "imgs/noun-plus-6826217.svg"
    },
    {
        title: "💻 Full-Stack Development",
        description: "I develop web applications using Java and modern frameworks like Spring Boot, Angular," +
            " and Vue.js. I adapt to different technologies, including no-code and low-code platforms like Webflow and WordPress," +
            " to deliver tailored solutions.",
        icon: "assets/imgs/noun-plus-6826217.svg"
    },
    {
        title: "🎮 Interactive & 3D Experiences",
        description: "I'm exploring Three.js to create immersive web interactions and bring ideas to life in 3D.",
        icon: "assets/imgs/noun-plus-6826217.svg"
    },
    {
        title: "🧩 Problem Solving",
        description: "In my free time, I enjoy solving algorithmic challenges and improving my coding skills." +
            " I love tackling complex problems, optimizing code, and continuously learning new patterns to enhance" +
            " performance and efficiency.",
        icon: "assets/imgs/noun-plus-6826217.svg"
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
      <div data-aos="fade-right" class="border border-dark-subtle py-3">
        <div class="d-flex justify-content-between px-5">
          <h3>${skill.title}</h3>
          <img style="width: 40px;" class="z-3 toggle-btn" data-index="${index}"
               src="imgs/noun-plus-6826217.svg" alt="plus">
        </div>
        <p class="collapse px-5" id="skill-${index}" style="display: none;">${skill.description}</p>
      </div>
    `;
    skillsContainer.innerHTML += skillHTML;
});

projects.forEach(project => {
    const projectHTML = `
      <div data-aos="fade-right" class="border border-dark-subtle py-3">
        <a href="${project.link}" target="_blank">
          <div class="d-flex justify-content-between px-5">
            <h4 class="text-decoration-underline">${project.title}</h4>
            <img style="width: 40px;" src="imgs/arrowForLinks.svg" alt="arrow">
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

Swal.fire({
    title: "Hello there 🫡",
    text: "Portfolio still in pregresse",
    icon: "warning",
});

