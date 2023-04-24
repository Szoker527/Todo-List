import modal from "../styles/modal.css"
import toDoModal from "./modalPages/toDoModal"
import projectModal from "./modalPages/projectModal"
import noteModal from "./modalPages/noteModal"
import { firstLoadModal } from "../functions/firstLoad"
import { renderForm, renderModal } from "../functions/render"
import { createTask, createProject } from "../functions/tasks"
import { firstLoad } from "../functions/firstLoad"

function modalAdd() {
    const modal = document.querySelector(".modal")
    const smallMain = document.querySelector(".main-small")

    const addToDo = document.getElementById("add-to-do");
    const addProject = document.getElementById("add-project");
    const addNote = document.getElementById("add-note");

    const formToDo = document.getElementById("display-todo")
    const formProject = document.getElementById("display-project")
    const formNote = document.getElementById("display-note")

    modal.style.display = "flex"

    renderModal()
    toDoForm(smallMain)
    firstLoadModal()
    
    addToDo.addEventListener("click", function() {
        renderModal()
        toDoForm(smallMain)
    })
    
    addProject.addEventListener("click", function() {
        renderModal()
        projectForm(smallMain)
    })

    addNote.addEventListener("click", function() {

    })
}

function toDoForm(parent) {
    const form = document.createElement("form");
    form.classList.add("display", "display-todo");
    form.setAttribute("id", "display-modal");
    form.setAttribute("autocomplete", "off");
    form.style.display = "grid";

    const titleTextArea = document.createElement("textarea");
    titleTextArea.setAttribute("name", "titles");
    titleTextArea.setAttribute("id", "display-title");
    titleTextArea.setAttribute("placeholder", "Title:");
    titleTextArea.setAttribute("required", "");

    const descriptionTextArea = document.createElement("textarea");
    descriptionTextArea.setAttribute("name", "descriptions");
    descriptionTextArea.setAttribute("id", "display-description");
    descriptionTextArea.setAttribute("placeholder", "Description: e.g internet, phone, rent.");
    descriptionTextArea.setAttribute("required", "");

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("display-date");

    const dateSpan = document.createElement("span");
    dateSpan.textContent = "Due Date:";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("name", "date");
    dateInput.setAttribute("id", "due-date");
    dateInput.setAttribute("required", "");

    dateDiv.appendChild(dateSpan);
    dateDiv.appendChild(dateInput);

    const todoButtonsDiv = document.createElement("div");
    todoButtonsDiv.classList.add("display-todo-buttons");

    const radioButtonsDiv = document.createElement("div");
    radioButtonsDiv.classList.add("radio-buttons");

    const prioritySpan = document.createElement("span");
    prioritySpan.textContent = "Priority:";

    const lowRadioInput = document.createElement("input");
    lowRadioInput.setAttribute("type", "radio");
    lowRadioInput.setAttribute("id", "low");
    lowRadioInput.setAttribute("name", "priority");
    lowRadioInput.setAttribute("value", "low");

    const lowLabel = document.createElement("label");
    lowLabel.setAttribute("for", "low");
    lowLabel.classList.add("radio-button");
    lowLabel.textContent = "Low";

    const mediumRadioInput = document.createElement("input");
    mediumRadioInput.setAttribute("type", "radio");
    mediumRadioInput.setAttribute("id", "medium");
    mediumRadioInput.setAttribute("name", "priority");
    mediumRadioInput.setAttribute("value", "medium");

    const mediumLabel = document.createElement("label");
    mediumLabel.setAttribute("for", "medium");
    mediumLabel.classList.add("radio-button");
    mediumLabel.textContent = "Medium";

    const highRadioInput = document.createElement("input");
    highRadioInput.setAttribute("type", "radio");
    highRadioInput.setAttribute("id", "high");
    highRadioInput.setAttribute("name", "priority");
    highRadioInput.setAttribute("value", "high");

    const highLabel = document.createElement("label");
    highLabel.setAttribute("for", "high");
    highLabel.classList.add("radio-button");
    highLabel.textContent = "High";

    radioButtonsDiv.appendChild(prioritySpan);
    radioButtonsDiv.appendChild(lowRadioInput);
    radioButtonsDiv.appendChild(lowLabel);
    radioButtonsDiv.appendChild(mediumRadioInput);
    radioButtonsDiv.appendChild(mediumLabel);
    radioButtonsDiv.appendChild(highRadioInput);
    radioButtonsDiv.appendChild(highLabel);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.classList.add("display-submit");
    submitButton.textContent = "Submit";

    todoButtonsDiv.appendChild(radioButtonsDiv);
    todoButtonsDiv.appendChild(submitButton);

    form.appendChild(titleTextArea);
    form.appendChild(descriptionTextArea);
    form.appendChild(dateDiv);
    form.appendChild(todoButtonsDiv);

    parent.appendChild(form);

    function onSubmit(event) {
       event.preventDefault();
       const formData = new FormData(form);
       const selectedPriority = formData.get('priority');
       createTask(formData.get('date'), formData.get('titles'), formData.get('descriptions'), selectedPriority);
       form.reset();
       const modal = document.querySelector(".modal");
       modal.style.display = "none";
       firstLoad();
       form.removeEventListener('submit', onSubmit, true);
    }

    form.addEventListener('submit', onSubmit, true);

  }

