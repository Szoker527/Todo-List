

function render() {
    const display = document.getElementById("display");
    const firstNode = display.firstChild;
  
     while (display.lastChild !== firstNode) {
      display.removeChild(display.lastChild);
    }
    const project = document.getElementById("project-display");
    const children = project.childNodes;
    for (let i = children.length - 1; i >= 2; i--) {
      project.removeChild(children[i]);
    }
}

function renderModal() {
  const main = document.querySelector(".main-small")
  const dispalyContainer = document.getElementById("display-modal")
  console.log(main)
  if (!dispalyContainer) {
    return
  }
  while (dispalyContainer.firstChild) {
    dispalyContainer.removeChild(dispalyContainer.firstChild);
    }
    main.removeChild(dispalyContainer)
}

function renderForm() {
  const formContainer = document.querySelector("#myForm")
  const menuContainer = document.querySelector(".main-small")
  while (formContainer.firstChild) {
    formContainer.removeChild(formContainer.firstChild);
  }
  menuContainer.removeChild(formContainer)
  const newForm = document.createElement("form")
  newForm.classList.add("display-menu-small")
  newForm.setAttribute('id', 'myForm');
  menuContainer.appendChild(newForm)
  console.log(newForm)
}

export {render, renderModal, renderForm}