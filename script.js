const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
    }
  });
}

const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
const journeyField = document.querySelector("#journey");

if (contactForm) {
  const requestedJourney = new URLSearchParams(window.location.search).get("journey");
  if (requestedJourney && journeyField && [...journeyField.options].some((option) => option.value === requestedJourney)) {
    journeyField.value = requestedJourney;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const name = new FormData(contactForm).get("name").trim();
    formNote.textContent = `Thanks, ${name}. Your enquiry is ready. Connect this form to an email service to receive messages.`;
  });
}