function projectForm(parent) {
    const form = document.createElement('form');
    form.classList.add('display', "display-project");
    form.id = 'display-modal';
    form.style.display = "grid";

    const textArea = document.createElement('textarea');
    textArea.name = 'project-title';
    textArea.id = 'project-title';
    textArea.placeholder = 'New Project Title:';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = "display-project-buttons"

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('display-submit');
    submitButton.textContent = 'Submit';

    buttonsContainer.appendChild(submitButton);
    form.appendChild(textArea);
    form.appendChild(buttonsContainer);

    parent.appendChild(form);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        console.log(formData.get('project-title'))
        createProject(formData.get('project-title'));
        form.reset();
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
        firstLoad();
        form.removeEventListener('submit', onSubmit, true);
    }
    
    form.addEventListener('submit', onSubmit, true);

    }



// function modalPage() {
//     const body = document.querySelector("body")
//     const myModal = document.createElement("div")
//     const modalContent = document.createElement("div")
//     const header = document.createElement("div")
//     const headerTitle = document.createElement("div")
//     const leftMenu = document.createElement("div")
//     const displayMenu = document.createElement("form")
//     const span = document.createElement("span")

//     myModal.classList.add("modal")
//     modalContent.classList.add("modal-content", "main", "main-small")
//     header.classList.add("header", "header-small")
//     headerTitle.classList.add("header-title")
//     leftMenu.classList.add("left-menu", "left-menu-small")
//     displayMenu.classList.add("display-menu-small")
//     addForm(displayMenu)
//     span.classList.add("close")


//     headerTitle.textContent = "Create a new..."
//     span.textContent = "close" 

//     body.appendChild(myModal)
//     myModal.appendChild(modalContent)
//     modalContent.appendChild(header)
//     modalContent.appendChild(leftMenu)
//     modalContent.appendChild(displayMenu)
//     header.appendChild(headerTitle)
//     header.appendChild(span)
//     menuModal()
//     todoSelect()
//     projectSelect()
//     noteSelect()
// }

// function menuModal() {
//     const leftMenuSmall = document.querySelector(".left-menu-small")
//     const toDo = document.createElement("div")
//     const project = document.createElement("div")
//     const note = document.createElement("div")

//     toDo.classList.add("left-menu-title-small")
//     project.classList.add("left-menu-title-small")
//     note.classList.add("left-menu-title-small")

//     toDo.setAttribute("id", "todoModal")
//     project.setAttribute("id", "projectModal")
//     note.setAttribute("id", "noteModal")

//     toDo.textContent = "To Do" 
//     project.textContent = "Project" 
//     note.textContent = "Note" 

//     leftMenuSmall.appendChild(toDo)
//     leftMenuSmall.appendChild(project)
//     leftMenuSmall.appendChild(note)
// }

// function addForm(form) {
//     form.setAttribute('id', 'myForm');
// }

// function todoSelect() {
//     const todoModal = document.querySelector("#todoModal")
//     todoModal.addEventListener("click", function() {
//         renderForm()
//         toDoModal()
//         console.log(todoModal)
//     })
// }

// function projectSelect() {
//     const projectMod = document.querySelector("#projectModal")
//     projectMod.addEventListener("click", function() {
//         renderForm()
//         projectModal()
//         console.log(projectMod)
//     })
// }

// function noteSelect() {
//     const noteMod = document.querySelector("#noteModal")
//     noteMod.addEventListener("click", function() {
//         renderForm()
//         noteModal()
//         console.log(noteMod)
//     })
// }
export default modalAdd