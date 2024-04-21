const form = document.querySelector(".form");

form.addEventListener("submit", handleUpdate);

function handleUpdate(event) {
  event.preventDefault();
  console.log("detected submit");
  const nameVal = event.target.elements.name.value;
  const emailVal = event.target.elements.email.value;
  const passwordVal = event.target.elements.password.value;

  // TODO: How to validate data from forms using just js, not react like aproaches.

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
