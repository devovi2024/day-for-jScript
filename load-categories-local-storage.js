const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./storage');

const defaultCategories = ["Technology", "Server", "Client", "Database"];
localStorage.setItem('categories', JSON.stringify(defaultCategories));

const data = JSON.parse(localStorage.getItem('categories'));
data.push("Networking");
console.log(data);

localStorage.setItem('categories', JSON.stringify(data));

console.log(data);
