import currentDate from "../functions/dates"
import displayTasks from "../functions/displayTasks"

function home() {
    const menu = document.querySelector(".display-menu")
    displayTasks(menu, "allTasks")
}

export default home