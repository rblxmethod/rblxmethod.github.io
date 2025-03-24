document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container img");
    const observerOptions = { root: null, threshold: 0.2 };

    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                fadeInOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(img => fadeInOnScroll.observe(img));
});
