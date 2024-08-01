let editButton = document.querySelector(".profile__edit-button");

let profilePopup = document.querySelector(".popup");

let closeProfilePopup = document.querySelector(".popup__closed-icon");

let profileForm = document.querySelector(".popup__profile-form");

let inputName = document.querySelector(".popup__input-name");

let inputAbout = document.querySelector(".popup__input-about");

let activeButton = document.querySelector(".popup__button");

let profileName = document.querySelector(".profile__name");

let profileAbout = document.querySelector(".profile__profession");

function showPopup() {
  profilePopup.classList.add("popup__opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function hidePopup() {
  profilePopup.classList.remove("popup__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  hidePopup();
}

function submitInfo() {
  activeButton.classList.add("popup__button");
}

editButton.addEventListener("click", showPopup);
closeProfilePopup.addEventListener("click", hidePopup);
profileForm.addEventListener("submit", handleProfileFormSubmit);
