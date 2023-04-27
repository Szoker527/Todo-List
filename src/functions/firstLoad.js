import { returnTaskArray, returnProjectArray } from "./arrays"
import { displayTasks, displayProjects } from "./displayTasks"
import { deleteSelect } from ".."


// When user opens website this will be the first thing that will be displayed.
function firstLoad() {
    // const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));
    // console.log(retrievedTasks)
    // setStorageArray(retrievedTasks)
    const home = document.getElementById("home")
    displayTasks(returnTaskArray())
    displayProjects(returnProjectArray())
    deleteSelect()
    home.classList.add("selected")
}

function firstLoadModal() {
    const toDoModal = document.getElementById("display-modal")
    toDoModal.style.display = "grid"
}

export {firstLoad, firstLoadModal}