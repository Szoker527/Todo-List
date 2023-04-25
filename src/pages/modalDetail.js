function modalDetail(obj) {
    const modal = document.querySelector(".modal-detail")
    modal.style.display = "grid"
    const detailTitle = document.getElementById("display-title")
    detailTitle.textContent = obj.title
    console.log(obj)

}

export default modalDetail