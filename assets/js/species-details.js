const contentDetails = document.querySelectorAll("[data-content-details]");

contentDetails.forEach((details) => {
    const showLessButton = details.querySelector("[data-content-show-less]");
    const readMoreSummary = details.querySelector("summary");
    let scrollPositionBeforeExpand;

    details.addEventListener("toggle", () => {
        details.dataset.expanded = String(details.open);
        if (details.open && scrollPositionBeforeExpand !== undefined) {
            const scrollPosition = scrollPositionBeforeExpand;
            scrollPositionBeforeExpand = undefined;
            requestAnimationFrame(() => window.scrollTo(0, scrollPosition));
        }
    });

    details.dataset.expanded = String(details.open);

    readMoreSummary?.addEventListener("click", () => {
        if (!details.open) {
            scrollPositionBeforeExpand = window.scrollY;
        }
    });

    showLessButton?.addEventListener("click", () => {
        details.open = false;
        details.dataset.expanded = "false";
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
});
