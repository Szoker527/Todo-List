import format from "date-fns/format";
import addDays from "date-fns/addDays";
import { id } from "date-fns/locale";

// Here are functions that add objects to arrays and store them.


// Te zadania co tutaj są to tak zwane "mocki", czyli przykładowe dane.
// Wszystkie funkcje "mockowe" przeniósłbym do pliku mocks.js
// Stworzyłbym przykładowe zadanie poprzez funkcję:

function getExampleTasks() {
  return [
    {
      project: "work",
      title: "I need to find coffee",
      description: "wdadadadadaada",
      priority: "low",
      date: alwaysToday(),
      id: 0,
    },
    {
      project: "work",
      title: "What to do",
      description: "wdadadadadaada",
      priority: "low",
      date: threeDaysLater(),
      id: 1,
    },
    {
      project: "relax",
      title: "Play games",
      description: "xxxxxxxxxxxxxxxxx",
      priority: "medium",
      date: alwaysToday(),
      id: 2,
    },
    {
      project: "work",
      title: "Report about dolphins",
      description: "xxxxxxxxxxxxxxxxx",
      priority: "high",
      date: threeDaysLater(),
      id: 3,
    },
    {
      project: "work",
      title: "Talk to Jarret",
      description: "xxxxxxxxxxxxxxxxx",
      priority: "high",
      date: alwaysToday(),
      id: 4,
    },
    {
      project: "work",
      title: "Bring Boss coffee",
      description: "gggggg",
      priority: "low",
      date: threeDaysLater(),
      id: 5,
    },
    {
      project: "relax",
      title: "Delete xxx files",
      description: "gggggg",
      priority: "high",
      date: threeDaysLater(),
      id: 6,
    },
  ]
}

function getExampleNotes() {
  [
    {
      id: 0,
      title: "Buy Groceries",
      description:
        "Pick up groceries from the supermarket: milk, bread, eggs, butter, cheese, vegetables and fruit.",
    },
    {
      id: 1,
      title: "Finish Project",
      description:
        "Complete the coding project by the end of the week. Finish writing documentation and run a final test on the program.",
    },
    {
      id: 2,
      title: "Call Mom",
      description:
        "Give mom a call to catch up on life. Ask her about her day and share some news about your recent activities.",
    },
    {
      id: 3,
      title: "Schedule Dentist Appointment",
      description:
        "Make an appointment to see the dentist for a check-up and cleaning. Check the calendar for available dates and times.",
    },
    {
      id: 4,
      title: "Plan Weekend Getaway",
      description:
        "Organize a weekend trip to the beach or mountains. Look up hotels or vacation rentals, make travel arrangements and plan activities.",
    },
    {
      id: 5,
      title: "Research New Phone",
      description:
        "Research and compare the latest smartphone models from different brands. Check out features, prices, and reviews before making a decision.",
    },
    {
      id: 6,
      title: "Clean House",
      description:
        "Set aside some time to clean and organize the house. Dust and vacuum the floors, tidy up the rooms, and take out the trash.",
    },
  ];
}

// nie trzeba nazywać tablic jako "array"
let tasks = getExampleTasks();
let projects = ["work", "relax"];
let notes = getExampleNotes();

// getTasks
function returnTaskArray() {
  return tasks;
}

// getProjects
function returnProjectArray() {
  if (!projects) {
    return;
  }
  const uniqueNames = [...new Set(projects)];
  return uniqueNames;
}

function addTask(task) {
  tasks.push(task);
  addIdsToTasks(tasks);
  saveArrayToLocal(tasks, "taskArray");
  // localStorage.setItem("tasks", JSON.stringify(taskArray));
}

function addNote(note) {
  notes.push(note);
  saveArrayToLocal(notes, "noteArray");
}

function addProject(title) {
  const newTitle = title.toLowerCase().replace(/\s+/g, "-");
  projects.push(newTitle);
  saveArrayToLocal(projects, "projectArray");
}

