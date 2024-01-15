localStorage.setItem("name", "Tony")
localStorage.setItem("age", 50)

let name = localStorage.getItem("name")
let age = localStorage.getItem("age")

console.log(name);
//update the localstorage

localStorage.setItem("name", "Michael")
localStorage.age = 35
name = localStorage.getItem("name")
age = localStorage.getItem("age")
console.log(name, age);

//deleting data from local storage

// localStorage.removeItem("name")
// localStorage.removeItem("age")
localStorage.clear()
name = localStorage.getItem("name")
age = localStorage.getItem("age")
console.log(name, age);