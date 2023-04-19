import { inputTitle, inputBtn, inputType, inputRadio, inputTitleNotes } from "../../functions/inputs"
import { render } from "../../functions/render"
import home from "../home"
import { createTask } from "../../functions/tasks"
import menu from "../menu"

function editModal(obj) {   
    const body = document.querySelector("body")
    const editContainer = document.createElement("div")
    const modalFormEdit = document.createElement("form")
    const span = document.createElement("span")

    span.classList.add("close", "close-detail")
    editContainer.classList.add("modal")
    modalFormEdit.classList.add("modal-edit","modal-content", "main")
    body.appendChild(editContainer)
    editContainer.appendChild(modalFormEdit)
    modalFormEdit.appendChild(span)

    span.addEventListener("click", () => {
        editContainer.style.display = "none"
    })

    editContainer.style.display = "flex"   
    span.textContent = "close"
    inputTitleNotes("edit-content", "edit-title", modalFormEdit, "Title")
    inputTitleNotes("edit-content", "edit-description", modalFormEdit, "Description:")
    dueDateBtn(modalFormEdit) 
    bottomBtnPriority(modalFormEdit)
    bottomBtnSubmit(modalFormEdit)
}

function bottomBtnPriority(parent) {
    const bottomBtns = document.createElement("div")
    const priorityText = document.createElement("div")

    bottomBtns.classList.add("edit-bottom-btn-prio")
    parent.appendChild(bottomBtns)
    bottomBtns.appendChild(priorityText)
    priorityText.classList.add("edit-bottom-text-prio")
    priorityText.textContent = "Priority:"

    inputRadio(bottomBtns, "edit-button-low", "LOW", "low")
    inputRadio(bottomBtns, "edit-button-medium", "Medium", "medium")
    inputRadio(bottomBtns, "edit-button-high", "High", "high")
}

function bottomBtnSubmit(parent) {
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("edit-bottom-btn-subm")
    parent.appendChild(bottomBtns)
    inputBtn(bottomBtns, "edit-button", "submit edit")
}

function dueDateBtn(parent) {
    const dueDate = document.createElement("div")
    const dateText = document.createElement("label")
    
    dateText.classList.add("edit-bottom-text-date")
    dateText.textContent = "Due Date:"

    dueDate.classList.add("edit-bottom-btn-date")
    parent.appendChild(dueDate)
    dueDate.appendChild(dateText)
    inputType("edit-date-button", "edit-date-submit", dueDate, "date")
}


export default editModal