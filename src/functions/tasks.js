import {addTask, findProjectTitles, findDateArray, 
    displayAllProjectTitles, dateArray, nextWeek,
    addNote, addProject } from "./arrays"
    // Here are tasks functions that create tasks objects
    
    let currentProjectName = "work";
    
    class tasks {
        constructor(project, title, description, priority, date) {
            this.project = project,
            this.title = title,
            this.description = description,
            this.priority = priority,
            this.date = date
        }
    }
    
    class notes {
        constructor(title, description) {
            this.title = title,
        this.description = description
    }
    }

function createTask(date, title, description, priority) {
    const projectNameObj = currentProjectName
    const newObj = new tasks(projectNameObj.toLowerCase(), title, description, priority, date) 
    addTask(newObj)
    nextWeek()
}

function createNotes(title, description) {
    const newNote = new notes(title, description)
    addNote(newNote)
}

function createProject(title) {
    addProject(title)
}

function addedProjectName(name) {
    currentProjectName = name;
}


export {createTask, createNotes, createProject,
      addedProjectName}