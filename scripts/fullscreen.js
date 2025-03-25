document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    const fullscreenImg = document.getElementById("fullscreenImg");
    const fullscreenImgSrc = document.getElementById("fullscreenImgSrc");

    images.forEach(img => {
        img.addEventListener("click", () => openFullscreen(img));
    });

    if (fullscreenImg) {
        fullscreenImg.addEventListener("click", closeFullscreen);
    }
});

function openFullscreen(img) {
    const fullscreenImg = document.getElementById("fullscreenImg");
    const fullscreenImgSrc = document.getElementById("fullscreenImgSrc");

    if (fullscreenImg && fullscreenImgSrc) {
        fullscreenImgSrc.src = img.src;
        fullscreenImg.classList.add("active");
    }
}

function closeFullscreen() {
    document.getElementById("fullscreenImg")?.classList.remove("active");
}
