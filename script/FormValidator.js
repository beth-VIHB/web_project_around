export default class FormValidator {
  constructor(config) {
    this._config = config;
    this._formElement = document.querySelector(this._config.formSelector);
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }
}
