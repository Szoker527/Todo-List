import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
export {addTask, findProjectTitles, findDateArray,
     displayAllProjectTitles, dateArray, nextWeek,
     addNote}
// Here are functions that add objects to arrays, store them and display them on page.

const dateArray = []
const noteArray = []
// class taskContainer {
//     constructor(date, obj) {
//         this.date = date,
//         this.tasks = [obj]
//     }
// }

// function addTask(obj, date) {
//     if(!checkIfContainerExist(date)) {
//         dateArray.push(new taskContainer(date, obj))
//         console.log(dateArray)
//         return
//     }
//     const containerObj = checkIfContainerExist(date);
//     containerObj.tasks.push(obj)
//     console.log(dateArray)
// }

    function addTask(obj) {
        dateArray.push(obj)
    }

    function addNote(obj) {
        noteArray.push(obj)
    }

// function checkIfContainerExist(date) {
//     let containerExists = false;
//     let containerObj;

//     dateArray.forEach(function(obj) {
//       if(obj.date === date) {
//         containerExists = true;
//         containerObj = obj;
//       }
//     });

//     if(containerExists === false) {
//         return containerExists;
//     } else {
//         return containerObj
//     }
// }

function findProjectTitles(projectName) {
    const newArray = [];
    dateArray.forEach(function(obj) {
            if(obj.project === projectName) {
                newArray.push(obj)
            }
       
    });
    return newArray
}

function findDateArray(date) {
    const newArray = [];
    dateArray.forEach(function(obj) {
        const newobjArray = obj.date
        if(newobjArray === date) {
                newArray.push(obj)
        }
       
    });
    return newArray
}

function displayAllProjectTitles() {
    const newArray = [];
    dateArray.forEach(function(obj) {
            newArray.push(obj.project)
    
    });
    return newArray
}

function nextWeek() {
    const today = new Date();
    const nextSevenDays = [...Array(7)].map((_, i) => addDays(today, i));
    const weekArray = [];
    nextSevenDays.forEach((date, i) => {
      const nextDay = `${format(date, 'yyyy-MM-dd')}`
      dateArray.forEach(function(obj) {
        const newobjArray = obj.date
        if(newobjArray === nextDay) {
            weekArray.push(obj)
        }    
    });
    });
    return weekArray
}
