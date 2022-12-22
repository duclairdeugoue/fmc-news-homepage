const navBar = document.querySelector("nav");
const navItems = document.querySelector("nav ul");
const btnMenuOpen = document.getElementById("menu-btn-open");
const btnMenuClose = document.getElementById("menu-btn-close");

// Initial display
navBar.classList.remove("open");
navBar.classList.remove("close");

if (!navBar.classList.contains("open")) {
    console.log(" close btn is not shown ------------- ");
    btnMenuClose.style.display = "none";
}

btnMenuOpen.addEventListener("click", () => {
    console.log("class name is added ++++++++++++");
    navBar.classList.remove("close");
    navItems.style.display = "block";
    navBar.classList.add("open");

    btnMenuClose.style.display = "block";

})

btnMenuClose.addEventListener("click", () => {
    if (navBar.classList.contains("open")) {
        console.log("class name is removed ------------- ");
        navBar.classList.remove("open");
        navItems.style.display = "none";
        navBar.classList.add("close");
        btnMenuClose.style.display = "none";

    }
})