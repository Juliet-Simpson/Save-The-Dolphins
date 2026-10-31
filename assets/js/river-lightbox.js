const riverPhotoFigures = document.querySelectorAll(".about-river-photo");
const riverLightbox = document.querySelector("#river-photo-lightbox");

if (riverPhotoFigures.length && riverLightbox) {
    const lightboxImage = riverLightbox.querySelector("img");
    const closeButton = riverLightbox.querySelector(".mission-lightbox-close");

    riverPhotoFigures.forEach((figure) => {
        const image = figure.querySelector("img");
        const expandButton = figure.querySelector(".river-photo-expand");

        if (!image || !expandButton) return;

        expandButton.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            riverLightbox.showModal();
        });
    });

    closeButton.addEventListener("click", () => {
        riverLightbox.close();
    });

    riverLightbox.addEventListener("click", (event) => {
        if (event.target === riverLightbox) {
            riverLightbox.close();
        }
    });
}