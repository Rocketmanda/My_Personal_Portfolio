const hamburgerButton = document.querySelector(".hamburger-button");
const mobileNav = document.querySelector(".navbar-mobile")

hamburgerButton.addEventListener("click", () => {
    mobileNav.classList.toggle("display-none");
})