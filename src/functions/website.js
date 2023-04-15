export default page
import { currentDate } from "./tasks"

function page() {
    const menu = document.querySelector(".menu")
    const contentContainer = document.createElement("div")
    contentContainer.classList.add("content-menu")
    const todayTitle = document.createElement("div")
    const todayDate = document.createElement("h1")
    const todayDateSub = document.createElement("h3")

    todayTitle.classList.add("today-title")

    todayDateSub.textContent = currentDate()
    todayDate.textContent = "Today"

    todayTitle.appendChild(todayDate)
    todayTitle.appendChild(todayDateSub)
    contentContainer.appendChild(todayTitle)
    menu.appendChild(contentContainer)
}
