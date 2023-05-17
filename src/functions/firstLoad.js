import {
  returnTaskArray,
  returnProjectArray,
  updateArrays,
  returnLocalToArray,
} from "./arrays";
import { displayTasks, displayProjects } from "./displayTasks";
import { deleteSelect } from "..";

// When user opens website this will be the first thing that will be displayed.
function firstLoad() {
  const home = document.getElementById("home");
  updateArrays(returnLocalToArray("taskArray"), "task");
  updateArrays(returnLocalToArray("noteArray"), "note");
  updateArrays(returnLocalToArray("projectArray"), "project");
  displayTasks(returnTaskArray());
  displayProjects(returnProjectArray());
  deleteSelect();
  home.classList.add("selected");
}

function firstLoadModal() {
  const toDoModal = document.getElementById("display-modal");
  toDoModal.style.display = "grid";
}

export { firstLoad, firstLoadModal };
