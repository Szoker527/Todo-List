import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
// import { render } from './render'
// import menu from '../pages/menu'
// import { defaultProjectName } from './tasks'
// import home from '../pages/home'
// import {updateStorage} from '..'

// Here are functions that add objects to arrays, store them and display them on page.
let taskArray = [
    {
        project: "work",
        title: "What to do",
        description: "wdadadadadaada",
        priority: "low",
        date: alwaysToday(),
        id: 0
    },
    {
        project: "work",
        title: "What to do",
        description: "wdadadadadaada",
        priority: "low",
        date: threeDaysLater(),
        id: 1
    },
    {
        project: "relax",
        title: "Play games",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "medium",
        date: alwaysToday(),
        id: 2
    },
    {
        project: "work",
        title: "Report about dolphins",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "high",
        date: threeDaysLater(),
        id: 3
    },
    {
        project: "work",
        title: "Talk to Jarret",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "high",
        date: alwaysToday(),
        id: 4
    },
    {
        project: "work",
        title: "Bring Boss coffe",
        description: "gggggg",
        priority: "low",
        date: threeDaysLater(),
        id: 5
    },
    {
        project: "relax",
        title: "Delete xxx files",
        description: "gggggg",
        priority: "high",
        date: threeDaysLater(),
        id: 6
    }
]

const projectArray = ["work", "relax"]

const noteArray = [
    {        
        title: "Delete xxx files",
        description: "ggggggssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    },
    {        
        title: "daaaaaaaaaasdas",
        description: "xxxxxx"
    },
    {        
        title: "tatata",
        description: "bbbbbb"
    },
    {        
        title: "cxzczxczx",
        description: "dasdasdsssssssssssssssssssssssssssssssssssssssss"
    }
]

function returnTaskArray() {
    return taskArray
}

function returnProjectArray() {
    if(!projectArray) {
        return
    }
    const uniqueNames = [...new Set(projectArray)];
    return uniqueNames;
}

function addTask(obj) {
    taskArray.push(obj)
    addIdToTask()
    // localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function addNote(obj) {
    noteArray.push(obj)
}

function addProject(title) {
    const newTitle = title.toLowerCase().replace(/\s+/g, "-");
    projectArray.push(newTitle)
    console.log(projectArray)
}

function removeFromArray(id) {

    let indexToRemove = taskArray.findIndex(obj => obj.id === id);
    console.log(id)
    // If the object is found in the array, remove it
    if (indexToRemove !== -1) {
        taskArray.splice(indexToRemove, 1);
    }
    addIdToTask()
    console.log(taskArray)
}

// function setStorageArray(storageArray) {
//     taskArray = storageArray
// }

function addIdToTask() {
    taskArray.forEach(function(obj, index) {
        obj.id = index
    });
}

function findProjectTitles(projectName) {
    const newstring = projectName.replace(/-/g, ' ')
    console.log(newstring)
    const newArray = [];
    taskArray.forEach(function(obj) {
        if(obj.project === newstring) {
            newArray.push(obj)
        }
        
    });
    return newArray
}

// function findtaskArray(date) {
//     const newArray = [];
//     taskArray.forEach(function(obj) {
//         const newobjArray = obj.date
//         if(newobjArray === date) {
//             newArray.push(obj)
//         }
        
//     });
//     return newArray
// }

function displayAllProjectTitles() {
    taskArray.forEach(function(obj) {
        projectArray.push(obj.project)
    });
    return projectArray
}

function nextWeek() {
    const today = new Date();
    const nextSevenDays = [...Array(7)].map((_, i) => addDays(today, i));
    const weekArray = [];
    nextSevenDays.forEach((date, i) => {
        const nextDay = `${format(date, 'yyyy-MM-dd')}`
        taskArray.forEach(function(obj) {
            const newobjArray = obj.date
            if(newobjArray === nextDay) {
                weekArray.push(obj)
            }    
        });
    });
    return weekArray
}

function todayTasks() {
    const today = new Date();
    const todayFormatted = `${format(today, 'yyyy-MM-dd')}`
    const todayArray = taskArray.filter((obj) => obj.date === todayFormatted);
    return todayArray;
  }

function notesTasks() {
    return noteArray
}


function threeDaysLater() {
    const dateThreeDaysLater = addDays(new Date(), 3);
    const formattedDateThreeDaysLater = format(dateThreeDaysLater, 'yyyy-MM-dd');
    return formattedDateThreeDaysLater
}

function alwaysToday() {
    const today = new Date();
    const formattedToday = format(today, 'yyyy-MM-dd');
    return formattedToday
}

// export {addTask, findProjectTitles, findtaskArray,
//      displayAllProjectTitles, taskArray, nextWeek,
//      addNote, noteArray, addProject, removeFromArray, setStorageArray}
export {returnTaskArray, nextWeek, todayTasks,
     findProjectTitles, addTask, addProject,
     addNote, returnProjectArray, removeFromArray,
     notesTasks}