import currentDate from "../functions/dates"

function Week() {
    const menu = document.querySelector(".display-menu")
    const contentContainer = document.createElement("div")
    contentContainer.classList.add("content-menu")
    const todayTitle = document.createElement("div")
    const todayDate = document.createElement("h1")
    const todayDateSub = document.createElement("h3")

    todayTitle.classList.add("today-title")

    todayDateSub.textContent = currentDate()
    todayDate.textContent = "Week"

    todayTitle.appendChild(todayDate)
    todayTitle.appendChild(todayDateSub)
    contentContainer.appendChild(todayTitle)
    menu.appendChild(contentContainer)
}

export default Week