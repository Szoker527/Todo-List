import home from "./pages/home"
import todayPage from "./pages/today"
import Week from "./pages/week"
import notes from "./pages/notes"
import { firstLoad } from "./functions/firstLoad"
import {render, renderModal} from "./functions/render"
import modalPage from "./pages/modal"
import style from "./styles/style.css"
import { createTask } from "./functions/tasks"


createTask("2014 02 03", "Work", "What to do", "wdadadadadaada", "low")
createTask("2014 01 04", "Relax", "Play games", "xxxxxxxxxxxxxxxxx", "medium")
createTask("2014 03 05", "Relax", "dsdsds", "xxxxxxxxxxxxxxxxx", "high")
createTask("2023-04-14", "Relax", "dsdsds", "xxxxxxxxxxxxxxxxx", "high")
firstLoad()

const homeBtn = document.querySelector(".home-page")
const todayBtn = document.querySelector(".today-page")
const weekBtn = document.querySelector(".upcoming-page")
const notesBtn = document.querySelector(".notes-page")
const addBtn = document.querySelector(".add-btn")

homeBtn.addEventListener("click", function() {
    render()
    home()
    console.log("home")
})

todayBtn.addEventListener("click", function() {
    render()
    todayPage()
    console.log("today")
})

weekBtn.addEventListener("click", function() {
    render()
    Week()
    console.log("week")
})

notesBtn.addEventListener("click", function() {
    render()
    notes()
    console.log("notes")
})

addBtn.addEventListener("click", function() {
    renderModal()
    modalPage()

    const modal = document.querySelector(".modal");
    const form = document.querySelector('#myForm');
    const formTitle = document.querySelector('#input-title');
    const formDescription = document.querySelector('#input-description');
    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
        createTask("2014 03 05", formTitle.value, "Welcome to Jackass", formDescription.value , "LOW")
      });

})
