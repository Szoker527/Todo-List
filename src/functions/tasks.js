// nie uzywane importy trzeba wyrzucić
import {
  addTask,
  findProjectTitles,
  findDateArray,
  displayAllProjectTitles,
  dateArray,
  nextWeek,
  addNote,
  addProject,
} from "./arrays";
// Here are tasks functions that create tasks objects

let currentProjectName = "work";

// nazwy klas zawsze zaczynaj z dużej litery
// w tym przypadku to jest pojedyńczy obiekt, więc zamiast Tasks jest to Task
class Task {
  constructor(project, title, description, priority, date) {
    // okrągłe nazwiasy nie są potrzebna
      this.project = project;
      this.title = title;
      this.description = description;
      this.priority = priority;
      this.date = date;
  }
}

class Note {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

function createTask(date, title, description, priority) {
  // nie trzeba tworzyć nowego obiektu, funkcja toLowerCase tworzy nowy obiekt samoistnie
  // więc można tego użyć tak jak tu podałem
  const task = new Task(
    currentProjectName.toLowerCase(),
    title,
    description,
    priority,
    date
  );
  addTask(task);
  getTasksFromNextDays(7);
}

function createNotes(title, description) {
  const newNote = new Note(title, description);
  addNote(newNote);
}

function createProject(title) {
  addProject(title);
}

function addedProjectName(name) {
  currentProjectName = name;
}

export { createTask, createNotes, createProject, addedProjectName };
