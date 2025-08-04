export default class Card {
  constructor(link, title) {
    this.link = link;
    this.title = title;
  }
  getTemplate() {
    const CardTemplate = document.querySelector(".template__card");
    return CardTemplate.content
      .querySelector(".elements__card")
      .cloneNode(true);
  }

  /*ImagePopup() {
    this.elementImage = elements.querySelector(".elements__image");
    this.elementImage.src = link;
    this.elementImage.alt = `Imagen de ${title}`;
    this.elementImage.addEventListener("click", function () {
      showImagePopup(this.link, this.title);
    });
  }*/

  toogleLike() {
    this.likeButton.classList.toggle("elements__like-button_active");
  }

  removeCard() {
    this.htmlCard.remove();
  }

  setEventListeners() {
    this.likeButton.addEventListener("click", () => {
      this.toogleLike();
    });

    this.trashIcon.addEventListener("click", () => {
      this.removeCard();
    });
  }

  setProperties() {
    this.htmlCard = this.getTemplate();
    this.elementImage = this.htmlCard.querySelector(".elements__image");
    this.elementTitle = this.htmlCard.querySelector(".elements__name");
    this.likeButton = this.htmlCard.querySelector(".elements__like-button");
    this.trashIcon = this.htmlCard.querySelector(".elements__trash-button");
    this.elementImage.src = this.link;
    this.elementImage.alt = `Imagen de ${this.title}`;
    this.elementTitle.textContent = this.title;
  }

  getCard() {
    this.setProperties();
    this.setEventListeners();
    return this.htmlCard;
  }
}
