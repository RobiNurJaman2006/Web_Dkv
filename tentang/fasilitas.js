document.addEventListener("DOMContentLoaded", () => {
    const frames = document.querySelectorAll(".image-frame");

    frames.forEach(frame => {
        const img = frame.querySelector("img");

        // Desktop hover
        frame.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.08) translateY(-6px)";
            img.style.transition = "transform 0.4s ease";
        });

        frame.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1) translateY(0)";
        });

        // Mobile touch
        frame.addEventListener("touchstart", () => {
            img.style.transform = "scale(1.08)";
            img.style.transition = "transform 0.3s ease";
        });

        frame.addEventListener("touchend", () => {
            img.style.transform = "scale(1)";
        });
    });
});
