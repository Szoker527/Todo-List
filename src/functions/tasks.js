export {createTask}
import {addTask, findProjectTitles} from "./arrays"
import format from 'date-fns/format'
// Here are tasks functions that create tasks objects

class tasks {
    constructor(project, title, description) {
        this.project = project,
        this.title = title,
        this.description = description
    }
}

function createTask(date, project, title, description) {
    const result = format(new Date(date), 'yyyy-MM-dd')
    const newObj = new tasks(project, title, description) 
    addTask(newObj, result)
}

