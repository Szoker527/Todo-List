import currentDate from "../functions/dates"
import { createNotes } from "../functions/tasks"
import { inputBtn } from "../functions/inputs"
function notes() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.classList.add("display-menu-small-notes")

    inputTitle("title-input", "input-title", displayMenu, "TITLE")
    inputTitle("description-input", "input-description", displayMenu, "Description")

    bottomBtnSubmit()

    const modal = document.querySelector(".modal");
    const form = document.querySelector('#myForm');

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
        const selectedPriority = document.querySelector('input[name="priority"]:checked').value;
        createTask(formDateSubmit.value, "Work", formTitle.value, formDescription.value , selectedPriority)
        render()
        home()
        });
}

function bottomBtnSubmit() {
    const displayMenu = document.querySelector(".display-menu-small")
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-note-subm")
    displayMenu.appendChild(bottomBtns)
    inputBtn(bottomBtns, "note-button", "Submit")
}

export default notes