// Закриття з клавіатури
// Додай закриття модального вікна після натискання клавіші Escape. Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно. Бібліотека basicLightbox містить метод для програмного закриття модального вікна.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryDiv.insertAdjacentHTML("beforeend", galleryMarkup);

galleryDiv.addEventListener("click", hendlerGetLargeImg);

// ------functions----------

function createGalleryMarkup(elements) {
  return elements
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}

function hendlerGetLargeImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const largeImg = basicLightbox.create(
    `<img
      src="${e.target.dataset.source}"
      width="800" 
      height="600"
    />`,

    {
      onShow: (largeImg) => {
        document.onkeydown = function (e) {
          e.preventDefault();
          if (e.code == "Escape") {
            largeImg.close();
          }
        };
      },
    }
  );

  largeImg.show();
}
