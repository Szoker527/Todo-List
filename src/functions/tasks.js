export {createTask}
import {addTask} from "./arrays"
import format from 'date-fns/format'
// Here are tasks functions that create tasks objects

class tasks {
    constructor(mainTopic, subTopic, title, description) {
        this._mainTopic = mainTopic,
        this.subTopic = subTopic,
        this.title = title,
        this.description = description
    }

    set topic(topic) {
        this._mainTopic = topic;
    }
}

function createTask(date, mainTopic, subTopic, title, description) {
    const result = format(new Date(date), 'yyyy-MM-dd')
    const newObj = new tasks(mainTopic, subTopic, title, description) 
    addTask(newObj, result)
}

