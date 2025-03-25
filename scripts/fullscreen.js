document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".image-container").forEach(container => {
        const img = container.querySelector("img");
        if (img) {
            img.addEventListener("click", () => openFullscreen(img));
        }
    });

    const fullscreenImg = document.getElementById("fullscreenImg");
    if (fullscreenImg) {
        fullscreenImg.addEventListener("click", closeFullscreen);
    }
});

function openFullscreen(img) {
    const fullscreenImgSrc = document.getElementById("fullscreenImgSrc");
    const fullscreenImg = document.getElementById("fullscreenImg");

    if (fullscreenImg && fullscreenImgSrc) {
        fullscreenImgSrc.src = img.src;
        fullscreenImg.classList.add("active");
    }
}

function closeFullscreen() {
    document.getElementById("fullscreenImg")?.classList.remove("active");
}
