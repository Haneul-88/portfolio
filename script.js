const toggleButton = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const mobileLinks = document.getElementById('mobile-links');
const body = document.body;

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });
}

if (menuToggle && mobileLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = mobileLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
}
