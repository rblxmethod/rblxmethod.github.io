document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    const fullscreenImg = document.getElementById("fullscreenImg");
    const fullscreenImgSrc = document.getElementById("fullscreenImgSrc");

    if (images.length > 0) {
        images.forEach(img => {
            img.addEventListener("click", () => openFullscreen(img));
        });
    }

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
    const fullscreenImg = document.getElementById("fullscreenImg");
    
    if (fullscreenImg) {
        fullscreenImg.classList.remove("active");
    }
}
