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
    link: "./images/Breckenridge, CO, United States.jpg",
  },
  {
    name: "Cooper Landing",
    link: "./images/Cooper Landing, AK, United States.jpg",
  },
  {
    name: "Kapa'a",
    link: "./images/Kapaʻa, HI, United States.jpg",
  },
  {
    name: "Condado Nye",
    link: "./images/Nye County, NV, United States.jpg",
  },
  {
    name: "Orlando",
    link: "./images/Orlando, FL, United States.jpg",
  },
  {
    name: "Wabasha",
    link: "./images/Wabasha, MN, United States.jpg",
  },
];

initialCards.forEach(function (element) {});

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
