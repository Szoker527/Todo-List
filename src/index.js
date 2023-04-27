import style from "./styles/styles.css"
import modalsAdd from "./styles/modalsAdd.css"
import modalsDetail from "./styles/modalsDetail.css"
import modalsEdit from "./styles/modalsEdit.css"
import { firstLoad } from "./functions/firstLoad"
import { displayTasks, displayNotes } from "./functions/displayTasks"
import { nextWeek, todayTasks, findProjectTitles,
   notesTasks, clearLocalArray } from "./functions/arrays"
import modalAdd from "./pages/modalAdd"
import { addedProjectName } from "./functions/tasks"

firstLoad()
const home = document.getElementById("home");
const today = document.getElementById("today");
const week = document.getElementById("week");
const projects = document.querySelectorAll('.project-content');
const menuButton = document.querySelector(".menu-button");
const notes = document.getElementById("notes");
const resetBtn = document.querySelector(".reset-button");
console.log(resetBtn)

home.addEventListener("click", function() {
  firstLoad()
})

today.addEventListener("click", function() {
  displayTasks(todayTasks())
  deleteSelect()
  today.classList.add("selected")
})

week.addEventListener("click", function() {
  displayTasks(nextWeek())
  deleteSelect()
  week.classList.add("selected")
})

notes.addEventListener("click", function() {
  displayNotes(notesTasks())
  deleteSelect()
  notes.classList.add("selected")
})

projects.forEach(projectName => {
  projectName.addEventListener('click', function() {
    displayTasks(findProjectTitles(projectName.id))
    addedProjectName(projectName.id)
    console.log(`Clicked div with id: ${projectName.id}`);
  });
});

menuButton.addEventListener("click", function() {
  modalAdd()
})

resetBtn.addEventListener("click", clearLocalArray);

function deleteSelect() {
  const liElements = document.querySelectorAll('li');

  for (let i = 0; i < liElements.length; i++) {
  liElements[i].classList.remove('selected');
  }
}

export {deleteSelect}