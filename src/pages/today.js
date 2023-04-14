import displayTasks from "../functions/displayTasks"
import currentDate from "../functions/dates"


function todayPage() {
    const menu = document.querySelector(".display-menu")
    displayTasks(menu, "todayTasks")
}

export default todayPage