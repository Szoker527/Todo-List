import { addTask, findProjectTitles, findDateArray, 
    displayAllProjectTitles, dateArray, nextWeek } from "./arrays"
import { inputType } from "./inputs"
import { format } from "date-fns";

function displayTasks(parent, topic) {
    let arrayTopic;
    if (topic === "allTasks") {
        arrayTopic = dateArray
    }
    if (topic === "todayTasks") {
        const today = new Date();
        const formattedDate = format(today, 'yyyy-MM-dd');
        arrayTopic = findDateArray(formattedDate)
    }
    if (topic === "weekTasks") {
        arrayTopic = nextWeek()
    }

    arrayTopic.forEach(function(obj) {
        const objContainer = document.createElement("div")
        objContainer.classList.add("display-menu-obj")
        parent.appendChild(objContainer)
        createTaskLook(obj.priority, obj.title, obj.date, objContainer)
    });
    
}

function createTaskLook(priority, title, date, parent) {
    const objTitle = document.createElement("div")
    const objPriority = document.createElement("div")
    const objDate = document.createElement("div")

    objTitle.classList.add("display-menu-title")
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
    inputType("tasks-obj-detail", "check-2", parent, "button")
    parent.appendChild(objDate)
    inputType("tasks-obj-btn", "check-3", parent, "button")
    inputType("tasks-obj-btn", "check-4", parent, "button")
}

export default displayTasks