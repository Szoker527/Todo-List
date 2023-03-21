export default addTask  
import {addTask} from "./makeDate"
import format from 'date-fns/format'


class tasks {
    constructor(title, description, ) {
        this.title = title,
        this.description = description
    }
}

function createTask(date, title, des) {
    maybeArray.push(new tasks(date, title, des))
    console.log(maybeArray)
}

const maybeArray = []

const whot = new tasks("Hello there")

function what () {
    console.log("what")
}
