
function modalPage() {
    const body = document.querySelector("body")
    const myModal = document.createElement("div")
    const modalContent = document.createElement("div")
    const span = document.createElement("span")
    const p = document.createElement("p")

    myModal.classList.add("modal")
    modalContent.classList.add("modal-content")
    span.classList.add("close")

    span.textContent = "&times;"
    p.textContent = "Some text in the Modal.."    

    body.appendChild(myModal)
    myModal.appendChild(modalContent)
    modalContent.appendChild(span)
    modalContent.appendChild(p)

}

export default modalPage