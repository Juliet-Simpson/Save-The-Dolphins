const speciesDetails = document.querySelector("[data-species-details]");

if (speciesDetails) {
    const showLessButton = speciesDetails.querySelector("[data-species-show-less]");
    const readMoreSummary = speciesDetails.querySelector("summary");
    let scrollPositionBeforeExpand;

    speciesDetails.addEventListener("toggle", () => {
        speciesDetails.dataset.expanded = String(speciesDetails.open);
        if (speciesDetails.open && scrollPositionBeforeExpand !== undefined) {
            const scrollPosition = scrollPositionBeforeExpand;
            scrollPositionBeforeExpand = undefined;
            requestAnimationFrame(() => window.scrollTo(0, scrollPosition));
        }
    });

    speciesDetails.dataset.expanded = String(speciesDetails.open);

    readMoreSummary?.addEventListener("click", () => {
        if (!speciesDetails.open) {
            scrollPositionBeforeExpand = window.scrollY;
        }
    });

    showLessButton?.addEventListener("click", () => {
        speciesDetails.open = false;
        speciesDetails.dataset.expanded = "false";
        readMoreSummary?.focus({ preventScroll: true });
        requestAnimationFrame(() => {
            if (!readMoreSummary) {
                return;
            }
            const summaryDocumentTop = window.scrollY + readMoreSummary.getBoundingClientRect().top;
            const targetScroll =
                summaryDocumentTop + readMoreSummary.offsetHeight - window.innerHeight + 20;
            window.scrollTo(0, Math.max(0, targetScroll));
        });
    });
}
