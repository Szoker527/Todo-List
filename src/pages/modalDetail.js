function modalDetail(obj) {
    const modal = document.querySelector(".modal-detail")
    modal.style.display = "grid"
    const detailTitle = document.getElementById("display-title")
    detailTitle.textContent = obj.title
    const title = document.querySelector(".tasks-title");
    const project = document.querySelector(".tasks-project");
    const priority = document.querySelector(".tasks-priority");
    const date = document.querySelector(".tasks-date");
    const description = document.querySelector(".tasks-description");
    
    title.textContent = obj.title
    project.textContent = obj.project
    priority.textContent = obj.priority
    date.textContent = obj.date
    description.textContent = obj.description
    console.log(obj)

}

export default modalDetail