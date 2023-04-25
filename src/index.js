import style from "./styles/styles.css"
import modalsAdd from "./styles/modalsAdd.css"
import modalsDetail from "./styles/modalsDetail.css"
import modalsEdit from "./styles/modalsEdit.css"
import { firstLoad } from "./functions/firstLoad"
import { render } from "./functions/render"
import { displayTasks, displayProjects } from "./functions/displayTasks"
import { nextWeek, todayTasks, findProjectTitles } from "./functions/arrays"
import modalAdd from "./pages/modalAdd"
import { addedProjectName } from "./functions/tasks"

firstLoad()
const home = document.getElementById("home");
const today = document.getElementById("today");
const week = document.getElementById("week");
const projects = document.querySelectorAll('.project-content');
const menuButton = document.querySelector(".menu-button");

home.addEventListener("click", function() {
  firstLoad()
})

today.addEventListener("click", function() {
  displayTasks(todayTasks())
})

week.addEventListener("click", function() {
  displayTasks(nextWeek())
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


// console.log(returnTaskArray())


// const nodeContainer = document.getElementById('display');
// const originalNode = document.getElementById('original');
// const clonedNode = originalNode.cloneNode(true);

// clonedNode.id = 'cloned';

// for (let i = 0; i < returnTaskArray().length; i++) {
//     const clonedNode = originalNode.cloneNode(true);
//     clonedNode.id = 'cloned-' + i;
//     clonedNode.querySelector('.task-title').textContent = returnTaskArray()[i].title;
//     clonedNode.querySelector('.task-date').textContent = returnTaskArray()[i].date;
//     nodeContainer.appendChild(clonedNode);
//   }

// console.log(nodeContainer)
// import { firstLoad, firstLoadModal } from "./functions/firstLoad"
// import { createTask } from "./functions/tasks"
// import { dateArray } from "./functions/arrays"

// // createTask("2014-02-03", "What to do", "wdadadadadaada", "low")
// // createTask("2014-01-04", "Play games", "xxxxxxxxxxxxxxxxx", "medium")
// // createTask("2014-03-05", "Report about dolphins", "xxxxxxxxxxxxxxxxx", "high")
// // createTask("2023-04-14", "Talk to Jarret", "xxxxxxxxxxxxxxxxx", "high")
// // createTask("2023-04-16", "Bring Boss coffe", "gggggg", "low")
// // createTask("2023-04-15", "Delete xxx files", "gggggg", "high")

// firstLoad()

// function updateStorage() {
//     localStorage.setItem("tasks", JSON.stringify(dateArray));
// }
  
// function restoreDefault() {
//     const defaultArray = [
//         {
//             project: "work",
//             title: "What to do",
//             description: "wdadadadadaada",
//             priority: "low",
//             date: "2014-02-03",
//             id: 0
//         },
//         {
//             project: "work",
//             title: "What to do",
//             description: "wdadadadadaada",
//             priority: "low",
//             date: "2014-02-03",
//             id: 1
//         },
//         {
//             project: "relax",
//             title: "Play games",
//             description: "xxxxxxxxxxxxxxxxx",
//             priority: "medium",
//             date: "2014-01-04",
//             id: 2
//         },
//         {
//             project: "work",
//             title: "Report about dolphins",
//             description: "xxxxxxxxxxxxxxxxx",
//             priority: "high",
//             date: "2014-03-05",
//             id: 3
//         },
//         {
//             project: "work",
//             title: "Talk to Jarret",
//             description: "xxxxxxxxxxxxxxxxx",
//             priority: "high",
//             date: "2023-04-14",
//             id: 4
//         },
//         {
//             project: "work",
//             title: "Bring Boss coffe",
//             description: "gggggg",
//             priority: "low",
//             date: "2023-04-16",
//             id: 5
//         },
//         {
//             project: "relax",
//             title: "Delete xxx files",
//             description: "gggggg",
//             priority: "high",
//             date: "2023-04-15",
//             id: 6
//         }
//     ]
//     localStorage.setItem("tasks", JSON.stringify(defaultArray));
// }

//   console.log(dateArray)
  

// export {updateStorage, restoreDefault}