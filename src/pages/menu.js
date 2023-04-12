import project from "../functions/projects"
// This page creates elements that are displayed on menu

function menu() {
    const home = document.createElement("div")
    const today = document.createElement("div")
    const week = document.createElement("div")
    const notes = document.createElement("div")
    const btnAdd = document.createElement("button")
    const leftMenu = document.querySelector(".left-menu")
    home.classList.add("home-page")
    today.classList.add("today-page")
    week.classList.add("upcoming-page")
    notes.classList.add("notes-page")
    btnAdd.classList.add("add-btn")

    home.textContent = "Home"
    today.textContent = "Today"
    week.textContent = "Week"
    notes.textContent = "Notes"
    btnAdd.textContent = "ADD"

    leftMenu.appendChild(home)
    leftMenu.appendChild(today)
    leftMenu.appendChild(week)
    project()
    leftMenu.appendChild(notes)
    leftMenu.appendChild(btnAdd)
}

export default menu