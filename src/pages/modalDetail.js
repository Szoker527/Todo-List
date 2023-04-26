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
    // Add the image to a parent element in the DOM
    const parentElement = document.querySelector(".display-task");
    
    const images = parentElement.getElementsByTagName('img');
    for (let i = images.length - 1; i >= 0; i--) {
        images[i].parentNode.removeChild(images[i]);
    }
    
    const img = document.createElement("img");
    img.setAttribute("src", "../src/assets/images/x.svg");
    img.setAttribute("alt", "");
    img.classList.add("close");
    parentElement.appendChild(img);
    
    
    img.addEventListener("click", function() {
        modal.style.display = "none";
    }) 
}

export default modalDetail