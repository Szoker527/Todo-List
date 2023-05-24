import { format } from "date-fns";
import {
  findProjectTitles,
  removeFromArray,
  notesTasks,
  saveArrayToLocal,
} from "./arrays";
import { addedProjectName } from "./tasks";
import modalDetail from "../pages/modalDetail";
import modalEdit from "../pages/modalEdit";
import { firstLoad } from "./firstLoad";
import { deleteSelect } from "..";
import edit from "../assets/images/edit.svg";
import trash from "../assets/images/trash.svg";

const currentDisplay = "home";

function displayTasks(array) {
  const nodeContainer = document.getElementById("display");
  const originalNode = document.getElementById("original");

  /* 
  Zamiast trzymać oryginalny element i go kopiować
  można stworzyć funkcję, która przyjmuje parametry
  title, details, date i priority oraz następnie tworzy dokładnie
  taki element na nowo. Będzie to w kodzie wyglądać tak, że
  trzeba będzie dodawać elementy takie jakie masz w tym głównym komponencie:
  widzę, że to:
  
    <div class="task-container" style="display: none;">
        <span class="task-color"></span>
        <div class="task-title"></div>
        <button class="task-details"></button>
        <div class="task-date"></div>
        <svg class="icon" id="edit-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></svg>
        <svg class="icon" id="trash-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></svg>
    </div>

  Sprawi to, że wystarczy że przelecisz pętlą przez "array"
  wywołując funkcję "createTaskListElement" z parametrami.

  Oczywiscie potem postarać się porozbijać tą funkcję na mniejsze, która
  odpowiadać za każde pojedyńcze zadanie. Sprawi to, że kod będzie bardziej czytelny
  */

  originalNode.style.display = "grid";
  nodeContainer.style.display = "block";

  // find the img element to replace
  const editImg = document.querySelector("#edit-icon");
  const trashImg = document.querySelector("#trash-icon");
  // create a new svg element
  const svgEdit = document.createElement("svg");
  const svgTrash = document.createElement("svg");
  svgEdit.innerHTML = edit;
  svgTrash.innerHTML = trash;

  svgEdit.classList.add("icon");
  svgEdit.id = "edit-icon";

  svgTrash.classList.add("icon");
  svgTrash.id = "trash-icon";

  // replace the img element with the svg element
  editImg.parentElement.replaceChild(svgEdit, editImg);
  trashImg.parentElement.replaceChild(svgTrash, trashImg);

  if (document.querySelector(".display-large-note")) {
    nodeContainer.classList.remove("display-large-note");
    nodeContainer.classList.add("display-large");
  }

  if (!originalNode) {
    console.error("Element with id 'original' not found");
    return;
  }

  const clonedNode = originalNode.cloneNode(true);
  clonedNode.id = "cloned";

  // Remove all child nodes except the original
  while (nodeContainer.lastChild && nodeContainer.lastChild !== originalNode) {
    nodeContainer.removeChild(nodeContainer.lastChild);
  }

  for (let i = 0; i < array.length; i++) {
    const date = new Date(array[i].date);
    const formattedDate = format(date, "MMM d");
    const clonedNode = originalNode.cloneNode(true);
    clonedNode.id = i;
    clonedNode.classList.add(array[i].priority);
    clonedNode.querySelector(".task-title").textContent = array[i].title;
    clonedNode.querySelector(".task-date").textContent = formattedDate;
    nodeContainer.appendChild(clonedNode);
    const clonedNodeChildren = clonedNode.children;
    const obj = array[i];

    for (let i = 0; i < clonedNodeChildren.length; i++) {
      const child = clonedNodeChildren[i];
      if (child.id.toLowerCase() === "edit-icon") {
        child.addEventListener("click", (event) => {
          modalEdit(obj);
        });
      }
    }

    for (let i = 0; i < clonedNodeChildren.length; i++) {
      const child = clonedNodeChildren[i];
      if (child.tagName.toLowerCase() === "button") {
        child.addEventListener("click", (event) => {
          modalDetail(obj);
        });
      }
    }

    for (let i = 0; i < clonedNodeChildren.length; i++) {
      const child = clonedNodeChildren[i];
      if (child.id.toLowerCase() === "trash-icon") {
        child.addEventListener("click", (event) => {
          removeFromArray(obj.id, "tasks");
          firstLoad();
        });
      }
    }
  }

  originalNode.style.display = "none";

  if (array.length === 0) {
    nodeContainer.style.display = "grid";
    emptyPage();
  }
}

