// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       // console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("Error getting resource");
//       }
//     });
//     // https://jsonplaceholder.typicode.com/todos/
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("./todos.json")
//   .then((data) => {
//     console.log("promise1 resolved", data);
//     return getTodos("./todos2.json");
//   })
//   .then((data) => {
//     console.log("promise2 resolved", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected", err);
//   });

// fetch api

const getTodos = async () => {
  const response = await fetch("./todos.json");

  if(response.status !== 200){
    throw new Error("cannot fetch the data")
  }
  const data = await response.json();

  return data;
};

getTodos().then((data) => {
  console.log("resolved", data);
}).catch((err) =>{
console.log("rejected:", err.message);
})
// fetch("./todos.json").then((response) => {
// console.log("resolved", response);
// return response.json()
// }).then((data) =>{
// console.log(data);
// }).catch((err) =>{
// console.log("reject", err);
// })

//012 async await
