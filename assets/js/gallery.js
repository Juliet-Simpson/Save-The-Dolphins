const gallery = document.querySelector(".gallery-carousel");
const galleryTrack = gallery?.querySelector(".gallery-track");
const gallerySlides = galleryTrack
    ? [...galleryTrack.querySelectorAll(".gallery-slide")]
    : [];
const galleryLightbox = document.querySelector(".gallery-lightbox");

if (gallery && galleryTrack && gallerySlides.length && galleryLightbox) {
    const previousButton = gallery.querySelector("[data-gallery-previous]");
    const nextButton = gallery.querySelector("[data-gallery-next]");
    const autoplayButton = gallery.querySelector("[data-gallery-autoplay]");
    const lightboxImage = galleryLightbox.querySelector("img");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeIndex = 0;
    let paused = reducedMotion.matches;
    let pointerInside = false;
    let focusInside = false;
    let autoplayTimer;

    const updateActiveIndex = () => {
        const center = galleryTrack.getBoundingClientRect().left + galleryTrack.clientWidth / 2;
        activeIndex = gallerySlides.reduce((closestIndex, slide, index) => {
            const slideCenter = slide.getBoundingClientRect().left + slide.offsetWidth / 2;
            const closestCenter =
                gallerySlides[closestIndex].getBoundingClientRect().left +
                gallerySlides[closestIndex].offsetWidth / 2;
            return Math.abs(slideCenter - center) < Math.abs(closestCenter - center)
                ? index
                : closestIndex;
        }, 0);
    };

    const goToSlide = (index) => {
        const wrapped = index < 0 || index >= gallerySlides.length;
        activeIndex = (index + gallerySlides.length) % gallerySlides.length;
        const slide = gallerySlides[activeIndex];
        const left = slide.offsetLeft - (galleryTrack.clientWidth - slide.offsetWidth) / 2;
        galleryTrack.scrollTo({
            left,
            behavior: wrapped || reducedMotion.matches ? "auto" : "smooth",
        });
    };

    const syncAutoplay = () => {
        window.clearInterval(autoplayTimer);
        autoplayTimer = undefined;
        if (
            paused ||
            pointerInside ||
            focusInside ||
            galleryLightbox.open ||
            document.visibilityState !== "visible"
        ) {
            return;
        }
        autoplayTimer = window.setInterval(() => goToSlide(activeIndex + 1), 6500);
    };

    const setPaused = (shouldPause) => {
        paused = shouldPause;
        autoplayButton.setAttribute("aria-label", paused ? "Play slideshow" : "Pause slideshow");
        autoplayButton.setAttribute("aria-pressed", String(paused));
        autoplayButton.dataset.paused = String(paused);
        syncAutoplay();
    };

    galleryTrack.addEventListener("scroll", updateActiveIndex, { passive: true });
    previousButton.addEventListener("click", () => goToSlide(activeIndex - 1));
    nextButton.addEventListener("click", () => goToSlide(activeIndex + 1));
    autoplayButton.addEventListener("click", () => setPaused(!paused));

    gallery.addEventListener("pointerenter", () => {
        pointerInside = true;
        syncAutoplay();
    });
    gallery.addEventListener("pointerleave", () => {
        pointerInside = false;
        syncAutoplay();
    });
    gallery.addEventListener("focusin", () => {
        focusInside = true;
        syncAutoplay();
    });
    gallery.addEventListener("focusout", (event) => {
        if (!gallery.contains(event.relatedTarget)) {
            focusInside = false;
            syncAutoplay();
        }
    });

    gallerySlides.forEach((slide) => {
        slide.addEventListener("click", () => {
            const image = slide.querySelector("img");
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            galleryLightbox.showModal();
            syncAutoplay();
        });
    });

    galleryLightbox.addEventListener("click", (event) => {
        if (event.target === galleryLightbox) {
            galleryLightbox.close();
        }
    });
    galleryLightbox.addEventListener("close", syncAutoplay);
    document.addEventListener("visibilitychange", syncAutoplay);
    reducedMotion.addEventListener("change", (event) => {
        if (event.matches) {
            setPaused(true);
        }
    });

    setPaused(paused);
}
