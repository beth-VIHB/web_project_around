import { showImagePopup } from "./utils.js";
export default class Card {
  constructor(link, title) {
    this.link = link;
    this.title = title;
  }
  _getTemplate() {
    const CardTemplate = document.querySelector(".template__card");
    return CardTemplate.content
      .querySelector(".elements__card")
      .cloneNode(true);
  }

  ImagePopup() {
    showImagePopup(this.link, this.title);
  }

  _toogleLike() {
    this.likeButton.classList.toggle("elements__like-button_active");
  }

  removeCard() {
    this.htmlCard.remove();
  }

  _setEventListeners() {
    this.likeButton.addEventListener("click", () => {
      this._toogleLike();
    });

    this.trashIcon.addEventListener("click", () => {
      this.removeCard();
    });
    this.elementImage.addEventListener("click", () => {
      this.ImagePopup();
    });
  }

  _setProperties() {
    this.htmlCard = this._getTemplate();
    this.elementImage = this.htmlCard.querySelector(".elements__image");
    this.elementTitle = this.htmlCard.querySelector(".elements__name");
    this.likeButton = this.htmlCard.querySelector(".elements__like-button");
    this.trashIcon = this.htmlCard.querySelector(".elements__trash-button");
    this.elementImage.src = this.link;
    this.elementImage.alt = `Imagen de ${this.title}`;
    this.elementTitle.textContent = this.title;
  }

  getCard() {
    this._setProperties();
    this._setEventListeners();
    return this.htmlCard;
  }
}
