import { findProjectTitles } from "../functions/arrays"
import displayTasks from "../functions/displayTasks"

function projects(idName) {
    const menu = document.querySelector(".display-menu")
    const projectArray = findProjectTitles(idName)
    displayTasks(menu, "weekTasks", projectArray)
}

export default projects