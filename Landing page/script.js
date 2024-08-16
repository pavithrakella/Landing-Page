const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn && navLinks && menuBtnIcon) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
}

// Ensure DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const headerImage = document.querySelector(".header_image");
  headerImage.classList.add("open");

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    opacity: 0, // Start fully transparent for a fade-in effect
    easing: "ease-in-out"
  };

  // Apply ScrollReveal animations
  ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "left", // Animation comes from the left
    distance: "100px" // How far the element moves
  });

  ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1000, // Staggered delay for different elements
  });

  ScrollReveal().reveal(".header-content form", {
    ...scrollRevealOption,
    delay: 1500, // Further delay for the form
  });

  ScrollReveal().reveal(".header_image_card", {
    duration: 1000,
    interval: 500,
    delay: 2000, // Delay for cards to appear after other elements
  });
});
