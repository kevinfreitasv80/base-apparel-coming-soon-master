const form = document.querySelector("#form");
const errorDescription = document.querySelector(".errorEmail");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.currentTarget.email.value;
  const regex = RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");

  if (!regex.test(email)) {
    if ("error" === form.classList[0]) return;

    form.classList.add("error");
    errorDescription.hidden = false;
  }
  if (regex.test(email) && "error" === form.classList[0]) {
    form.classList.remove("error");
    errorDescription.hidden = true;
  }
});
