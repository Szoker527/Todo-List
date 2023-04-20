function render() {
    const menuContainer = document.querySelector(".display-menu")
    const leftMenuContainer = document.querySelector(".left-menu")
    while (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild);
      }
    while (leftMenuContainer.firstChild) {
      leftMenuContainer.removeChild(leftMenuContainer.firstChild);
    }
}

function renderModal() {
  const body = document.querySelector("body")
  const menuContainer = document.querySelector(".modal")
  if (!menuContainer) {
    return
  }
  while (menuContainer.firstChild) {
      menuContainer.removeChild(menuContainer.firstChild);
    }
    body.removeChild(menuContainer)
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