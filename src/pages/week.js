import currentDate from "../functions/dates"
import displayTasks from "../functions/displayTasks"

function Week() {
    const menu = document.querySelector(".display-menu")
    displayTasks(menu, "weekTasks")
}

export default Week