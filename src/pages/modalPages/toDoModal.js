import { inputTitle, inputBtn, inputType, inputRadio } from "../../functions/inputs"

function toDoModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.classList.add("display-menu-small-todo")
    inputTitle("title-input", "input-title", displayMenu, "TITLE")
    inputTitle("description-input", "input-description", displayMenu, "Description")
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

    inputRadio(bottomBtns, "todo-button-low", "LOW", "low")
    inputRadio(bottomBtns, "todo-button-medium", "Medium", "medium")
    inputRadio(bottomBtns, "todo-button-high", "High", "high")
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
    const dateText = document.createElement("label")
    
    dateText.classList.add("bottom-text-todo-date")
    dateText.textContent = "Due Date:"

    dueDate.classList.add("bottom-btn-todo-date")
    displayMenu.appendChild(dueDate)
    dueDate.appendChild(dateText)
    inputType("date-button", "date-submit", dueDate, "date")
}

function whichProject() {
    

}
export default toDoModal