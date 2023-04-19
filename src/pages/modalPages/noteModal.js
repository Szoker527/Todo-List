import { createTask, createNotes } from "../../functions/tasks"
import { render, renderModal } from "../../functions/render"
import home from "../home"
import { inputBtn, inputTitle, inputTitleNotes } from "../../functions/inputs"
import menu from "../menu"

function noteModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.setAttribute("class", "display-menu-small-notes")
    displayMenu.classList.add("display-menu-small")

    inputTitle("title-input-notes", "input-title", displayMenu, "TITLE")
    inputTitleNotes("description-input-notes", "input-description", displayMenu, "Description")
    bottomBtnSubmit(displayMenu)

    const modal = document.querySelector(".modal");
    const form = document.querySelector('#myForm');
    const formTitle = document.querySelector('#input-title');
    const formDescription = document.querySelector('#input-description');

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
        createNotes(formTitle.value, formDescription.value)
        renderModal()
        render()
        menu()
        home()
        });
        
    }
    
function bottomBtnSubmit(parent) {
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-note-submit")
    parent.appendChild(bottomBtns)
    inputBtn(bottomBtns, "note-button", "Submit", "submit-note")
}

export default noteModal