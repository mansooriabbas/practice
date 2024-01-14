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



