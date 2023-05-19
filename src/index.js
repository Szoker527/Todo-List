import style from "./styles/styles.css";
import modalsAdd from "./styles/modalsAdd.css";
import modalsDetail from "./styles/modalsDetail.css";
import modalsEdit from "./styles/modalsEdit.css";
import { firstLoad } from "./functions/firstLoad";
import { displayTasks, displayNotes } from "./functions/displayTasks";
import {
  nextWeek,
  todayTasks,
  findProjectTitles,
  notesTasks,
  clearLocalArray,
} from "./functions/arrays";
import modalAdd from "./pages/modalAdd";
import { addedProjectName } from "./functions/tasks";

firstLoad();
const home = document.getElementById("home");
const today = document.getElementById("today");
const week = document.getElementById("week");
const projects = document.querySelectorAll(".project-content");
const menuButton = document.querySelector(".menu-button");
const notes = document.getElementById("notes");
const resetBtn = document.querySelector(".reset-button");

home.addEventListener("click", () => {
  firstLoad();
});

today.addEventListener("click", () => {
  displayTasks(todayTasks());
  deleteSelect();
  today.classList.add("selected");
});

week.addEventListener("click", () => {
  displayTasks(nextWeek());
  deleteSelect();
  week.classList.add("selected");
});

notes.addEventListener("click", () => {
  displayNotes(notesTasks());
  deleteSelect();
  notes.classList.add("selected");
});

projects.forEach((projectName) => {
  projectName.addEventListener("click", () => {
    displayTasks(findProjectTitles(projectName.id));
    addedProjectName(projectName.id);
  });
});

menuButton.addEventListener("click", () => {
  modalAdd();
});

resetBtn.addEventListener("click", clearLocalArray);

// zamiast używać po kliknięciu w któregoś z tabów:
// deleteSelect()
// element.classList.add("selected");
// można używać funkcji poniżej
function changeSelection(tab) {
  deleteSelect();
  tab.classList.add("selected");
}

function deleteSelect() {
  const liElements = document.querySelectorAll("li");

  // zamiast pętli, można znaleźć element z klasą .selected i usunąć tą klasę
  for (let i = 0; i < liElements.length; i++) {
    liElements[i].classList.remove("selected");
  }
}

// zamiast tutaj eksportować, można bezpośrednio dodać export przed funkcją:
// export deleteSelect
export { deleteSelect };
