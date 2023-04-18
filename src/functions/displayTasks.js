import { addTask, findProjectTitles, findDateArray, 
    displayAllProjectTitles, dateArray, nextWeek } from "./arrays"
import { inputType, inputBtn, inputImgTrash, inputImgEdit } from "./inputs"
import { format } from "date-fns";
import trash from "../assets/images/trash.svg"
import edit from "../assets/images/edit.svg"

function displayTasks(parent, array) {
    let arrayTopic = array;
    arrayTopic.forEach(function(obj) {
        const objContainer = document.createElement("div")
        objContainer.classList.add("display-menu-obj")
        parent.appendChild(objContainer)
        const date = new Date(obj.date);
        const formattedDate = format(date, 'MMM d');
        createTaskLook(obj.priority, obj.title, formattedDate, objContainer, obj)
    });
    
}

function createTaskLook(priority, title, date, parent, obj) {
    const objTitle = document.createElement("div")
    const objPriority = document.createElement("div")
    const objDate = document.createElement("div")

    objTitle.classList.add("tasks-obj-title")
    objDate.classList.add("display-menu-date")

    if (priority === "low") {
        objPriority.classList.add("display-menu-priority-low")
    }
    if (priority === "medium") {
        objPriority.classList.add("display-menu-priority-medium")
    }
    if (priority === "high") {
        objPriority.classList.add("display-menu-priority-high")
    }

    objTitle.textContent = title
    objDate.textContent = date
    parent.appendChild(objPriority)
    inputType("tasks-obj-check", "check-1", parent, "checkbox")
    parent.appendChild(objTitle)
    inputBtn(parent, "tasks-obj-detail", "detail")
    parent.appendChild(objDate)
    inputImgEdit("tasks-obj-edit", parent, edit, obj)
    inputImgTrash("tasks-obj-trash", parent, trash, obj)
}

export default displayTasks