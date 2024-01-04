//for loops

// for (let i = 0; i < 5; i++) {
//   console.log("in loop", i);
// }
// console.log("loop finished");

// const names = ["Shaun", "Mario", "Luigi"];

// for (let i = 0; i < names.length; i++) {
//   //   console.log(names[i]);

//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// const names = ["Shaun", "Mario", "Luigi"]

// let i = 0
// while(i < names.length) {
//     console.log(names[i]);
//     i++
// }

// let i = 4;

// do {
//   console.log("val of i is: ", i);
//   i++;
// } while (i < 5);

//if statements

// const age = 25;

// if(age > 20){
//     console.log("you are over 20 years old");
// }

// const names = ["Mike", "Charles", "Rebecka", "Steve"]
// if(names.length > 3){
//     console.log(names);
// }

// const password = "passwordp@ssword"
// if (password.length >= 12 && password.includes("@")) {
//     console.log("password is strong and valid");

// }else if (password.length <= 8) {
//     console.log("password is not valid, add more characters");
// }else{
//     console.log("password is valid");
// }

//logical operators OR || AND &&

// const password = "p@ss";
// if (password.length >= 12 && password.includes("@")) {
//   console.log("password is strong and valid");
// } else if (
//   password.length >= 8 ||
//   (password.includes("@") && password.length >= 5)
// ) {
//   console.log("password is short but valid");
// } else {
//   console.log("password is not valid");
// }

//logical NOT (!)

// let user = false;

// if (!user) {
//  console.log("Log in to continue");
// }
// console.log(!true);
// console.log(!false);

//break and continue

// const scores = [75, 92, 84, 0, 100, 81, 77, 88, 73, 79];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }

//   console.log(`Your score: ${scores[i]}`);

//   if (scores[i] === 100) {
//     console.log(`congrats, you got the top score`);
//     break;
//   }
// }

//switch statements
// uses strict equality

// const grade = "D";

// switch (grade) {
//   case "A":
//     console.log("You got an A");
//     break;
//   case "B":
//     console.log("You got an B");
//     break;
//   case "C":
//     console.log("You got an C");
//     break;
//   case "D":
//     console.log("You got an D");
//     break;
//   default:
//     console.log("Not a valid grade");
// }

//variable and block scope

// let age = 30;

// if (true) {
//   const age = 40;
//   const name = "Tony";
//   console.log("inside code block ", age, name);
//   if (true) {
//     const age = 50;
//     const name = "Michael"
//     console.log("inside second code block ", age, name);
//   }
// }

// console.log("outside code block ", age, name);
