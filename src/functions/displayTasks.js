import { findProjectTitles, removeFromArray, notesTasks } from "./arrays"
import { format } from "date-fns";
import { addedProjectName } from "./tasks";
import modalDetail from "../pages/modalDetail";
import modalEdit from "../pages/modalEdit";
import { firstLoad } from "./firstLoad";
import { deleteSelect } from "..";
let currentDisplay = "home"

function displayTasks(array) {
    const nodeContainer = document.getElementById('display');
    const originalNode = document.getElementById('original');
    originalNode.style.display = "grid";
    nodeContainer.style.display = "block"

    console.log(array.length === 0)
    
    if (document.querySelector(".display-large-note")) {
      nodeContainer.classList.remove("display-large-note")
      nodeContainer.classList.add("display-large")
    }
    
    if (!originalNode) {
      console.error("Element with id 'original' not found");
      return;
    }
  
    const clonedNode = originalNode.cloneNode(true);
    clonedNode.id = 'cloned';
    
    // Remove all child nodes except the original
    while (nodeContainer.lastChild && nodeContainer.lastChild !== originalNode) {
      nodeContainer.removeChild(nodeContainer.lastChild);
    }
    
    for (let i = 0; i < array.length; i++) {
      const date = new Date(array[i].date);
      const formattedDate = format(date, 'MMM d');
      const clonedNode = originalNode.cloneNode(true);
      clonedNode.id = i;
      clonedNode.classList.add(array[i].priority)
      clonedNode.querySelector('.task-title').textContent = array[i].title;
      clonedNode.querySelector('.task-date').textContent = formattedDate;
      nodeContainer.appendChild(clonedNode);
      const clonedNodeChildren = clonedNode.children;
      const obj = array[i]
      
      for (let i = 0; i < clonedNodeChildren.length; i++) {
          const child = clonedNodeChildren[i];
          if (child.id.toLowerCase() === 'edit-icon') {
            child.addEventListener('click', function(event) {
              modalEdit(obj)
            });
          }
        }
        
        for (let i = 0; i < clonedNodeChildren.length; i++) {
          const child = clonedNodeChildren[i];
          if (child.tagName.toLowerCase() === 'button') {
            child.addEventListener('click', function(event) {
              modalDetail(obj)
            });
          }
        }
        
        for (let i = 0; i < clonedNodeChildren.length; i++) {
          const child = clonedNodeChildren[i];
          if (child.id.toLowerCase() === 'trash-icon') {
            child.addEventListener('click', function(event) {
              removeFromArray(obj.id, "tasks")
              firstLoad()
            });
          }
        }
        
      }
      
      originalNode.style.display = "none";

      if (array.length === 0) {
        nodeContainer.style.display = "grid";
        emptyPage()
      }

    }
    
    
function displayProjects(array) {
  const nodeContainer = document.getElementById("projects-display")
  
  
  const children = nodeContainer.childNodes;
  for (let i = children.length - 1; i >= 1; i--) {
    nodeContainer.removeChild(children[i]);
  }
  
  for (let i = 0; i < array.length; i++) {
    const name = array[i];
    const listItem = document.createElement("li");
    
    listItem.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    listItem.classList.add("project-content")
    listItem.id = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to lowercase and replace any spaces with hyphens to create an ID
    nodeContainer.appendChild(listItem); // Append the li element to the parent element

    listItem.addEventListener('click', function() {
      displayTasks(findProjectTitles(this.id))
      addedProjectName(this.id)
      deleteSelect()
      listItem.classList.add("selected")
    });

  }
}

function displayNotes(array) {
  const nodeContainer = document.getElementById('display');
  const originalNode = document.getElementById('original');
  const col1 = document.createElement("div")
  const col2 = document.createElement("div")
  const col3 = document.createElement("div")
  let colNumber = 1
  nodeContainer.style.display = "grid"

  
  while (nodeContainer.lastChild && nodeContainer.lastChild !== originalNode) {
    nodeContainer.removeChild(nodeContainer.lastChild);
  }
  if (document.querySelector(".display-large")) {
    nodeContainer.classList.remove("display-large")
  }
  nodeContainer.classList.add("display-large-note")

  nodeContainer.appendChild(col1)
  col1.classList.add("col-1", "columns")
  nodeContainer.appendChild(col2)
  col2.classList.add("col-2", "columns")
  nodeContainer.appendChild(col3)
  col3.classList.add("col-3", "columns")

  
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    const noteContaier = document.createElement("div");
    const noteTitle = document.createElement("div")
    const noteDetail = document.createElement("div")
    const img = document.createElement("img");

    img.setAttribute("src", "../src/assets/images/x.svg");
    img.setAttribute("alt", "");
    img.classList.add("close-add");
    noteContaier.appendChild(img);

    noteTitle.textContent = obj.title
    noteDetail.textContent = obj.description

    noteContaier.classList.add("note-task")

    noteContaier.appendChild(noteTitle)
    noteContaier.appendChild(noteDetail)

    noteTitle.setAttribute("contenteditable", "true")
    noteDetail.setAttribute("contenteditable", "true")
    noteTitle.setAttribute("spellcheck", "false")
    noteDetail.setAttribute("spellcheck", "false")
    document.querySelector(`.col-${colNumber}`).appendChild(noteContaier)
    colNumber++
    if (colNumber === 4) {
      colNumber = 1
    }

    noteTitle.addEventListener("blur", (event) => {
      const newTitle = event.target.textContent;
      obj.title = newTitle;
    });

    noteDetail.addEventListener("blur", (event) => {
      const newDescription = event.target.textContent;
      obj.description = newDescription;
    });

    img.addEventListener('click', function(event) {
      removeFromArray(obj.id, "notes")
      displayNotes(notesTasks()) 
    });

  }
  if (array.length === 0) {
    nodeContainer.style.display = "grid";
    emptyPage()
  }
}

function emptyPage() {
  const nodeContainer = document.getElementById('display');
  const emptyTitle = document.createElement("h1")
  emptyTitle.classList.add("empty-title")
  emptyTitle.textContent = "You have no more tasks!"
  nodeContainer.appendChild(emptyTitle)
}


export { displayTasks, displayProjects, displayNotes}