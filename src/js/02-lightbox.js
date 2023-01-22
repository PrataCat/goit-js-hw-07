import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryDiv = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup2(galleryItems);

function createGalleryMarkup2(elements) {
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
