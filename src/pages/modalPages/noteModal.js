import { createTask, createNotes } from "../../functions/tasks"
import { render } from "../../functions/render"
import home from "../home"
import { inputBtn, inputTitle, inputTitleNotes } from "../../functions/inputs"

function noteModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.classList.add("display-menu-small-notes")
    displayMenu.classList.remove('display-menu-small-todo');

    inputTitle("title-input-notes", "input-title", displayMenu, "TITLE")
    inputTitleNotes("description-input-notes", "input-description", displayMenu, "Description", 2, 4)
    bottomBtnSubmit()

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
        render()
        home()
        });
        
    }
    
function bottomBtnSubmit() {
    const displayMenu = document.querySelector(".display-menu-small")
    const bottomBtns = document.createElement("div")

    bottomBtns.classList.add("bottom-btn-note-submit")
    displayMenu.appendChild(bottomBtns)
    inputBtn(bottomBtns, "note-button", "Submit")
}

export default noteModal