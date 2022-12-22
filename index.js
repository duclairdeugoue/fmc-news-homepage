const navBar = document.querySelector("nav");
// const navItems = document.querySelector("nav ul");
const btnMenuOpen = document.getElementById("menu-btn-open");
const btnMenuClose = document.getElementById("menu-btn-close");

// btnMenuOpen.addEventListener("click", () => {
//     navBar.style.display = "block";
// });

// btnMenuClose.addEventListener("click", () => {
//     navBar.style.display = "none";
// });

// navBar.style.display = "none";

if (!navBar.classList.contains("open")) {
    console.log(" close btn is not shown ------------- ");
    btnMenuClose.style.display = "none";
}


btnMenuOpen.addEventListener("click", () => {
    console.log("Class name is added ++++++++++++");
    navBar.classList.remove("close");
    navBar.classList.add("open");

    btnMenuClose.style.display = "block";

})

btnMenuClose.addEventListener("click", () => {
    if (navBar.classList.contains("open")) {
        console.log("Class name is removed ------------- ");
        navBar.classList.remove("open");
        navBar.classList.add("close");
        btnMenuClose.style.display = "none";

    }
})