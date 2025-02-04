import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
createApp(App).mount('#app')

const mouses = document.querySelectorAll(".mouse");

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
document.getElementById("date").textContent = getFormattedDate();

const button = document.getElementById("menu__button")
const modale = document.getElementById("modale")
function toggleModale(){
    modale.classList.toggle("active_modale");    
}
button.addEventListener("click",toggleModale)

