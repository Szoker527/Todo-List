

function detailMod(obj) {
    const body = document.querySelector("body")
    const myModal = document.createElement("div")
    const modalContent = document.createElement("div")
    const span = document.createElement("span")
    const detailTitle = document.createElement("div")
    const detailProject = document.createElement("div")
    const detailPriority = document.createElement("div")
    const detailDueDate = document.createElement("div")
    const detailDescription = document.createElement("div")

    myModal.classList.add("modal")
    modalContent.classList.add("modal-detail","modal-content", "main")
    span.classList.add("close", "close-detail")

    myModal.style.display = "flex"
    span.textContent = "close" 
    detailTitle.textContent = obj.title
    detailProject.textContent = obj.project 
    detailPriority.textContent = obj.priority 
    detailDueDate.textContent = obj.date 
    detailDescription.textContent = obj.description

    span.addEventListener("click", () => {
        myModal.style.display = "none"
    })

    body.appendChild(myModal)
    myModal.appendChild(modalContent)
    modalContent.appendChild(span)
    modalContent.appendChild(detailTitle)
    modalContent.appendChild(detailProject)
    modalContent.appendChild(detailPriority)
    modalContent.appendChild(detailDueDate)
    modalContent.appendChild(detailDescription)
}

export default detailMod