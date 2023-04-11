import project from "../functions/projects"
// This page controls how the site will look after clicking on button
// on the menu and it creates buttons in the menu
function Week() {
    const home = document.createElement("div")
    const today = document.createElement("div")
    const week = document.createElement("div")
    const notes = document.createElement("div")
    const leftMenu = document.querySelector(".left-menu")
    home.classList.add("home-page")
    today.classList.add("today-page")
    week.classList.add("upcoming-page")
    notes.classList.add("notes-page")

    home.textContent = "Home"
    today.textContent = "Today"
    week.textContent = "Week"
    notes.textContent = "Notes"

    leftMenu.appendChild(home)
    leftMenu.appendChild(today)
    leftMenu.appendChild(week)
    leftMenu.appendChild(notes)
    project()
}

export default Week