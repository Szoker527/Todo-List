import currentDate from "../functions/dates"
import displayTasks from "../functions/displayTasks"
import { dateArray } from "../functions/arrays"

function home() {
    const menu = document.querySelector(".display-menu")
    displayTasks(menu, dateArray)
}

export default home