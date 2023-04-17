function inputTitle(cssClass, idName, parent, placeholder) {
    const inputTitle = document.createElement("input")
    inputTitle.classList.add(`${cssClass}`)
    parent.appendChild(inputTitle)
    inputTitle.setAttribute("type", "text")
    inputTitle.setAttribute("placeholder", `${placeholder}`)
    inputTitle.setAttribute("name", `${idName}`)
    inputTitle.setAttribute("id", `${idName}`)
    inputTitle.setAttribute("required", "true")

}

function inputTitleNotes(cssClass, idName, parent, placeholder, rows, columns) {
    const inputTitle = document.createElement("textarea")
    inputTitle.classList.add(`${cssClass}`)
    parent.appendChild(inputTitle)
    inputTitle.setAttribute("placeholder", `${placeholder}`)
    inputTitle.setAttribute("name", `${idName}`)
    inputTitle.setAttribute("id", `${idName}`)
    inputTitle.setAttribute("rows", `${rows}`)
    inputTitle.setAttribute("cols", `${columns}`)
    inputTitle.setAttribute("required", "true")
    inputTitle.setAttribute("contenteditable", "true")
}

function inputType(cssClass, idName, parent, type) {
    const inputTitle = document.createElement("input")
    inputTitle.classList.add(`${cssClass}`)
    parent.appendChild(inputTitle)
    inputTitle.setAttribute("type", `${type}`)
    inputTitle.setAttribute("name", `${idName}`)
    inputTitle.setAttribute("id", `${idName}`)
    inputTitle.setAttribute("required", "true")
}

function inputBtn(parent, cssClass, name) {
    const submitBtn = document.createElement("button")
    parent.appendChild(submitBtn)
    submitBtn.textContent = `${name}`
    submitBtn.setAttribute("class", `${cssClass}`)
    submitBtn.setAttribute("type", "submit")
    submitBtn.setAttribute("id", "submit-button")
}

function inputRadio(parent, idName, labelText, radioValue) {
    const radioBtn = document.createElement("input")
    const radioLabel = document.createElement("label")
    parent.appendChild(radioBtn)
    parent.appendChild(radioLabel)
    radioLabel.textContent = labelText
    radioLabel.setAttribute("class", "radio-button")
    radioLabel.setAttribute("for", `${idName}`)
    radioBtn.setAttribute("type", "radio")
    radioBtn.setAttribute("id", `${idName}`)
    radioBtn.setAttribute("name", "priority")
    radioBtn.setAttribute("value", `${radioValue}`)
}

export {inputTitle, inputType, inputBtn, inputRadio, inputTitleNotes}