// Zmieniłbym nazwę, bo na początku nie wiedziałęm co robi ta funkcja
// teraz z tą nazwą myślę, że jest bardziej zrozumiała
function removeItem(itemId, category) {
  let chosenArray;
  let localName;
  if (category === "tasks") {
    chosenArray = tasks;
    localName = "taskArray";
  }
  if (category === "notes") {
    chosenArray = notes;
    localName = "noteArray";
  }
  const indexToRemove = chosenArray.findIndex((obj) => obj.id === itemId);
  // If the object is found in the array, remove it
  if (indexToRemove !== -1) {
    chosenArray.splice(indexToRemove, 1);
  }
  addIdsToTasks(chosenArray);
  saveArrayToLocal(chosenArray, localName);
}

function addIdsToTasks(category) {
  category.forEach((item, index) => {
    item.id = index;
  });
}

function findProjectTitles(projectName) {
  const newstring = projectName.replace(/-/g, " ");
  const newArray = [];
  tasks.forEach((obj) => {
    if (obj.project === newstring) {
      newArray.push(obj);
    }
  });
  return newArray;
}

function displayAllProjectTitles() {
  tasks.forEach((obj) => {
    projects.push(obj.project);
  });
  return projects;
}

// taka nazwa i zamiast 7 podawać liczbę dni
function getTasksFromNextDays(days) {
  const today = new Date();
  const nextDays = [...Array(days)].map((_, i) => addDays(today, i));
  const weekArray = [];
  nextDays.forEach((date, i) => {
    const nextDay = `${format(date, "yyyy-MM-dd")}`;
    tasks.forEach((obj) => {
      const newobjArray = obj.date;
      if (newobjArray === nextDay) {
        weekArray.push(obj);
      }
    });
  });
  return weekArray;
}

function getTodayTasks() {
  const today = new Date();
  const todayFormatted = `${format(today, "yyyy-MM-dd")}`;
  const todayArray = tasks.filter((obj) => obj.date === todayFormatted);
  return todayArray;
}

function notesTasks() {
  return notes;
}

// Nazwa na getDatePlusDays(days) gdzie days jest liczbą stałą
// dzięki temu mozna jej uzyc nie tylko dla 3 dni w przód
// funkcję przerzcucić do innego pliku np. dates.js
function threeDaysLater() {
  const dateThreeDaysLater = addDays(new Date(), 3);
  const formattedDateThreeDaysLater = format(dateThreeDaysLater, "yyyy-MM-dd");
  return formattedDateThreeDaysLater;
}

// Nazwa na getTodayDate
// funkcję przerzcucić do innego pliku np. dates.js
function alwaysToday() {
  const today = new Date();
  const formattedToday = format(today, "yyyy-MM-dd");
  return formattedToday;
}

// 
function updateArrays(array, name) {
  if (!array) {
    return;
  }

  // nie ma sensu sprawdzać kolejnych ifów,
  // jeżeli do ktoregoś wcześniej wpadło
  if (name === "task") {
    tasks = array;
  } else if (name === "note") {
    notes = array;
  } else if (name === "project") {
    projects = array;
  }
}

// Nazwa na saveTodosByCategoryToStorage lub setTodosByCategoryToStorage
// nazwa parametrów 'todos', 'category'
function saveArrayToLocal(array, name) {
  const arrayToSave = JSON.stringify(array);
  localStorage.setItem(`${name}`, arrayToSave);
}

// Zmieniłbym nazwę funkcji na 'getTodosByCategoryToStorage'
// nazwa parametru to 'category'
function returnLocalToArray(arrayName) {
  const myArrayAsString = localStorage.getItem(`${arrayName}`);
  const myArray = JSON.parse(myArrayAsString);
  return myArray;
}

// Nazwa na clearTodosFromStorage
function clearLocalArray() {
  localStorage.clear();
  window.location.reload();
}

export {
  returnTaskArray,
  getTasksFromNextDays as nextWeek,
  getTodayTasks as todayTasks,
  findProjectTitles,
  addTask,
  addProject,
  addNote,
  returnProjectArray,
  removeItem as removeFromArray,
  notesTasks,
  updateArrays,
  returnLocalToArray,
  clearLocalArray,
  saveArrayToLocal,
};
