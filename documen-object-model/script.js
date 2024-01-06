// // // const para = document.querySelector("body > div:nth-child(1) > p:nth-child(2)")
// // // const error = document.querySelector(".error")

// // // console.log(para);
// // // console.log(error);

// // // const paras = document.querySelectorAll("p") //returns a nodelist that works as an array
// // // const errors = document.querySelectorAll(".error")
// // // paras.forEach((para, i) =>{
// // //     console.log(i, para);
// // // })

// // // console.log(errors);

// // // //get an element by ID
// // // const title = document.getElementById("page-title")
// // // console.log(title);
// // // //get elements by their class name
// // // const errors = document.getElementsByClassName("error") //returns a html collection, forEach does not work but bracketnotation works
// // // console.log(errors);
// // // //get lements by their tag name
// // // const paras = document.getElementsByTagName("p")
// // // console.log(paras[1]);

// // // const para = document.querySelector("p");

// // // // console.log(para.innerText);

// // // // para.innerText = "Hello Boss"

// // // const paras = document.querySelectorAll("p");

// // // // paras.forEach((para) => {
// // // //     para.innerText = "hello boss"
// // // // })

// // // const content = document.querySelector(".content");

// // // // console.log(content.innerHTML);

// // // // content.innerHTML += "<h2>This is a new H2 </h2>"

// // // const people = ["Charlie", "Steve", "Deborah"];

// // // people.forEach((person) => {
// // //   content.innerHTML += `<p>${person}</p>`;
// // // });
// // const link = document.querySelector("a")

// // console.log(link);
// // console.log(link.getAttribute("href"));
// // link.setAttribute("href", "https://www.thenetninja.co.uk")
// // link.innerText = "The net ninja website"

// // const msg = document.querySelector("p")

// // console.log(msg.getAttribute("class"));

// // msg.setAttribute("class", "success")
// // msg.setAttribute("style", "color: blue")
// // // msg.setAttribute("style", "background: red")
// // const title = document.querySelector("h1")
// // title.style.textAlign = "center"
// // title.style.background = "gray"
// // title.style.color = "white"
// // title.style.fontSize = "40px"
// // title.style.margin = "200px"
// // title.style.margin = ""
// // console.log(title.style);

// const content = document.querySelector("p")
// // console.log(content.classList);
// content.classList.add("error")
// content.classList.remove("error")
// content.classList.add("success")

// const paras = document.querySelectorAll("p")

// paras.forEach((para)=>{
//     if(para.textContent.includes("error")){
//         para.classList = "error"
//     };
//     if(para.innerText.includes("success")){
//         para.classList = "success"
//     };
// })

// const title = document.querySelector(".title")

// title.classList.toggle("success")
// title.classList.toggle("success")
// title.classList.toggle("success")

// const article = document.querySelector("article");

// console.log(article.children);

// const articleArr = Array.from(article.children);
// console.log(articleArr);

// articleArr.forEach((art) => {
//     art.classList.add("success")
// })

// const title = document.querySelector("h2")

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);
// console.log(title.nextElementSibling.parentElement.children);

// const button = document.querySelector("button")

// button.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("you clicked the button");
// })

// const button = document.querySelector("button");
// const ul = document.querySelector("ul");
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   ul.append(li);
//   ul.prepend(li);
//   li.textContent = "something new to do";
// });

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     // item.style = "display: none";
//     // e.target.style = "display: none";
//     // e.target.style.display =  "none";
//     e.stopPropagation()
//     e.target.remove();
//   });
// });

// ul.addEventListener("click", (e) => {
//     console.log(e.target);
//     if(e.target.tagName === "LI"){
//         e.target.remove()
//     }
// });
