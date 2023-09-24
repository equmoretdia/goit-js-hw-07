import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    image => `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    /></a></li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

let currentInstance = null;

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const clickedImageUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
        <img src="${clickedImageUrl}" width="1280" height="853">
    `
  );
  currentInstance = instance;
  instance.show();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && currentInstance) {
    currentInstance.close();
  }
});
