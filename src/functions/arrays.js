import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import { render } from './render'
import menu from '../pages/menu'
import { defaultProjectName } from './tasks'
import home from '../pages/home'
export {addTask, findProjectTitles, findDateArray,
     displayAllProjectTitles, dateArray, nextWeek,
     addNote, noteArray, addProject, removeFromArray}
// Here are functions that add objects to arrays, store them and display them on page.

const dateArray = []
const noteArray = []
const projectArray = []

function addTask(obj) {
    dateArray.push(obj)
    addIdToTask()
}

function addNote(obj) {
    noteArray.push(obj)
}

function addProject(title) {
    projectArray.push(title)
    console.log(projectArray)
}

function removeFromArray(id) {
    let indexToRemove = dateArray.findIndex(obj => obj.id === id);
// If the object is found in the array, remove it
    if (indexToRemove !== -1) {
        dateArray.splice(indexToRemove, 1);
    }
    addIdToTask()
    render()
    menu()
    defaultProjectName()
    home()
    console.log(dateArray)
}

function addIdToTask() {
    dateArray.forEach(function(obj, index) {
            obj.id = index
    });
}

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
    dateArray.forEach(function(obj) {
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
      dateArray.forEach(function(obj) {
        const newobjArray = obj.date
        if(newobjArray === nextDay) {
            weekArray.push(obj)
        }    
    });
    });
    return weekArray
}
