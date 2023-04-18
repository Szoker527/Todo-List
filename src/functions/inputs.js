import { removeFromArray } from "./arrays"
import detailMod from "../pages/modalPages/detailModal"

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

function inputTitleNotes(cssClass, idName, parent, placeholder) {
    const inputTitle = document.createElement("textarea")
    inputTitle.classList.add(`${cssClass}`)
    parent.appendChild(inputTitle)
    inputTitle.setAttribute("placeholder", `${placeholder}`)
    inputTitle.setAttribute("name", `${idName}`)
    inputTitle.setAttribute("id", `${idName}`)
    inputTitle.setAttribute("required", "true")
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

function inputCheckBox(cssClass, parent, obj) {
    const inputCheck = document.createElement("input")
    inputCheck.classList.add(`${cssClass}`)
    parent.appendChild(inputCheck)
    inputCheck.setAttribute("type", "checkbox")
    inputCheck.addEventListener("click", function() {
        const checkBoxTask = document.querySelector(`#task-${obj.id}`)
        console.log(checkBoxTask)
        checkBoxTask.style.textDecoration = "line-through";
    })
}

function inputImgEdit(cssClass, parent, mySvg, obj) {
    const mySvgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mySvgElement.classList.add(`${cssClass}`)
    parent.appendChild(mySvgElement)
    mySvgElement.innerHTML = mySvg;
    mySvgElement.addEventListener("click", function() {
        console.log(obj.title)
    })
}

function inputImgTrash(cssClass, parent, mySvg, obj) {
    const mySvgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mySvgElement.classList.add(`${cssClass}`)
    parent.appendChild(mySvgElement)
    mySvgElement.innerHTML = mySvg;
    mySvgElement.addEventListener("click", function() {
        removeFromArray(obj.id)
    })
}

function inputDetail(parent, cssClass, name, obj) {
    const dispalyDetail = document.createElement("button")
    parent.appendChild(dispalyDetail)
    dispalyDetail.textContent = `${name}`
    dispalyDetail.setAttribute("class", `${cssClass}`)
    dispalyDetail.addEventListener("click", function() {
        detailMod(obj)
    })
}

function inputBtn(parent, cssClass, name) {
    const submitBtn = document.createElement("button")
    parent.appendChild(submitBtn)
    submitBtn.textContent = `${name}`
    submitBtn.setAttribute("class", `${cssClass}`)
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

export {inputTitle, inputType, inputBtn, inputRadio,
     inputTitleNotes, inputImgEdit, inputImgTrash,
     inputCheckBox, inputDetail }