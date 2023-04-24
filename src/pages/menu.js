import project from "../functions/projects"
import home from "./home"
import todayPage from "./today"
import Week from "./week"
import notes from "./notes"
import projects from "./projectPage"
import { firstLoadModal } from "../functions/firstLoad"
import { render, renderModal } from "../functions/render"
import modalPage from "./modalAdd"
import projectModal from "./modalPages/projectModal"
import { addedProjectName, defaultProjectName } from "../functions/tasks"
import { restoreDefault } from ".."
// This page creates elements that are displayed on menu
function menu() {
    const homePage = document.createElement("li")
    const today = document.createElement("li")
    const week = document.createElement("li")
    const notesPage = document.createElement("li")
    const btnAdd = document.createElement("button")
    const btnReset = document.createElement("button")
    const leftMenu = document.querySelector(".left-menu")
    homePage.classList.add("home-page", "left-menu-title")
    today.classList.add("today-page", "left-menu-title")
    week.classList.add("upcoming-page", "left-menu-title")
    notesPage.classList.add("notes-page", "left-menu-title")
    btnAdd.classList.add("add-btn")
    btnReset.classList.add("reset-btn")


    homePage.textContent = "Home"
    today.textContent = "Today"
    week.textContent = "Week"
    notesPage.textContent = "Notes"
    btnAdd.textContent = "ADD"
    btnReset.textContent = "Reset"

    leftMenu.appendChild(homePage)
    leftMenu.appendChild(today)
    leftMenu.appendChild(week)
    project()
    leftMenu.appendChild(notesPage)
    leftMenu.appendChild(btnAdd)
    leftMenu.appendChild(btnReset)

    const homeBtn = document.querySelector(".home-page")
    const todayBtn = document.querySelector(".today-page")
    const weekBtn = document.querySelector(".upcoming-page")
    const projectBtns = document.querySelectorAll('.project-topics');
    const notesBtn = document.querySelector(".notes-page")
    const addBtn = document.querySelector(".add-btn")
    const resetBtn = document.querySelector(".reset-btn")


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
    weekBtn.classList.add("selected-nav")
    console.log(weekBtn)
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

resetBtn.addEventListener("click", function() {
    restoreDefault()
    location.reload();
})

}

// function checkedState(element) {
//     element.classList.add("selected-nav")
// }

export default menu