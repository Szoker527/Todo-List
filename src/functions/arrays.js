import format from 'date-fns/format'
export {addTask, findTopic, findDateArray, displayAllTopics}
// Here are functions that add objects to arrays, store them and display them on page.

const dateArray = []

class taskContainer {
    constructor(date, obj) {
        this.date = date,
        this.tasks = [obj]
    }
}

function addTask(obj, date) {
    if(!checkIfContainerExist(date)) {
        dateArray.push(new taskContainer(date, obj))
        console.log(dateArray)
        return
    }
    const containerObj = checkIfContainerExist(date);
    containerObj.tasks.push(obj)
    console.log(dateArray)
}

function checkIfContainerExist(date) {
    let containerExists = false;
    let containerObj;

    dateArray.forEach(function(obj) {
      if(obj.date === date) {
        containerExists = true;
        containerObj = obj;
      }
    });

    if(containerExists === false) {
        return containerExists;
    } else {
        return containerObj
    }
}

function findTopic(topic) {
    const newArray = [];
    dateArray.forEach(function(obj) {
        const newobjArray = obj.tasks
        for (let i = 0; i < newobjArray.length; i++) {
            const newobj = newobjArray[i]
            if(newobj._mainTopic === topic) {
                newArray.push(newobj)
            }
        }
       
    });
    console.log(newArray)
}

function findDateArray(date) {
    const newArray = [];
    dateArray.forEach(function(obj) {
        const newobjArray = obj.date
        if(newobjArray === date) {
                newArray.push(obj.tasks)
        }
       
    });
    console.log(newArray)
}

function displayAllTopics() {
    const newArray = [];
    dateArray.forEach(function(obj) {
        const newobjArray = obj.tasks
        for (let i = 0; i < newobjArray.length; i++) {
            const newobj = newobjArray[i]
            newArray.push(newobj._mainTopic)
        }
       
    });
    return newArray
}
