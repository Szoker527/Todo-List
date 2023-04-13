import { displayAllProjectTitles } from "./arrays"

function project() {
    const leftMenu = document.querySelector(".left-menu")
    const projectContainer = document.createElement("div")
    const projectTitle = document.createElement("div")


    projectContainer.classList.add("projects")
    projectTitle.classList.add("project-title")
    projectTitle.textContent = "Projects"
    
    projectContainer.appendChild(projectTitle)
    leftMenu.appendChild(projectContainer)

    const projectTopics = filterTopic()
    for (let i = 0; i < projectTopics.length; i++) {
        const element = projectTopics[i];
        const divTopic = document.createElement("div")

        divTopic.classList.add("project-topics")
        divTopic.textContent = `${element}`
        projectContainer.appendChild(divTopic)
    }
}

function filterTopic() {
    const arrayTopic = displayAllProjectTitles()
    
    const uniqueArray = arrayTopic.filter((item, index) => {
        return arrayTopic.indexOf(item) === index;
    });

    return uniqueArray
}


export default project
