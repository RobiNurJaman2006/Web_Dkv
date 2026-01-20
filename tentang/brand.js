document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            // Tambahkan animasi fade-in
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        // State awal sebelum animasi
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "all 0.8s ease-out";
        observer.observe(section);
    });
});
 /*tipografi*/
 // Tambahkan ke file brand.js
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.download-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});
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
