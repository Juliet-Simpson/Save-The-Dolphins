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
    let closeFromBackdrop = false;

    const updateSlideLayout = () => {
        const isSmallScreen = window.matchMedia("(max-width: 900px)").matches;
        const isCompactDesktop = window.matchMedia(
            "(min-width: 901px) and (max-height: 900px)",
        ).matches;
        const maxWidth = Math.max(1, galleryTrack.clientWidth - (isSmallScreen ? 96 : 128));
        const maxHeight = Math.min(
            window.innerHeight * (isSmallScreen ? 0.58 : isCompactDesktop ? 0.54 : 0.7),
            isSmallScreen ? 480 : isCompactDesktop ? 480 : 640,
            maxWidth * (isSmallScreen ? 0.68 : 0.75),
        );
        let tallestImageHeight = 0;

        gallerySlides.forEach((slide) => {
            const image = slide.querySelector("img");
            const imageWidth = image.naturalWidth || Number(image.getAttribute("width"));
            const imageHeight = image.naturalHeight || Number(image.getAttribute("height"));
            if (!imageWidth || !imageHeight) {
                return;
            }
            const scale = Math.min(
                maxWidth / imageWidth,
                maxHeight / imageHeight,
            );
            const width = imageWidth * scale;
            const height = imageHeight * scale;
            image.style.setProperty("--gallery-image-width", `${width}px`);
            image.style.setProperty("--gallery-image-height", `${height}px`);
            tallestImageHeight = Math.max(tallestImageHeight, height);
        });

        if (tallestImageHeight) {
            galleryTrack.style.setProperty("--gallery-slide-height", `${tallestImageHeight + 16}px`);
        }
    };

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
        updateSlideLayout();
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
        slide.querySelector("img").addEventListener("load", updateSlideLayout);
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
            closeFromBackdrop = true;
            galleryLightbox.close();
        }
    });
    galleryLightbox.addEventListener("close", () => {
        if (closeFromBackdrop) {
            window.requestAnimationFrame(() => {
                if (document.activeElement instanceof HTMLElement && gallery.contains(document.activeElement)) {
                    document.activeElement.blur();
                }
            });
            closeFromBackdrop = false;
        }
        syncAutoplay();
    });
    document.addEventListener("visibilitychange", syncAutoplay);
    window.addEventListener("resize", updateSlideLayout);
    reducedMotion.addEventListener("change", (event) => {
        if (event.matches) {
            setPaused(true);
        }
    });

    updateSlideLayout();
    setPaused(paused);
}
