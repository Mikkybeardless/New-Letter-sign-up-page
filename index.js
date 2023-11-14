var errorMessage = document.querySelector(".error-message");
var submitButton = document.querySelector(".btn-submit");
const form = document.querySelector(".e-form");
const emailInput = document.getElementById("email");
const gottenEmail = document.querySelector(".gotten-email");
const dismissBtn = document.querySelector(".btn-dismiss");
const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MessageHtml = document.getElementById("appreciation");
const MainHtml = document.getElementById("main");

submitButton.addEventListener("click", submitForm);
dismissBtn.addEventListener("click", dismiss);

function submitForm(e) {
  e.preventDefault();
  if (!emailPattern.test(emailInput.value) || !emailInput.value) {
    errorMessage.textContent = "valid email required";
    emailInput.setAttribute("class", "error-box");
  } else {
    MainHtml.style.display = "none";
    MessageHtml.style.display = "block";
    gottenEmail.textContent = emailInput.value;
  }
}

function dismiss() {
  MessageHtml.style.display = "none";
  MainHtml.style.display = "block";
  errorMessage.textContent = "";
  emailInput.setAttribute("class", "");
  emailInput.value = "";
}
