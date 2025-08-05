import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  addingPopup,
  profilePopup,
  imagePopup,
  showPlacePopup,
  hidePlacePopup,
  showPopup,
  hidePopup,
  hideImagePopup,
  profileName,
  inputName,
  inputAbout,
  inputLink,
  inputTitle,
  profileAbout,
  showImagePopup,
} from "./utils.js";
const editButton = document.querySelector(".profile__edit-button");

const closeProfilePopup = document.querySelector("#popup-profile-close-button");

const profileForm = document.querySelector(".popup__form");

const addButton = document.querySelector(".profile__add-button");

const closeAddPopup = document.querySelector("#popup-add-close-button");

const addPlaceForm = document.querySelector(".popup__new-place-form");

const closeImage = document.querySelector("#popup-image-close-button");

const sectionCards = document.querySelector(".elements");

const popupOverlay = document.querySelectorAll(".popup__overlay");

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const initialCards = [
  {
    name: "Breckenridge",
    link: "./images/BreckenridgeUnitedStates.jpg",
  },
  {
    name: "Cooper Landing",
    link: "./images/CooperLandingUnitedStates.jpg",
  },
  {
    name: "Kapa'a",
    link: "./images/KapaaUnitedStates.jpg",
  },
  {
    name: "Condado Nye",
    link: "./images/NyeCountyUnitedStates.jpg",
  },
  {
    name: "Orlando",
    link: "./images/OrlandoUnitedStates.jpg",
  },
  {
    name: "Wabasha",
    link: "./images/WabashaUnitedStates.jpg",
  },
];

const ValidationProfile = new FormValidator(profileForm, config);
ValidationProfile.enableValidation();

const ValidationPlace = new FormValidator(addPlaceForm, config);
ValidationPlace.enableValidation();

initialCards.forEach(function (item) {
  const instanceCard = new Card(item.link, item.name);
  sectionCards.append(instanceCard.getCard());
});

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const instaceCard = new Card(inputLink.value, inputTitle.value);
  sectionCards.prepend(instaceCard.getCard());
  hidePlacePopup();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  hidePopup();
}

addButton.addEventListener("click", showPlacePopup);
closeAddPopup.addEventListener("click", hidePlacePopup);
addPlaceForm.addEventListener("submit", handlePlaceFormSubmit);

editButton.addEventListener("click", showPopup);
closeProfilePopup.addEventListener("click", hidePopup);
profileForm.addEventListener("submit", handleProfileFormSubmit);

closeImage.addEventListener("click", hideImagePopup);

popupOverlay.forEach(function (overlay) {
  overlay.addEventListener("click", function (evt) {
    if (evt.target === overlay) {
      hidePopup();
      hidePlacePopup();
      hideImagePopup();
    }
  });
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (profilePopup.classList.contains("popup__opened")) {
      hidePopup();
    }
    if (addingPopup.classList.contains("popup__opened")) {
      hidePlacePopup();
    }
    if (imagePopup.classList.contains("popup__opened")) {
      hideImagePopup();
    }
  }
});
