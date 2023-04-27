import { firstLoad } from "../functions/firstLoad"
import x from '../assets/images/x.svg';
import { saveArrayToLocal, returnTaskArray } from "../functions/arrays";
function modalEdit(obj) {
    const modal = document.querySelector(".modal-edit")
    const form = document.getElementById("display-edit")
    modal.style.display = "grid"
    const detailTitle = document.getElementById("display-title")
    const editDescription = document.getElementById("display-description")
    const editDate = document.getElementById("due-date")
    const editRadio = document.getElementById(`${obj.priority}`)
    detailTitle.textContent = obj.title
    editDescription.textContent = obj.description
    editDate.value = obj.date
    editRadio.checked = true;
    
    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const selectedPriority = formData.get('priority');
        obj.title = formData.get('titles')
        obj.description = formData.get('descriptions')
        obj.date = formData.get('date')
        obj.priority = selectedPriority
        form.reset();
        modal.style.display = "none";
        saveArrayToLocal(returnTaskArray(), "taskArray")
        firstLoad();
        form.removeEventListener('submit', onSubmit, true);
        console.log(obj)
    }
    
    form.addEventListener('submit', onSubmit, true);


    const closeImg = document.querySelector(".close")
    const svgClose = document.createElement('svg');
    svgClose.innerHTML = x;
    svgClose.classList.add("close")
    closeImg.parentElement.replaceChild(svgClose, closeImg);
    
    svgClose.addEventListener("click", function(event) {
        form.removeEventListener('submit', onSubmit, true);
        modal.style.display = "none";
    })
}

export default modalEdit