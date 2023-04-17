import home from "./pages/home"
import todayPage from "./pages/today"
import Week from "./pages/week"
import notes from "./pages/notes"
import projects from "./pages/projectPage"
import { firstLoad, firstLoadModal } from "./functions/firstLoad"
import {render, renderModal, renderForm} from "./functions/render"
import modalPage from "./pages/modal"
import projectModal from "./pages/modalPages/projectModal"
import style from "./styles/style.css"
import { createTask } from "./functions/tasks"
import project from "./functions/projects"
import menu from "./pages/menu"

createTask("2014-02-03", "What to do", "wdadadadadaada", "low")
createTask("2014-01-04", "Play games", "xxxxxxxxxxxxxxxxx", "medium")
createTask("2014-03-05", "dsdsds", "xxxxxxxxxxxxxxxxx", "high")
createTask("2023-04-14", "dsdsds", "xxxxxxxxxxxxxxxxx", "high")
createTask("2023-04-16", "xxxxxx", "gggggg", "low")
createTask("2023-04-15", "xxxxxx", "gggggg", "low")
firstLoad()

// const homeBtn = document.querySelector(".home-page")
// const todayBtn = document.querySelector(".today-page")
// const weekBtn = document.querySelector(".upcoming-page")
// const projectBtns = document.querySelectorAll('.project-topics');
// const notesBtn = document.querySelector(".notes-page")
// const addBtn = document.querySelector(".add-btn")


// homeBtn.addEventListener("click", function() {
//     render()
//     menu()
//     home()
//     console.log("home")
// })

// todayBtn.addEventListener("click", function() {
//     render()
//     menu()
//     todayPage()
//     console.log("today")
// })

// weekBtn.addEventListener("click", function() {
//     render()
//     menu()
//     Week()
//     console.log("week")
// })

// projectBtns.forEach((project, index) => {
//     if (index >= 0) {
//         project.addEventListener('click', (event) => {
//             render()
//             menu()
//             projects(event.target.id)
//             console.log(`${event.target.id}`)
//       });
//     }
//   });

// notesBtn.addEventListener("click", function() {
//     render()
//     menu()
//     notes()
//     console.log("notes")
// })

// addBtn.addEventListener("click", function() {
//     renderModal()
//     modalPage()
//     firstLoadModal()
// })
