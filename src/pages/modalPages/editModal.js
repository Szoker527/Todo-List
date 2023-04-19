import { inputTitle, inputBtn, inputType, inputRadio, inputTitleNotes } from "../../functions/inputs"
import { render, renderModal } from "../../functions/render"
import home from "../home"
import { createTask } from "../../functions/tasks"
import menu from "../menu"

function editModal(obj) {   
    const body = document.querySelector("body")
    const editContainer = document.createElement("div")
    const modalFormEdit = document.createElement("form")
    const span = document.createElement("span")
    const editTitle = inputTitleNotes("edit-content", "edit-title", modalFormEdit, "Title")
    const editDescription = inputTitleNotes("edit-content", "edit-description", modalFormEdit, "Description:")
    const editDate = dueDateBtn(modalFormEdit) 
    const editPriority = bottomBtnPriority(modalFormEdit, obj.priority)
    bottomBtnSubmit(modalFormEdit)

    editPriority.setAttribute("checked", "true")
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
    editTitle.textContent = obj.title
    editDescription.textContent = obj.description
    editDate.value = obj.date

    modalFormEdit.addEventListener('submit', (event) => {
        event.preventDefault();
        editContainer.style.display = 'none';
        const selectedPriority = document.querySelector('input[name="priority"]:checked').value;
        obj.title = editTitle.textContent
        obj.description =  editDescription.textContent
        obj.date = editDate.value
        obj.priority = selectedPriority
        render()
        renderModal()
        menu()
        home()
        });
}

function bottomBtnPriority(parent, objPrio) {
    const bottomBtns = document.createElement("div")
    const priorityText = document.createElement("div")
    console.log(objPrio)
    bottomBtns.classList.add("edit-bottom-btn-prio")
    parent.appendChild(bottomBtns)
    bottomBtns.appendChild(priorityText)
    priorityText.classList.add("edit-bottom-text-prio")
    priorityText.textContent = "Priority:"

    const low = inputRadio(bottomBtns, "edit-button-low", "LOW", "low")
    const medium = inputRadio(bottomBtns, "edit-button-medium", "Medium", "medium")
    const high = inputRadio(bottomBtns, "edit-button-high", "High", "high")
    if (objPrio === "low") {
        console.log(low.value)
        return low
    }
    if (objPrio === "medium") {
        console.log(medium.value)
        return medium
    }
    if (objPrio === "high") {
        console.log(high.value)
        return high
    }
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
    return inputType("edit-date-button", "edit-date-submit", dueDate, "date")
}


export default editModal