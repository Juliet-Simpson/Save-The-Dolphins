const form = document.querySelector("[data-contact-form]");
const previewNotice = form?.querySelector("[data-preview-notice]");
const submitButton = form?.querySelector('button[type="submit"]');

if (form?.hasAttribute("data-netlify")) {
    previewNotice.hidden = false;
    submitButton.disabled = true;
}
