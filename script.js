document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transition = "opacity 2s";
        setTimeout(() => {
            element.style.opacity = 1;
        }, 500);
    });
});

window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
        } else {
            element.style.opacity = 0;
            element.style.transform = "translateY(20px)";
        }
    });
});

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("active");
}
