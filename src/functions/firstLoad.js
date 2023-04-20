import home from "../pages/home"
import menu from "../pages/menu"
import toDoModal from "../pages/modalPages/toDoModal"
import { setStorageArray, dateArray } from "./arrays"

function firstLoad() {
    const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(retrievedTasks)
    setStorageArray(retrievedTasks)
    home()
    menu()
}

function firstLoadModal() {
    toDoModal()
}

export {firstLoad, firstLoadModal}