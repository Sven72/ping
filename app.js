let submitBtn = document.getElementById("submitButton");

let input = document.getElementById("email");
console.log(input);

submitBtn.addEventListener("click", e => {
  e.preventDefault();
  validate();
});

function validateEmail(email) {
  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function validate() {
  let email = document.querySelector("#email");
  console.log(email.value);

  let message = email.nextElementSibling;

  !validateEmail(email.value)
    ? message.classList.add("error") && message.classList.add("input-error")
    : message.classList.remove("error") &&
      message.classList.remove("input-error");

  input.addEventListener("input", e => {
    const value = input.value;

    const trimmed = value.trim();

    if (trimmed) {
      message.classList.remove("error") &&
        message.classList.remove("input-error");
    } else {
      return;
      // input.dataset.state = "invalid";
    }
  });
}
