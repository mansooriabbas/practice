// const para = document.querySelector("body > div:nth-child(1) > p:nth-child(2)")
// const error = document.querySelector(".error")

// console.log(para);
// console.log(error);

// const paras = document.querySelectorAll("p") //returns a nodelist that works as an array
// const errors = document.querySelectorAll(".error")
// paras.forEach((para, i) =>{
//     console.log(i, para);
// })

// console.log(errors);


// //get an element by ID
// const title = document.getElementById("page-title")
// console.log(title);
// //get elements by their class name
// const errors = document.getElementsByClassName("error") //returns a html collection, forEach does not work but bracketnotation works
// console.log(errors);
// //get lements by their tag name
const paras = document.getElementsByTagName("p")
console.log(paras[1]);
