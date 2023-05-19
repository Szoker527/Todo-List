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
  // w swojej całej apce, dodaj sobie tą linię kodu, naciśnij F12 w przeglądarce i włącz konsolę
  // i zacznij klikać w przycisk dodawania TODO'sa
  // powinno Ci się to wyświetlać po parenaście razy co jest nieporządane
  console.log("test")
}

export { renderModal };
