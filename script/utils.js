export const addingPopup = document.querySelector("#popup-add");
export const profilePopup = document.querySelector("#popup-profile");
export const imagePopup = document.querySelector("#popup-image");
export const profileName = document.querySelector(".profile__name");
export const inputName = document.querySelector("#name");
export const inputAbout = document.querySelector("#profile__info");
export const profileAbout = document.querySelector(".profile__profession");
export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
export const initialCards = [
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

export function showPlacePopup() {
  addingPopup.classList.add("popup__opened");
}

export function hidePlacePopup() {
  addingPopup.classList.remove("popup__opened");
}

export function showPopup() {
  profilePopup.classList.add("popup__opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

export function hidePopup() {
  profilePopup.classList.remove("popup__opened");
}

export function showImagePopup(link, title) {
  imagePopup.classList.add("popup__opened");
  const popupImageElement = document.querySelector(".popup__image-open");
  popupImageElement.src = link;
  const popupTitle = document.querySelector(".popup__image-title");
  popupTitle.textContent = title;
}

export function hideImagePopup() {
  imagePopup.classList.remove("popup__opened");
}
