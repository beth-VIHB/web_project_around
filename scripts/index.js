const editButton = document.querySelector(".profile__edit-button");

const profilePopup = document.querySelector("#popup-profile");

const closeProfilePopup = document.querySelector("#popup-profile-close-button");

const profileForm = document.querySelector(".popup__form");

const inputName = document.querySelector("#name");

const inputAbout = document.querySelector("#profile__info");

const activeButton = document.querySelector(".popup__button");

const profileName = document.querySelector(".profile__name");

const profileAbout = document.querySelector(".profile__profession");

const addButton = document.querySelector(".profile__add-button");

const addingPopup = document.querySelector("#popup-add");

const closeAddPopup = document.querySelector("#popup-add-close-button");

const newPlaceForm = document.querySelector(".popup__new-place-form");

const inputTitle = document.querySelector("#title");

const inputLink = document.querySelector("#link");

const imagePopup = document.querySelector("#popup-image");

const templateCard = document.querySelector(".template__card");

const sectionCards = document.querySelector(".elements");

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

initialCards.forEach(function (item) {
  createCard(item.link, item.name);
});

function createCard(link, title) {
  const elements = templateCard.content
    .querySelector(".elements__card")
    .cloneNode(true);
  const elementImage = elements.querySelector(".elements__image");
  elementImage.src = link;
  const elementTitle = elements.querySelector(".elements__name");
  elementTitle.textContent = title;
  const likeButton = elements.querySelector(".elements__like-button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("elements__like-button_active");
  });
  const trashIcon = elements.querySelector(".elements__trash-button");
  trashIcon.addEventListener("click", function () {
    elements.remove();
  });
  sectionCards.append(elements);
}

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

function showPlacePopup() {
  addingPopup.classList.add("popup__opened");
  inputLink.value = elementImage.textContent;
  inputTitle.value = elementTitle.textContent;
}

function hidePlacePopup() {
  addingPopup.classList.remove("popup__opened");
}

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  elementImage.textContent = inputLink.value;
  elementTitle.textContent = inputTitle.value;
  hidePlacePopup();
}

function submitCard() {
  activeButton.classList.add("popup__button");
}

addButton.addEventListener("click", showPlacePopup);
closeAddPopup.addEventListener("click", hidePlacePopup);
newPlaceForm.addEventListener("submit", handlePlaceFormSubmit);
