const navBar = document.querySelector("nav");
const navItems = document.querySelector("nav ul");
const btnMenuOpen = document.getElementById("menu-btn-open");
const btnMenuClose = document.getElementById("menu-btn-close");

// Initial display
navBar.classList.remove("open");
navBar.classList.remove("close");

if (!navBar.classList.contains("open")) {
    btnMenuClose.style.display = "none";
}

btnMenuOpen.addEventListener("click", () => {
    navBar.classList.remove("close");
    navItems.style.display = "block";
    navBar.classList.add("open");

    btnMenuClose.style.display = "block";

})

btnMenuClose.addEventListener("click", () => {
    if (navBar.classList.contains("open")) {
        navBar.classList.remove("open");
        navItems.style.display = "none";
        navBar.classList.add("close");
        btnMenuClose.style.display = "none";

    }
})