import { addTask, findProjectTitles, findDateArray, displayAllProjectTitles, dateArray } from "./arrays"
import { inputType } from "./inputs"

function displayTasks(parent, topic) {
    let arrayTopic;
    if (topic === "allTasks") {
        arrayTopic = dateArray
    }

    arrayTopic.forEach(function(obj) {
        const objContainer = document.createElement("div")
        objContainer.classList.add("display-menu-obj")
        parent.appendChild(objContainer)
        console.log( objContainer)
        createTaskLook(obj.priority, obj.title, obj.date, objContainer)
    });
}

function createTaskLook(priority, title, date, parent) {
    const objTitle = document.createElement("div")
    const objPriority = document.createElement("div")
    const objDate = document.createElement("div")
    objTitle.classList.add("display-menu-title")
    objTitle.textContent = title
    objPriority.textContent = priority
    objDate.textContent = date
    inputType("tasks-obj", "check-1", parent, "checkbox")
    parent.appendChild(objTitle)
    parent.appendChild(objDate)
    parent.appendChild(objPriority)
}

export default displayTasks