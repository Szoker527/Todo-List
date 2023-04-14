import currentDate from "../functions/dates"
import displayTasks from "../functions/displayTasks"
function home() {
    const menu = document.querySelector(".display-menu")
    const contentContainer = document.createElement("div")
    // contentContainer.classList.add("content-menu")
    // const todayTitle = document.createElement("div")
    // const todayDate = document.createElement("h1")
    // const todayDateSub = document.createElement("h3")

    // todayTitle.classList.add("today-title")

    // todayDateSub.textContent = currentDate()
    // todayDate.textContent = "Home"

    // todayTitle.appendChild(todayDate)
    // todayTitle.appendChild(todayDateSub)
    // contentContainer.appendChild(todayTitle)
    // menu.appendChild(contentContainer)
    displayTasks(menu, "allTasks")
}

export default home