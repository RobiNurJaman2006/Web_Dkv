// ================= 1. PENGATURAN NAVIGASI & DROPDOWN =================
document.addEventListener("DOMContentLoaded", function() {
    // Dropdown Hover Effect untuk Perangkat Touchscreen
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("touchstart", function(e) {
            // Memungkinkan user melihat submenu di HP sebelum klik link utama
            this.classList.toggle("show");
        });
    });

    // Menandai menu aktif berdasarkan URL halaman saat ini
    const currentPath = window.location.pathname.split("/").pop();
    const menuLinks = document.querySelectorAll(".menu li a");
    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});

// ================= 2. SCROLL REVEAL (Animasi Muncul saat Scroll) =================
// Fungsi ini membuat elemen muncul halus saat user men-scroll ke bawah
const revealElements = () => {
    const sections = document.querySelectorAll("section, .timeline-item, .misi-item");
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.filter = "blur(0)";
        }
    });
};

// Pasang efek awal pada CSS untuk elemen yang akan di-reveal
document.querySelectorAll("section, .timeline-item").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.filter = "blur(5px)";
    el.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
});

window.addEventListener("scroll", revealElements);

// ================= 3. FITUR TAB SEJARAH (SMOOTH TRANSITION) =================
function openHistory(evt, historyId) {
    const contents = document.querySelectorAll(".history-content");
    const tabs = document.querySelectorAll(".tab-link");

    // Efek memudar keluar sebelum berganti tab
    contents.forEach(content => {
        content.style.opacity = "0";
        setTimeout(() => {
            content.classList.remove("active");
            content.style.display = "none";
        }, 300);
    });

    tabs.forEach(tab => tab.classList.remove("active"));

    // Munculkan konten baru dengan delay agar halus
    setTimeout(() => {
        const activeContent = document.getElementById(historyId);
        if (activeContent) {
            activeContent.style.display = "block";
            activeContent.classList.add("active");
            setTimeout(() => {
                activeContent.style.opacity = "1";
            }, 50);
        }
        evt.currentTarget.classList.add("active");
    }, 350);
}

// ================= 4. EFEK HEADER DYNAMIS =================
window.addEventListener('scroll', function() {
    const header = document.getElementById("mainHeader");
    
    // Perubahan Header saat scroll
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});