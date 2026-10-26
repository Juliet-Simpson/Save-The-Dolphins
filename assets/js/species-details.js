const speciesDetails = document.querySelector("[data-species-details]");

if (speciesDetails) {
    const showLessButton = speciesDetails.querySelector("[data-species-show-less]");
    const readMoreSummary = speciesDetails.querySelector("summary");

    speciesDetails.addEventListener("toggle", () => {
        speciesDetails.dataset.expanded = String(speciesDetails.open);
        if (speciesDetails.open) {
            showLessButton?.focus();
        }
    });

    speciesDetails.dataset.expanded = String(speciesDetails.open);

    showLessButton?.addEventListener("click", () => {
        speciesDetails.open = false;
        readMoreSummary?.focus();
    });
}
