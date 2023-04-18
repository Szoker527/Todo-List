import currentDate from "../functions/dates"
import displayTasks from "../functions/displayTasks"
import { nextWeek } from "../functions/arrays"

function Week() {
    const menu = document.querySelector(".display-menu")
    const weekArray = nextWeek()
    displayTasks(menu, weekArray)
}

export default Week