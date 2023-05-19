import { displayAllProjectTitles as getAllProjectTitles } from "./arrays";

// po nazwie nie wiadomo co ta funkcja robi
// ale domyslam się, że wyswietla projekty w lewym menu
function displayProjectsInMenu() {
  const leftMenu = document.querySelector(".left-menu");
  const projectContainer = document.createElement("div");
  const projectTitle = document.createElement("span");

  projectContainer.classList.add("projects");
  projectTitle.classList.add("project-title");
  projectTitle.textContent = "Projects";

  projectContainer.appendChild(projectTitle);
  leftMenu.appendChild(projectContainer);

  const projectTopics = filterTopics();

  for (let i = 0; i < projectTopics.length; i++) {
    const elementText = projectTopics[i];
    const divTopic = document.createElement("li");
    const newElementText =
      elementText.slice(0, 1).toUpperCase() + elementText.slice(1);
    divTopic.classList.add("project-topics");
    divTopic.setAttribute("id", `${elementText.toLowerCase()}`);
    divTopic.textContent = `${newElementText}`;
    projectContainer.appendChild(divTopic);
  }
}

function filterTopics() {
  return getAllProjectTitles().filter(
    (item, index) => topics.indexOf(item) === index
  );
}

export default displayProjectsInMenu;
