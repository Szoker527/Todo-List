import { inputTitle } from "../../functions/inputs"

function toDoModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.classList.add("display-menu-small-todo")
    inputTitle("text-input", displayMenu, "TITLE")

    console.log(displayMenu)
}

function inputs() {

}
export default toDoModal