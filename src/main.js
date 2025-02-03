import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
createApp(App).mount('#app')

const circle = document.querySelector(".circle");
const bigCircle = document.querySelector(".big-circle");
document.addEventListener("mousemove", (e) => {
    circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    bigCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
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
document.getElementById("date").textContent = getFormattedDate();

const button = document.getElementById("menu__button")
const modale = document.getElementById("modale")
function toggleModale(){
    modale.classList.toggle("active_modale");    
}
button.addEventListener("click",toggleModale)