function displayProjects(array) {
  const nodeContainer = document.getElementById("projects-display");

  const children = nodeContainer.childNodes;
  for (let i = children.length - 1; i >= 1; i--) {
    nodeContainer.removeChild(children[i]);
  }

  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    const listItem = document.createElement("li");

    listItem.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    listItem.classList.add("project-content");
    listItem.id = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to lowercase and replace any spaces with hyphens to create an ID
    nodeContainer.appendChild(listItem); // Append the li element to the parent element

    listItem.addEventListener("click", function () {
      displayTasks(findProjectTitles(this.id));
      addedProjectName(this.id);
      deleteSelect();
      listItem.classList.add("selected");
    });
  }
}

function displayNotes(array) {
  const nodeContainer = document.getElementById("display");
  const originalNode = document.getElementById("original");
  const col1 = document.createElement("div");
  const col2 = document.createElement("div");
  const col3 = document.createElement("div");
  let colNumber = 1;
  nodeContainer.style.display = "grid";

  while (nodeContainer.lastChild && nodeContainer.lastChild !== originalNode) {
    nodeContainer.removeChild(nodeContainer.lastChild);
  }
  if (document.querySelector(".display-large")) {
    nodeContainer.classList.remove("display-large");
  }
  nodeContainer.classList.add("display-large-note");

  nodeContainer.appendChild(col1);
  col1.classList.add("col-1", "columns");
  nodeContainer.appendChild(col2);
  col2.classList.add("col-2", "columns");
  nodeContainer.appendChild(col3);
  col3.classList.add("col-3", "columns");

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    const noteContaier = document.createElement("div");
    const noteTitle = document.createElement("div");
    const noteDetail = document.createElement("div");
    const img = document.createElement("img");

    img.setAttribute("src", "../src/assets/images/x.svg");
    img.setAttribute("alt", "");
    img.classList.add("close-add");
    noteContaier.appendChild(img);

    noteTitle.textContent = obj.title;
    noteDetail.textContent = obj.description;

    noteContaier.classList.add("note-task");

    noteContaier.appendChild(noteTitle);
    noteContaier.appendChild(noteDetail);

    noteTitle.setAttribute("contenteditable", "true");
    noteDetail.setAttribute("contenteditable", "true");
    noteTitle.setAttribute("spellcheck", "false");
    noteDetail.setAttribute("spellcheck", "false");
    document.querySelector(`.col-${colNumber}`).appendChild(noteContaier);
    colNumber++;
    if (colNumber === 4) {
      colNumber = 1;
    }

    noteTitle.addEventListener("blur", (event) => {
      const newTitle = event.target.textContent;
      obj.title = newTitle;
      saveArrayToLocal(notesTasks(), "noteArray");
    });

    noteDetail.addEventListener("blur", (event) => {
      const newDescription = event.target.textContent;
      obj.description = newDescription;
      saveArrayToLocal(notesTasks(), "noteArray");
    });

    img.addEventListener("click", (event) => {
      removeFromArray(obj.id, "notes");
      displayNotes(notesTasks());
      saveArrayToLocal(notesTasks(), "noteArray");
    });
  }
  if (array.length === 0) {
    nodeContainer.style.display = "grid";
    emptyPage();
  }
}

function emptyPage() {
  const nodeContainer = document.getElementById("display");
  const emptyTitle = document.createElement("h1");
  emptyTitle.classList.add("empty-title");
  emptyTitle.textContent = "You have no more tasks!";
  nodeContainer.appendChild(emptyTitle);
}

export { displayTasks, displayProjects, displayNotes };
