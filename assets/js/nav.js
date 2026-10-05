const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-navigation");

if (navToggle && siteNav) {
    const closeNav = (returnFocus = false) => {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
        siteNav.classList.remove("is-open");
        if (returnFocus) {
            navToggle.focus();
        }
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
        siteNav.classList.toggle("is-open", !isOpen);
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeNav();
        }
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".site-header")) {
            closeNav();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
            closeNav(true);
        }
    });

    window.matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
        if (event.matches) {
            closeNav();
        }
    });
}
