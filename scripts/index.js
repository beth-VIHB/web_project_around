const editButton = document.querySelector(".profile__edit-button");

const profilePopup = document.querySelector(".popup");

const closeProfilePopup = document.querySelector(".popup__closed-icon");

const profileForm = document.querySelector(".popup__profile-form");

const inputName = document.querySelector(".popup__input-name");

const inputAbout = document.querySelector(".popup__input-about");

const activeButton = document.querySelector(".popup__button");

const profileName = document.querySelector(".profile__name");

const profileAbout = document.querySelector(".profile__profession");

const initialCards = [
  {
    name: "Breckenridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Cooper Landing",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Kapa'a",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Condado Nye",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Orlando",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Wabasha",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

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
