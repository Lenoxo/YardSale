import { getUserData } from "../utils/getUserData.js";

const form = document.querySelector(".form");

// Fill user info if exists in localStorage for easy update

const userData = getUserData();
if (userData) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const { savedName, savedEmail, savedPassword } = userData;
  nameInput.defaultValue = savedName;
  emailInput.defaultValue = savedEmail;
  passwordInput.defaultValue = savedPassword;
}

// handle submit event for create / update user data

form.addEventListener("submit", handleUpdate);

function handleUpdate(event) {
  event.preventDefault();
  console.log("detected submit");
  const nameVal = event.target.elements.name.value;
  const emailVal = event.target.elements.email.value;
  const passwordVal = event.target.elements.password.value;

  localStorage.setItem(
    "user-data",
    JSON.stringify({
      savedName: nameVal,
      savedEmail: emailVal,
      savedPassword: passwordVal,
      isLoggedIn: true
    })
  );

  return (window.location.href = "../index.html");
}
