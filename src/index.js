import home from "./pages/home"
import todayPage from "./pages/today"
import Week from "./pages/week"
import notes from "./pages/notes"
import firstLoad from "./functions/firstLoad"
import render from "./functions/render"
import style from "./styles/style.css"
import { createTask } from "./functions/tasks"


createTask("2014 02 03", "Work", "morning", "What to do", "wdadadadadaada")
createTask("2014 01 04", "Relax", "night", "Play games", "xxxxxxxxxxxxxxxxx")
createTask("2014 03 05", "Relax", "wwww", "dsdsds", "xxxxxxxxxxxxxxxxx")
firstLoad()

const homeBtn = document.querySelector(".home-page")
const todayBtn = document.querySelector(".today-page")
const weekBtn = document.querySelector(".upcoming-page")
const notesBtn = document.querySelector(".notes-page")

homeBtn.addEventListener("click", function() {
    render()
    home()
    console.log("home")
})

todayBtn.addEventListener("click", function() {
    render()
    todayPage()
    console.log("today")
})

weekBtn.addEventListener("click", function() {
    render()
    Week()
    console.log("week")
})

notesBtn.addEventListener("click", function() {
    render()
    notes()
    console.log("notes")
})

