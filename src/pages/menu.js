import project from "../functions/projects"
import home from "./home"
import todayPage from "./today"
import Week from "./week"
import notes from "./notes"
import projects from "./projectPage"
import { firstLoadModal } from "../functions/firstLoad"
import { render, renderModal } from "../functions/render"
import modalPage from "./modal"
import projectModal from "./modalPages/projectModal"
import style from "../styles/style.css"
import { addedProjectName, defaultProjectName } from "../functions/tasks"
// This page creates elements that are displayed on menu

function menu() {
    const homePage = document.createElement("div")
    const today = document.createElement("div")
    const week = document.createElement("div")
    const notesPage = document.createElement("div")
    const btnAdd = document.createElement("button")
    const leftMenu = document.querySelector(".left-menu")
    homePage.classList.add("home-page", "left-menu-title")
    today.classList.add("today-page", "left-menu-title")
    week.classList.add("upcoming-page", "left-menu-title")
    notesPage.classList.add("notes-page", "left-menu-title")
    btnAdd.classList.add("add-btn")


    homePage.textContent = "Home"
    today.textContent = "Today"
    week.textContent = "Week"
    notesPage.textContent = "Notes"
    btnAdd.textContent = "ADD"

    leftMenu.appendChild(homePage)
    leftMenu.appendChild(today)
    leftMenu.appendChild(week)
    project()
    leftMenu.appendChild(notesPage)
    leftMenu.appendChild(btnAdd)

    const homeBtn = document.querySelector(".home-page")
    const todayBtn = document.querySelector(".today-page")
    const weekBtn = document.querySelector(".upcoming-page")
    const projectBtns = document.querySelectorAll('.project-topics');
    const notesBtn = document.querySelector(".notes-page")
    const addBtn = document.querySelector(".add-btn")


homeBtn.addEventListener("click", function() {
    render()
    menu()
    defaultProjectName()
    home()
    console.log("home")
})

todayBtn.addEventListener("click", function() {
    render()
    menu()
    defaultProjectName()
    todayPage()
    console.log("today")
})

weekBtn.addEventListener("click", function() {
    render()
    menu()
    defaultProjectName()
    Week()
    console.log("week")
})

projectBtns.forEach((project, index) => {
    if (index >= 0) {
        project.addEventListener('click', (event) => {
            render()
            menu()
            projects(event.target.id)
            addedProjectName(event.target.id)
            console.log(`${event.target.id}`)
      });
    }
  });

notesBtn.addEventListener("click", function() {
    render()
    menu()
    defaultProjectName()
    notes()
    console.log("notes")
})

addBtn.addEventListener("click", function() {
    renderModal()
    modalPage()
    firstLoadModal()
})
}

export default menu