import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
refs.gallery.innerHTML = galleryItemsMarkup;

refs.gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();
  const activeImg = e.target;
  if (activeImg.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${activeImg.dataset.source}" width="900" height="600">`,
    {
      onShow: addListenerToOpenImg(),
    },
  );
  instance.show();

  function onKeyPressEscapeCloseImg(e) {
    if (e.code === 'Escape') {
      instance.close();
      refs.gallery.removeEventListener('keydown', onKeyPressEscapeCloseImg);
    }
  }

  function addListenerToOpenImg() {
    refs.gallery.addEventListener('keydown', onKeyPressEscapeCloseImg);
  }
}

function createGalleryItemsMarkup(el) {
  return el
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
</div>
`,
    )
    .join('');
}
