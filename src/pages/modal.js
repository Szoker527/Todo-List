import modal from "../styles/modal.css"
import toDoModal from "./modalPages/toDoModal"
import projectModal from "./modalPages/projectModal"
import noteModal from "./modalPages/noteModal"
import { firstLoadModal } from "../functions/firstLoad"

function modalPage() {
    const body = document.querySelector("body")
    const myModal = document.createElement("div")
    const modalContent = document.createElement("div")
    const header = document.createElement("div")
    const headerTitle = document.createElement("div")
    const leftMenu = document.createElement("div")
    const displayMenu = document.createElement("form")
    const span = document.createElement("span")

    myModal.classList.add("modal")
    modalContent.classList.add("modal-content", "main", "main-small")
    header.classList.add("header", "header-small")
    headerTitle.classList.add("header-title")
    leftMenu.classList.add("left-menu", "left-menu-small")
    displayMenu.classList.add("display-menu", "display-menu-small")
    addForm(displayMenu)
    span.classList.add("close")


    headerTitle.textContent = "Create a new..."
    span.textContent = "close" 

    body.appendChild(myModal)
    myModal.appendChild(modalContent)
    modalContent.appendChild(header)
    modalContent.appendChild(leftMenu)
    modalContent.appendChild(displayMenu)
    header.appendChild(headerTitle)
    header.appendChild(span)
    menuModal()
    firstLoadModal()
}

function menuModal() {
    const leftMenuSmall = document.querySelector(".left-menu-small")
    const toDo = document.createElement("div")
    const project = document.createElement("div")
    const note = document.createElement("div")

    toDo.classList.add("left-menu-title-small")
    project.classList.add("left-menu-title-small")
    note.classList.add("left-menu-title-small")

    toDo.textContent = "To Do" 
    project.textContent = "Project" 
    note.textContent = "Note" 

    leftMenuSmall.appendChild(toDo)
    leftMenuSmall.appendChild(project)
    leftMenuSmall.appendChild(note)
}

function addForm(form) {
    form.setAttribute('id', 'myForm');
}

export default modalPage