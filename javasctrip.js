document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".image-box img");
    image.onload = () => {
        image.classList.add("loaded");
    };
});
