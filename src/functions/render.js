function render() {
    const menuContainer = document.querySelector(".display-menu")
    while (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild);
      }
}

export default render