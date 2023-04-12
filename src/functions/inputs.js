function inputTitle(css, parent, placeholder) {
    const inputTitle = document.createElement("input")
    inputTitle.classList.add(`${css}`)
    parent.appendChild(inputTitle)
    inputTitle.setAttribute("type", "text")
    inputTitle.setAttribute("placeholder", `${placeholder}`)
    inputTitle.setAttribute("name", "input-title")
    inputTitle.setAttribute("id", "input-title")

}

function inputDetails() {

}

function inputBtn() {

}

export {inputTitle, inputDetails, inputBtn}