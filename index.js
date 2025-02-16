const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./storage');

const defaultCategories = ["Technology", "Server", "Client", "Database"];

localStorage.setItem('categories', JSON.stringify(defaultCategories));


