import modal from "../styles/modal.css"

function modalPage() {
    const body = document.querySelector("body")
    const myModal = document.createElement("div")
    const modalContent = document.createElement("div")
    const header = document.createElement("div")
    const leftMenu = document.createElement("div")
    const displayMenu = document.createElement("div")
    const span = document.createElement("span")

    myModal.classList.add("modal")
    modalContent.classList.add("modal-content", "main", "main-small")
    header.classList.add("header")
    leftMenu.classList.add("left-menu")
    displayMenu.classList.add("display-menu")
    span.classList.add("close")

    span.textContent = "close" 

    body.appendChild(myModal)
    myModal.appendChild(modalContent)
    modalContent.appendChild(header)
    modalContent.appendChild(leftMenu)
    modalContent.appendChild(displayMenu)
    header.appendChild(span)

}

export default modalPage