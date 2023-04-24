// import home from "../pages/home"
// import menu from "../pages/menu"
// import toDoModal from "../pages/modalPages/toDoModal"
import { returnTaskArray } from "./arrays"
import displayTasks from "./displayTasks"

// When user opens website this will be the first thing that will be displayed.

function firstLoad() {
    // const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));
    // console.log(retrievedTasks)
    // setStorageArray(retrievedTasks)
    // home()
    // menu()
    displayTasks(returnTaskArray())
}

function firstLoadModal() {
    const toDoModal = document.getElementById("display-modal")
    toDoModal.style.display = "grid"
}

export {firstLoad, firstLoadModal}