import { galleryItems } from './gallery-items.js';
// Change code below this line

const lightboxRef = document.querySelector('.gallery');
const lightboxMarkup = createLightboxItemsMarkup(galleryItems);

lightboxRef.insertAdjacentHTML('beforeend', lightboxMarkup);

lightboxRef.addEventListener('click', onLightboxImageClick)

function createLightboxItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>`;
    }).join('');
}



function onLightboxImageClick (e) {
    e.preventDefault();
    
    const isLightboxImageSwatch = e.target.classList.contains('gallery__image');

    if (!isLightboxImageSwatch) {
        return;
    };

    const gallery = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: "alt",
        closable: true,
    });
    gallery.on('show.simplelightbox')
}
