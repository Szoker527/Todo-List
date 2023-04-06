export default addTask  
export {currentDate}
import {addTask, findDateArray, findTopic} from "./arrays"
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
    // newObj.topic = "not"
    console.log(result)
    addTask(newObj, result)
}

function currentDate() {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEEE, MMMM do, yyyy');
    return formattedDate;
}

createTask("2014 2 12", "My Work", "Routine", "Welcome to Prry", "is today the day of reckoning")
createTask("2014 5 12", "Top Game", "Routine", "ffffff", "aaaaaa")
createTask("2014 4 12", "Not Work", "Routine", "ffffff", "aaaaaa")
createTask("2014 2 12", "My Work", "Routine", "ffffff", "aaaaaa")

findTopic("My Work")
findDateArray("2014-02-12")