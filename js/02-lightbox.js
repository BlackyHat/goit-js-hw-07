import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryElMarkup = addGalleryElementsMarkup(galleryItems);
refs.gallery.innerHTML = galleryElMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});

function addGalleryElementsMarkup(el) {
  return el
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`,
    )
    .join('');
}
