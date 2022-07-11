const form = document.querySelector("#signUpForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  for (const [name, value] of data) {
    console.log(name, ":", value);
  }
});
