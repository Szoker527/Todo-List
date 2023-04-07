import todayPage from "./pages/today"
import upcoming from "./pages/upcoming"
import firstLoad from "./functions/firstLoad"
import render from "./functions/render"
import style from "./styles/style.css"
import { createTask } from "./functions/tasks"


createTask("2014 02 03", "Work", "morning", "What to do", "wdadadadadaada")
createTask("2014 01 04", "Relax", "night", "Play games", "xxxxxxxxxxxxxxxxx")
createTask("2014 03 05", "Relax", "wwww", "dsdsds", "xxxxxxxxxxxxxxxxx")
firstLoad()

const todayBtn = document.querySelector(".today-page")
const upcomingBtn = document.querySelector(".upcoming-page")

todayBtn.addEventListener("click", function() {
    render()
    todayPage()
    console.log("today")
})

upcomingBtn.addEventListener("click", function() {
    render()
    upcoming()
    console.log("upcoming")
})

