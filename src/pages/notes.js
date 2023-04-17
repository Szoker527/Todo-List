import currentDate from "../functions/dates"
import { noteArray } from "../functions/arrays"
function notes() {
    const displayMenu = document.querySelector(".display-menu")

    noteArray.forEach(function(obj) {
        const objContainer = document.createElement("div")
        objContainer.classList.add("display-menu-obj")
        displayMenu.appendChild(objContainer)
        createNotesLook(objContainer, obj.title, obj.description, obj)
    });
}

function createNotesLook(parent, title, description, obj) {
    const noteTitle = document.createElement("div")
    const noteDescritpion = document.createElement("div")

    noteTitle.setAttribute("contenteditable", "true")
    noteDescritpion.setAttribute("contenteditable", "true")
    
    noteTitle.classList.add("note-title")
    noteDescritpion.classList.add("note-description")

    noteTitle.textContent = title
    noteDescritpion.textContent = description

    noteTitle.addEventListener("blur", (event) => {
        const newTitle = event.target.textContent;
        obj.title = newTitle;
      });

      noteDescritpion.addEventListener("blur", (event) => {
        const newDescription = event.target.textContent;
        obj.description = newDescription;
    });

    parent.appendChild(noteTitle)
    parent.appendChild(noteDescritpion)
}

export default notes