/*const nameValidation = document.querySelector("#name__validation-message");

const profileValidation = document.querySelector(
  "#profile__validation-message"
);

const placeValidation = document.querySelector("#place__validation-message");

const urlValidation = document.querySelector("#url__validation-message");*/

function validateInput(inputElement) {
  const messageElement = document.querySelector(`#${inputElement.id}-message`);
  if (inputElement.validity.valid) {
    messageElement.textContent = "";
  } else {
    messageElement.textContent = inputElement.validationMessage;
  }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      validateInput(inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function toggleButtonState(inputList, buttonElement) {
  if (!inputList.some((input) => !input.validity.valid)) {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove("popup-add-save-button");
  } else {
    buttonElement.setAttribute("disabled", "disabled");
    buttonElement.classList.add("popup-add-save-button");
  }
}

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);

  formList.forEach(function (formElement) {
    setEventListeners(formElement);
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
