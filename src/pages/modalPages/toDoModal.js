import { inputTitle, inputBtn } from "../../functions/inputs"

function toDoModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.classList.add("display-menu-small-todo")
    inputTitle("title-input", displayMenu, "TITLE")
    inputTitle("description-input", displayMenu, "Description")
    bottomBtnPriority()
    bottomBtnSubmit()
    dueDateBtn()
    console.log(displayMenu)
}

function bottomBtnPriority() {
    const displayMenu = document.querySelector(".display-menu-small")
    const bottomBtns = document.createElement("div")
    const priorityText = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-todo-prio")
    displayMenu.appendChild(bottomBtns)
    bottomBtns.appendChild(priorityText)
    priorityText.classList.add("bottom-text-todo-prio")
    priorityText.textContent = "Priority:"

    inputBtn(bottomBtns, "todo-button-low", "LOW")
    inputBtn(bottomBtns, "todo-button-medium", "MEDIUM")
    inputBtn(bottomBtns, "todo-button-high", "HIGH")
}

function bottomBtnSubmit() {
    const displayMenu = document.querySelector(".display-menu-small")
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-todo-subm")
    displayMenu.appendChild(bottomBtns)
    inputBtn(bottomBtns, "todo-button", "Submit")
}

function dueDateBtn() {
    const displayMenu = document.querySelector(".display-menu-small")
    const dueDate = document.createElement("div")
    const dateText = document.createElement("div")
    
    dateText.classList.add("bottom-text-todo-date")
    dateText.textContent = "Due Date:"

    dueDate.classList.add("bottom-btn-todo-date")
    displayMenu.appendChild(dueDate)
    dueDate.appendChild(dateText)
    inputBtn(dueDate, "date-button", "Submit")
}
export default toDoModal