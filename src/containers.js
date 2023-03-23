import format from 'date-fns/format'
export {addTask}

const dateArray = [{date: "21"},{date: "22"},{date:"17"}]


class taskContainer {
    constructor(date, obj) {
        this.date = date,
        this.tasks = [obj]
    }
    
    addToContainer() {
        
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

function removeObj() {

}

function addObj() {
    
}

