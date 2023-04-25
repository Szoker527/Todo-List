import { addTask, findProjectTitles, findDateArray, 
    displayAllProjectTitles, dateArray, nextWeek } from "./arrays"
import { inputType, inputBtn, inputImgTrash, inputImgEdit,
     inputCheckBox, inputDetail } from "./inputs"
import { format } from "date-fns";
import { addedProjectName } from "./tasks";
import trash from "../assets/images/trash.svg"
import edit from "../assets/images/edit.svg"

function displayTasks(array) {
    const nodeContainer = document.getElementById('display');
    const originalNode = document.getElementById('original');
    originalNode.style.display = "grid";

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
        // console.log(array[i].date)
        const formattedDate = format(date, 'MMM d');
        const clonedNode = originalNode.cloneNode(true);
        clonedNode.id = 'id-' + i;
        clonedNode.querySelector('.task-title').textContent = array[i].title;
        clonedNode.querySelector('.task-date').textContent = formattedDate;
        nodeContainer.appendChild(clonedNode);
    }
  
    originalNode.style.display = "none";
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
      console.log(`Clicked div with id: ${this.id}`);
    });

  }

}

export { displayTasks, displayProjects}