import { firstLoad } from "../functions/firstLoad"

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
    
    const close = document.querySelector(".close")
    close.addEventListener("click", function(event) {
        form.removeEventListener('submit', onSubmit, true);
        modal.style.display = "none";
    })

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
        firstLoad();
        form.removeEventListener('submit', onSubmit, true);
     }
 
     form.addEventListener('submit', onSubmit, true);
}

export default modalEdit