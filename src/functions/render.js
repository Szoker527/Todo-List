function render() {
    const menuContainer = document.querySelector(".display-menu")
    while (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild);
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

export {render, renderModal}