const form = document.querySelector("[data-contact-form]");
const previewNotice = form?.querySelector("[data-preview-notice]");
const submitButton = form?.querySelector('button[type="submit"]');
const hostname = window.location.hostname;
const isGitHubPages = hostname.endsWith("github.io")
    || hostname === "localhost"
    || hostname === "127.0.0.1";

if (form && isGitHubPages) {
    previewNotice.hidden = false;
    submitButton.disabled = true;
}
