export default class FormValidator {
  constructor(formElement, config) {
    this.formElement = formElement;
    this.config = config;
  }

  showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.config.inputErrorClass);
    errorElement.textContent = errorMessage;
  }
  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.config.inputErrorClass);
    errorElement.textContent = "";
  }
  checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  toggleButtonState(inputList, buttonElement) {
    if (inputList.some((input) => !input.validity.valid)) {
      buttonElement.setAttribute("disabled", "disabled");
      buttonElement.classList.add(this.config.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this.config.inactiveButtonClass);
    }
  }
  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.config.inputSelector)
    );
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(inputElement);
      });
    });
  }

  enableValidation() {
    this.formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this.setEventListeners();
  }
}
