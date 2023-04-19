

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
    detailTitle.classList.add("detail-title")
    detailProject.classList.add("detail-project", "detail-content")
    detailPriority.classList.add("detail-priority", "detail-content")
    detailDueDate.classList.add("detail-date", "detail-content")
    detailDescription.classList.add("detail-description", "detail-content")


    myModal.style.display = "flex"
    span.textContent = "close" 
    detailTitle.textContent = obj.title
    detailProject.textContent = "Project: " + obj.project 
    detailPriority.textContent = "Priority: " + obj.priority 
    detailDueDate.textContent = "Due Date: " + obj.date 
    detailDescription.textContent = "Description: " + obj.description

    const detailContent = document.querySelectorAll(".detail-content")
    console.log(detailContent)

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