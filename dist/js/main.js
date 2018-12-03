// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item"); // Similar to an array

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // If menu is not shown then show the menu. !showMenu <=> showMenu == false
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show")); // It will loop through items and then add show class to each item

    // Set menu state
    // Now menu should be open
    showMenu = true;
  } else {
    // Hide the menu
    // When we click the menu it should remove all these classes
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show")); // It will loop through items and then remove show class from each item

    // Set menu state
    showMenu = false;
  }
}
