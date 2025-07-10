const editButton = document.querySelector(".profile__edit-button");

const profilePopup = document.querySelector("#popup-profile");

const closeProfilePopup = document.querySelector("#popup-profile-close-button");

const profileForm = document.querySelector(".popup__form");

const inputName = document.querySelector("#name");

const inputAbout = document.querySelector("#profile__info");

const activeProfileButton = document.querySelector(
  "#popup-profile-save-button"
);

const activeNewPlaceButton = document.querySelector("#popup-add-save-button");

const profileName = document.querySelector(".profile__name");

const profileAbout = document.querySelector(".profile__profession");

const addButton = document.querySelector(".profile__add-button");

const addingPopup = document.querySelector("#popup-add");

const closeAddPopup = document.querySelector("#popup-add-close-button");

const addPlaceForm = document.querySelector(".popup__new-place-form");

const inputTitle = document.querySelector("#title");

const inputLink = document.querySelector("#link");

const imagePopup = document.querySelector("#popup-image");

const closeImage = document.querySelector("#popup-image-close-button");

const templateCard = document.querySelector(".template__card");

const sectionCards = document.querySelector(".elements");

const popupOverlay = document.querySelectorAll(".popup__overlay");

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
  elementImage.alt = `Imagen de ${title}`;
  elementImage.addEventListener("click", function () {
    showImagePopup(link, title);
  });
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
  sectionCards.prepend(elements);
}

function showPlacePopup() {
  addingPopup.classList.add("popup__opened");
}

function hidePlacePopup() {
  addingPopup.classList.remove("popup__opened");
}

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  createCard(inputLink.value, inputTitle.value);
  hidePlacePopup();
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

function showImagePopup(link, title) {
  imagePopup.classList.add("popup__opened");
  const popupImageElement = document.querySelector(".popup__image-open");
  popupImageElement.src = link;
  const popupTitle = document.querySelector(".popup__image-title");
  popupTitle.textContent = title;
}

function hideImagePopup() {
  imagePopup.classList.remove("popup__opened");
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
