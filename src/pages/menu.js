
function menu() {
    const today = document.createElement("div")
    const upcoming = document.createElement("div")
    const leftMenu = document.querySelector(".left-menu")

    today.textContent = "TODAY"
    upcoming.textContent = "UPCOMING"

    leftMenu.appendChild(today)
    leftMenu.appendChild(upcoming)
}

export default menu