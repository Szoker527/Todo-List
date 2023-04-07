import project from "../functions/projects"

function menu() {
    const today = document.createElement("div")
    const upcoming = document.createElement("div")
    const leftMenu = document.querySelector(".left-menu")
    today.classList.add("today-page")
    upcoming.classList.add("upcoming-page")

    today.textContent = "TODAY"
    upcoming.textContent = "UPCOMING"

    leftMenu.appendChild(today)
    leftMenu.appendChild(upcoming)
    project()
}

export default menu