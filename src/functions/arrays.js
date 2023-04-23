// import format from 'date-fns/format'
// import addDays from 'date-fns/addDays'
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
        date: "2014-02-03",
        id: 0
    },
    {
        project: "work",
        title: "What to do",
        description: "wdadadadadaada",
        priority: "low",
        date: "2014-02-03",
        id: 0
    },
    {
        project: "work",
        title: "What to do",
        description: "wdadadadadaada",
        priority: "low",
        date: "2014-02-03",
        id: 1
    },
    {
        project: "relax",
        title: "Play games",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "medium",
        date: "2014-01-04",
        id: 2
    },
    {
        project: "work",
        title: "Report about dolphins",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "high",
        date: "2014-03-05",
        id: 3
    },
    {
        project: "work",
        title: "Talk to Jarret",
        description: "xxxxxxxxxxxxxxxxx",
        priority: "high",
        date: "2023-04-14",
        id: 4
    },
    {
        project: "work",
        title: "Bring Boss coffe",
        description: "gggggg",
        priority: "low",
        date: "2023-04-16",
        id: 5
    },
    {
        project: "relax",
        title: "Delete xxx files",
        description: "gggggg",
        priority: "high",
        date: "2023-04-15",
        id: 6
    }
]

const projectArray = []
const noteArray = []

function returnTaskArray() {
    return taskArray
}

// function addTask(obj) {
//     dateArray.push(obj)
//     addIdToTask()
//     localStorage.setItem("tasks", JSON.stringify(dateArray));
// }

// function addNote(obj) {
//     noteArray.push(obj)
// }

// function addProject(title) {
//     projectArray.push(title)
//     console.log(projectArray)
// }

// function removeFromArray(id) {
//     let indexToRemove = dateArray.findIndex(obj => obj.id === id);
//     // If the object is found in the array, remove it
//     if (indexToRemove !== -1) {
//         dateArray.splice(indexToRemove, 1);
//     }
//     addIdToTask()
//     render()
//     menu()
//     defaultProjectName()
//     home()
//     updateStorage()
// }

// function setStorageArray(storageArray) {
//     dateArray = storageArray
// }

// function addIdToTask() {
//     dateArray.forEach(function(obj, index) {
//         obj.id = index
//     });
// }

// function findProjectTitles(projectName) {
//     const newArray = [];
//     dateArray.forEach(function(obj) {
//         if(obj.project === projectName) {
//             newArray.push(obj)
//         }
        
//     });
//     return newArray
// }

// function findDateArray(date) {
//     const newArray = [];
//     dateArray.forEach(function(obj) {
//         const newobjArray = obj.date
//         if(newobjArray === date) {
//             newArray.push(obj)
//         }
        
//     });
//     return newArray
// }

// function displayAllProjectTitles() {
//     dateArray.forEach(function(obj) {
//         projectArray.push(obj.project)
//     });
//     return projectArray
// }

// function nextWeek() {
//     const today = new Date();
//     const nextSevenDays = [...Array(7)].map((_, i) => addDays(today, i));
//     const weekArray = [];
//     nextSevenDays.forEach((date, i) => {
//         const nextDay = `${format(date, 'yyyy-MM-dd')}`
//         dateArray.forEach(function(obj) {
//             const newobjArray = obj.date
//             if(newobjArray === nextDay) {
//                 weekArray.push(obj)
//             }    
//         });
//     });
//     return weekArray
// }

// export {addTask, findProjectTitles, findDateArray,
//      displayAllProjectTitles, dateArray, nextWeek,
//      addNote, noteArray, addProject, removeFromArray, setStorageArray}
export {returnTaskArray,}