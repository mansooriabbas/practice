const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username")
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //validation
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "Valid username.";
  } else {
    feedback.textContent = "Username must be secure";
  }
});

form.username.addEventListener("keyup", (e) => {
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    console.log("passed");
  } else {
    console.log("failed");
  }
});
