import todayPage from "./pages/today"
import upcoming from "./pages/upcoming"
import firstLoad from "./functions/firstLoad"
import render from "./functions/render"
import style from "./styles/style.css"


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