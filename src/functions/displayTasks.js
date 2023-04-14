import { dateArray } from "./arrays"
import { inputType } from "./inputs"

function displayTasks(parent) {
    const obj = document.createElement("div")
    const objTitle = document.createElement("div")

    obj.classList.add("display-menu-obj")
    parent.appendChild(obj)
    inputType("tasks-obj", "check-1", obj, "checkbox")
    objTitle.classList.add("display-menu-title")
    obj.appendChild(objTitle)

    objTitle.textContent = `${dateArray[0].title}`


    console.log(dateArray[0].date)
}

export default displayTasks