// scripts/home.js

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navbar = document.querySelector("nav");

    hamburgerMenu.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});
