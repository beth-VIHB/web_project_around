export default class FormValidator {
  constructor(formElement, config) {
    this.formElement = formElement;
    this.config = config;
  }

  _validateInput(inputElement) {
    const messageElement = this.formElement.querySelector(
      `#${inputElement.id}-message`
    );
    if (inputElement.validity.valid) {
      messageElement.textContent = "";
    } else {
      messageElement.textContent = inputElement.validationMessage;
    }
  }

  _setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.config.inputSelector)
    );
    const buttonElement = this.formElement.querySelector(
      this.config.submitButtonSelector
    );
    this._toggleButtonState(this.inputList, buttonElement);
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._validateInput(inputElement);
        this._toggleButtonState(this.inputList, buttonElement);
      });
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (!inputList.some((input) => !input.validity.valid)) {
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(this.config.inactiveButtonClass);
    } else {
      buttonElement.setAttribute("disabled", "disabled");
      buttonElement.classList.add(this.config.inactiveButtonClass);
    }
  }

  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
