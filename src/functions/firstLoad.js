import home from "../pages/home"
import menu from "../pages/menu"
import toDoModal from "../pages/modalPages/toDoModal"
function firstLoad() {
    home()
    menu()
}

function firstLoadModal() {
    toDoModal()
}

export {firstLoad, firstLoadModal}