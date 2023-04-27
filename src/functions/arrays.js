import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import { id } from 'date-fns/locale'

// Here are functions that add objects to arrays and store them.
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

let projectArray = ["work", "relax"]

let noteArray = [
    {        
        id: 0,
        title: "Buy Groceries",
        description: "Pick up groceries from the supermarket: milk, bread, eggs, butter, cheese, vegetables and fruit.",
    },
    {        
        id: 1,
        title: "Finish Project",
        description: "Complete the coding project by the end of the week. Finish writing documentation and run a final test on the program.",
    },
    {        
        id: 2,
        title: "Call Mom",
        description: "Give mom a call to catch up on life. Ask her about her day and share some news about your recent activities."
    },
    {        
        id: 3,
        title: "Schedule Dentist Appointment",
        description: "Make an appointment to see the dentist for a check-up and cleaning. Check the calendar for available dates and times."
    },
    {        
        id: 4,
        title: "Plan Weekend Getaway",
        description: "Organize a weekend trip to the beach or mountains. Look up hotels or vacation rentals, make travel arrangements and plan activities."
    },
    {        
        id: 5,
        title: "Research New Phone",
        description: "Research and compare the latest smartphone models from different brands. Check out features, prices, and reviews before making a decision."
    },
    {        
        id: 6,
        title: "Clean House",
        description: "Set aside some time to clean and organize the house. Dust and vacuum the floors, tidy up the rooms, and take out the trash."
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
    addIdToTask(taskArray)
    saveArrayToLocal(taskArray, "taskArray")
    // localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function addNote(obj) {
    noteArray.push(obj)
    saveArrayToLocal(noteArray, "noteArray")
}

function addProject(title) {
    const newTitle = title.toLowerCase().replace(/\s+/g, "-");
    projectArray.push(newTitle)
    saveArrayToLocal(projectArray, "projectArray")
}

function removeFromArray(id, array) {
    let chosenArray;
    let localName;
    if (array === "tasks") {
        chosenArray = taskArray
        localName = "taskArray"
    }
    if (array === "notes") {
        chosenArray = noteArray
        localName = "noteArray"
    }
    let indexToRemove = chosenArray.findIndex(obj => obj.id === id);
    // If the object is found in the array, remove it
    if (indexToRemove !== -1) {
        chosenArray.splice(indexToRemove, 1);
    }
    addIdToTask(chosenArray)
    saveArrayToLocal(chosenArray, localName)
}


function addIdToTask(array) {
    array.forEach(function(obj, index) {
        obj.id = index
    });
}

function findProjectTitles(projectName) {
    const newstring = projectName.replace(/-/g, ' ')
    const newArray = [];
    taskArray.forEach(function(obj) {
        if(obj.project === newstring) {
            newArray.push(obj)
        }
        
    });
    return newArray
}

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

function updateArrays(array, name) {
    if (!array) {
        return
    }
    if(name === "task") {
        taskArray = array
    }
    if(name === "note") {
        noteArray = array
    }
    if(name === "project") {
        projectArray = array
    }
}

function saveArrayToLocal(array, name){
    const arrayToSave = JSON.stringify(array);
    localStorage.setItem(`${name}`, arrayToSave);
}

function returnLocalToArray(arrayName) {
    const myArrayAsString = localStorage.getItem(`${arrayName}`);
    const myArray = JSON.parse(myArrayAsString);
    return myArray
}

function clearLocalArray() {
    localStorage.clear();
    window.location.reload();
}

export {returnTaskArray, nextWeek, todayTasks,
     findProjectTitles, addTask, addProject,
     addNote, returnProjectArray, removeFromArray,
     notesTasks, updateArrays, returnLocalToArray,
     clearLocalArray}