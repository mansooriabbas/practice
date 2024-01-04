//function declaration
//hoisting
// function greet(name) {
//   console.log("hello " + name);
// }

// //function expression
// //hoisting doesnt work

// const speak = function() {
//     console.log("good day");
// }

// // greet("Deborah")
// speak()

//arguments and parameters

// const speak = function (name = "Tony", time = "night") {
//   console.log(`Good ${time} ${name}`);
// };

// speak("Michael", "morning");

//returning values

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;

//   // return area
// };

// const calculatedArea = calcArea(5);

// console.log(calculatedArea);

//arrow function, short and nice but doesnt work with the (this) keyword

// const calcArea = (radius) => {
//  return 3.14 * radius **2
// }

//shorter arrow function (only works when you have 1 parameter)
// const calcArea = (radius) => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log(area);

// const greet = () => "hello, world";

// const res = greet()
// console.log(res);

// const bill = function(products, tax) {
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax
//     }
//     return total
// }

// const bill = (products, tax) => {
//     let total = 0
//         for(let i = 0; i < products.length; i++){
//             total += products[i] + products[i] * tax
//         }
//         return total
// }

// const finalSum = bill([10,15,30],0.2)


// console.log(finalSum);