const toggleNavbar = document.querySelector("nav");
const btnMenuOpen = document.getElementById("menu-btn-open");
const btnMenuClose = document.getElementById("menu-btn-close");

btnMenuOpen.addEventListener("click", () => {
    toggleNavbar.style.display = "block";
});

btnMenuClose.addEventListener("click", () => {
    toggleNavbar.style.display = "none";
});