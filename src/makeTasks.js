export default addTask  
import {addTask} from "./makeDate"
import format from 'date-fns/format'


class tasks {
    constructor(title, description) {
        this.title = title,
        this.description = description
    }
}

function createTask(year, month, day, title, description) {
    const result = format(new Date(year, month, day), 'MM/dd/yyyy')
    const newObj = new tasks(title, description) 
    addTask(newObj, result)
}

createTask("2012", "12", "05", "Welcome to Pyry", "is today the day of reckoning")
