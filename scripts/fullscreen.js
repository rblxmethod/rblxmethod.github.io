function openFullscreen(imgContainer) {
    const imgSrc = imgContainer.querySelector('img').src;
    document.getElementById('fullscreenImgSrc').src = imgSrc;
    document.getElementById('fullscreenImg').classList.add('active');
}

function closeFullscreen() {
    document.getElementById('fullscreenImg').classList.remove('active');
}
