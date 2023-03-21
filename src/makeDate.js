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
const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')

function addTask(obj, date) {
    if(!checkIfContainerExist(date)) {
        dateArray.push(new taskContainer(date, obj))
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

// console.log(checkIfContainerExist("15"))

addTask({whot:21}, "15")
addTask({whot:12}, "15")
