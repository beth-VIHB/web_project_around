let edit = document.querySelector(".profile__edit-button");
console.log(edit);

let openPopup = document.querySelector(".popup");
console.log(openPopup);

let closePopup = document.querySelector(".popup__closed-icon");
console.log(closePopup);

let handleProfile = document.querySelector(".popup__profile-form");
console.log(handleProfile);

let inputName = document.querySelector(".popup__input-name");
console.log(inputName);

let inputAbout = document.querySelector(".popup__input-about");
console.log(inputAbout);

let submit = document.querySelector(".popup__button");
console.log(submit);

function showPopup() {
  openPopup.classList.add("popup__opened");
}

function hidePopup() {
  openPopup.classList.remove("popup__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let inputName = document.querySelector(".popup__input-name");
  console.log(inputName);

  let inputAbout = document.querySelector(".popup__input-about");
  console.log(inputAbout);
}
/*function submitInfo() {
  submit.classList.add("popup__button-active");
}*/

edit.addEventListener("click", showPopup);
closePopup.addEventListener("click", hidePopup);
/*submit.addEventListener("click", submitInfo);*/
