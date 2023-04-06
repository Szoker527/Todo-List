function render() {
    const menuContainer = document.querySelector(".menu")
    while (menuContainer.firstChild) {
        menuContainer.removeChild(menuContainer.firstChild);
      }
}

export default render