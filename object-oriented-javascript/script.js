// const userOne = {
//   username: "Steve",
//   email: "steve@windows.com",
//   login: function () {
//     console.log("the user logged on");
//   },
//   logout: function () {
//     console.log("the user logged out");
//   },
// };

class User {
  constructor(username, age, email) {
    //set up properties
    this.username = username;
    this.age = age;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, age, email, title) {
    super(username, age, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
    return this;
  }
}

const userOne = new User("Michael", 24, "Michael@windows.com");
const userTwo = new User("Charlie", 56, "charlie@windows.com");
const userThree = new Admin("Tony", 55, "Tony@windows.com", "black-belt-admin");

let users = [userOne, userTwo, userThree];
console.log(users);
userThree.deleteUser(userOne);
console.log(users);

