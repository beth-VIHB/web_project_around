const editButton = document.querySelector(".profile__edit-button");

const profilePopup = document.querySelector(".popup");

const closeProfilePopup = document.querySelector(".popup__closed-icon");

const profileForm = document.querySelector(".popup__profile-form");

const inputName = document.querySelector(".popup__input-name");

const inputAbout = document.querySelector(".popup__input-about");

const activeButton = document.querySelector(".popup__button");

const profileName = document.querySelector(".profile__name");

const profileAbout = document.querySelector(".profile__profession");

const addButton = document.querySelector(".profile__add-button");

const cardsPopup = document.querySelector(".popup__two");

const placeForm = document.querySelector(".popup__new-place-form");

const inputPlace = document.querySelector(".popup__input-place");

const inputUrl = document.querySelector(".popup__input-url");

const templateCard = document.querySelector(".template-card");

//const initialCards = document.querySelector(".elements");//

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

function createCard(url, title) {
  const card = templateCard.content
    .querySelector(".elements__card")
    .cloneNode(true);
  const cardImage = card.querySelector(".elements__image");
  const cardTitle = card.querySelector(".elements__name");
  cardImage.src = url;
  cardTitle.textContent = title;
  sectionCards.append(card);
}

initialCards.forEach(function (element) {
  createCard(element.link, element.name);
});

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

function showPopup() {
  cardsPopup.classList.add("popup__opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}
