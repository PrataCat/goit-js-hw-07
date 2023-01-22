import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryUl = document.querySelector(".gallery");
const galleryMarkup2 = createGalleryMarkup2(galleryItems);
galleryUl.insertAdjacentHTML("beforeend", galleryMarkup2);
var lightbox = new SimpleLightbox(".gallery a", {
  href: "${original}",
  src: "${preview}",
  alt: "${description}",
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

// ------functions----------
function createGalleryMarkup2(elements) {
  return elements
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}
