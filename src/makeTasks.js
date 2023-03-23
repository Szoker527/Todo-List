export default addTask  
import {addTask} from "./containers"
import format from 'date-fns/format'


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
    newObj.topic = "not"
    addTask(newObj, result)
}

createTask("2014 2 12", "My Work", "Routine", "Welcome to Prry", "is today the day of reckoning")
createTask("2014 2 12", "My Work", "Routine", "ffffff", "aaaaaa")