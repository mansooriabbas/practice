//object literals

// const user = {
//   name: "John Doe",
//   age: 35,
//   occupation: "Web Developer",
//   email: "john@example.com",
//   location: "Netherlands",
//   blogs: [
//     {
//       title: "Introduction to JavaScript",
//       likes: 30,
//     },

//     {
//       title: "CSS Tips and Tricks",
//       likes: 50,
//     },
//   ],

//   login: function () {
//     // regular function
//     console.log("user logged in");
//   },
//   logout() {
//     //shorthand version of the same above function
//     console.log("user logged out");
//   },

//   logBlogs() {
//     //shorthand

//     console.log("this user has written the following blogs");
//     this.blogs.forEach((blog) => {
//       console.log(blog.title, blog.likes);
//     });
//   },
// };

// user.logBlogs();


//Math object
// const area = 5.6
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));


// const random = Math.random()
// console.log(random);
// console.log(Math.round(random * 100));

//primitive values
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`score:${scoreOne}`, `scoreTwo:${scoreTwo}`);

scoreOne = 100
console.log(`score:${scoreOne}`, `scoreTwo:${scoreTwo}`);

//reference values
//stored once with 2 seperate pointers

const userOne = {name: "Tony", age: 30}
const userTwo = userOne

console.log(userOne, userTwo);

userOne.age = 40
console.log(userOne, userTwo);
