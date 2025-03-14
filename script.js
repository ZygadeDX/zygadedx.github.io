document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transition = "opacity 2s";
        setTimeout(() => {
            element.style.opacity = 1;
        }, 500);
    });
});