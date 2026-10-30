const missionHeroButton = document.querySelector(".mission-hero-expand");
const missionHeroLightbox = document.querySelector("#mission-hero-lightbox");

if (missionHeroButton && missionHeroLightbox) {
    const closeButton = missionHeroLightbox.querySelector(".mission-lightbox-close");

    missionHeroButton.addEventListener("click", () => {
        missionHeroLightbox.showModal();
    });

    closeButton.addEventListener("click", () => {
        missionHeroLightbox.close();
    });
}