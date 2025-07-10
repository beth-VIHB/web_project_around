const nameValidation = document.querySelector("#name__validation-message");

const profileValidation = document.querySelector(
  "#profile__validation-message"
);

const placeValidation = document.querySelector("#place__validation-message");

const urlValidation = document.querySelector("#url__validation-message");

function togglePlaceButton(isDisabled) {
  if (!isDisabled) {
    activeNewPlaceButton.removeAttribute("disabled");
    activeNewPlaceButton.classList.remove("popup-add-save-button");
  } else {
    activeNewPlaceButton.setAttribute("disabled", "disabled");
    activeNewPlaceButton.classList.add("popup-add-save-button");
  }
}

function toggleProfileButton(isDisabled) {
  if (!isDisabled) {
    activeProfileButton.removeAttribute("disabled");
    activeProfileButton.classList.remove("popup-profile-save-button");
  } else {
    activeProfileButton.setAttribute("disabled", "disabled");
    activeProfileButton.classList.add("popup-profile-save-button");
  }
}

inputName.addEventListener("input", function () {
  if (inputName.validity.valid) {
    nameValidation.textContent = "";
    toggleProfileButton(false);
  } else {
    nameValidation.textContent = inputName.validationMessage;
    toggleProfileButton(true);
  }
});

inputAbout.addEventListener("input", function () {
  if (inputAbout.validity.valid) {
    profileValidation.textContent = "";
    toggleProfileButton(false);
  } else {
    profileValidation.textContent = inputAbout.validationMessage;
    toggleProfileButton(true);
  }
});

inputTitle.addEventListener("input", function () {
  if (inputTitle.validity.valid) {
    placeValidation.textContent = "";
    togglePlaceButton(false);
  } else {
    placeValidation.textContent = inputTitle.validationMessage;
    togglePlaceButton(true);
  }
});

inputLink.addEventListener("input", function () {
  if (inputLink.validity.valid) {
    urlValidation.textContent = "";
    togglePlaceButton(false);
  } else {
    urlValidation.textContent = inputLink.validationMessage;
    togglePlaceButton(true);
  }
});
