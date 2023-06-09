function renderModal() {
  const main = document.querySelector(".main-small");
  const dispalyContainer = document.getElementById("display-modal");
  if (!dispalyContainer) {
    return;
  }
  while (dispalyContainer.firstChild) {
    dispalyContainer.removeChild(dispalyContainer.firstChild);
  }
  main.removeChild(dispalyContainer);
}

export { renderModal };
