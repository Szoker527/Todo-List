import { inputTitle, inputBtn } from "../../functions/inputs"

function toDoModal() {
    const displayMenu = document.querySelector(".display-menu-small")
    displayMenu.classList.add("display-menu-small-todo")
    inputTitle("title-input", displayMenu, "TITLE")
    inputBtn(displayMenu)
    console.log(displayMenu)
}

function inputs() {

}
export default toDoModal