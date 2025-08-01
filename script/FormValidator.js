export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._settings = settings;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }
  ShowInputError() {}
  HideInputError() {}
  CheckInputValidity() {}
  ToggleButtonState() {}
  SetEventListeners() {}
  EnableValidation() {}
}
