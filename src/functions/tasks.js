export {createTask}
import {addTask} from "./arrays"
import format from 'date-fns/format'
// Here are tasks functions that create tasks objects

class tasks {
    constructor(project, title, description, priority) {
        this.project = project,
        this.title = title,
        this.description = description,
        this.priority = priority
    }
}

function createTask(date, project, title, description, priority) {
    const result = format(new Date(date), 'yyyy-MM-dd')
    const newObj = new tasks(project, title, description, priority) 
    addTask(newObj, result)
}

