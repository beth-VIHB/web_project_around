export const addingPopup = document.querySelector("#popup-add");
export const profilePopup = document.querySelector("#popup-profile");
export const imagePopup = document.querySelector("#popup-image");
export const profileName = document.querySelector(".profile__name");
export const inputName = document.querySelector("#name");
export const inputAbout = document.querySelector("#profile__info");
export const profileAbout = document.querySelector(".profile__profession");
export const inputTitle = document.querySelector("#title");
export const inputLink = document.querySelector("#link");

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
