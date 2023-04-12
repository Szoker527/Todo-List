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

function inputBtn(parent) {
    const submitBtn = document.createElement("button")
    parent.appendChild(submitBtn)
    submitBtn.textContent = "Submit"
    submitBtn.setAttribute("type", "submit")
    submitBtn.setAttribute("id", "submit-button")
}

export {inputTitle, inputDetails, inputBtn}