import home from "./pages/home"
import todayPage from "./pages/today"
import Week from "./pages/week"
import notes from "./pages/notes"
import projects from "./pages/projectPage"
import { firstLoad, firstLoadModal } from "./functions/firstLoad"
import {render, renderModal, renderForm} from "./functions/render"
import modalPage from "./pages/modal"
import projectModal from "./pages/modalPages/projectModal"
import style from "./styles/style.css"
import { createTask } from "./functions/tasks"
import project from "./functions/projects"
import menu from "./pages/menu"

createTask("2014-02-03", "What to do", "wdadadadadaada", "low")
createTask("2014-01-04", "Play games", "xxxxxxxxxxxxxxxxx", "medium")
createTask("2014-03-05", "dsdsds", "xxxxxxxxxxxxxxxxx", "high")
createTask("2023-04-14", "dsdsds", "xxxxxxxxxxxxxxxxx", "high")
createTask("2023-04-16", "xxxxxx", "gggggg", "low")
createTask("2023-04-15", "xxxxxx", "gggggg", "low")
firstLoad()

