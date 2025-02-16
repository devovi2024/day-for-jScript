const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./storage');

// data save localStorage
function saveLocalStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
};


// Data Load localStorage
function loadFromLocalStorage(key){
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

// Task And Categories Storage Keys 
const TasksKey = "tasks";
const CategoriesKey = "categories";

let tasks = loadFromLocalStorage(TasksKey);
let categories = loadFromLocalStorage(CategoriesKey);


// add new task 
function addTask(task) {
    tasks.push(task);
    saveLocalStorage(TasksKey, tasks);
};

// add categories 
function addCategory(category){
    categories.push(category);
    saveLocalStorage(CategoriesKey, categories);
};

addTask({id:1, name:'Ovi', category:'Person', completed:'False'});
addCategory({id: 1, name: 'Work'});
console.log("Tasks: ", loadFromLocalStorage(TasksKey));
console.log("Categories: ", loadFromLocalStorage(CategoriesKey));