import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', onGallaryImageClick)

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`;
    }).join('');
}

function onGallaryImageClick (e) {
    e.preventDefault();
    
    const isGallaryImageSwatch = e.target.classList.contains('gallery__image');
    const linkOfOriginalImg = e.target.dataset.source;

    if (!isGallaryImageSwatch) {
        return;
    };

    const instance = basicLightbox.create(`
    <img src="${linkOfOriginalImg}" width="800" height="600">
    `, {
        onShow: onCloseLightbox,
        onClose: offCloseLightbox,
    });

    instance.show();

    function onCloseLightbox(instance) {
        window.addEventListener('keydown', onEscKeyPress);
    
        function onEscKeyPress(e) {
            const ESC_KEY_CODE = 'Escape';
    
            if (e.code === ESC_KEY_CODE) {
                instance.close()
            };
        }
    }

    function offCloseLightbox(instance) {
        window.removeEventListener('keydown', onEscKeyPress);
    
        function onEscKeyPress(e) {
            const ESC_KEY_CODE = 'Escape';
    
            if (e.code === ESC_KEY_CODE) {
                instance.close()
            };
        }
    }
}



