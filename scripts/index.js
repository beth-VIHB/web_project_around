const editButton = document.querySelector(".profile__edit-button");

const profilePopup = document.querySelector(".popup");

const closeProfilePopup = document.querySelector(".popup__closed-icon");

const profileForm = document.querySelector(".popup__profile-form");

const inputName = document.querySelector(".popup__input-name");

const inputAbout = document.querySelector(".popup__input-about");

const activeButton = document.querySelector(".popup__button");

const profileName = document.querySelector(".profile__name");

const profileAbout = document.querySelector(".profile__profession");

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
  stat;
  profileAbout.textContent = inputAbout.value;
  hidePopup();
}

function submitInfo() {
  activeButton.classList.add("popup__button");
}

editButton.addEventListener("click", showPopup);
closeProfilePopup.addEventListener("click", hidePopup);
profileForm.addEventListener("submit", handleProfileFormSubmit);
