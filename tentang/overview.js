// ================= DATA PRESTASI =================
const dataPrestasi = [
    "4. 10 besar Indonesian Film Festival (IFF) Australia 2021",
    "5. Finalis Lomba Poster LIDM 2021",
    "6. Juara 2 ASEAN DIGITAL PHOTOGRAPHY, Filipina 2023",
    "7. Finalis Divisi Animasi – GEMASTIK 2023",
    "8. World 100 Poster Masters Nominations Exhibition, China 2025"
];

function showAllAchievements() {
    const list = document.getElementById('prestasiList');
    if (list) {
        dataPrestasi.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.style.animation = "fadeIn 0.5s forwards";
            list.appendChild(li);
        });
    }
    const btn = document.getElementById('btnLoadMore');
    if (btn) btn.style.display = 'none';
}

// ================= SCROLL EFFECTS (Header & Sidebar) =================
window.addEventListener('scroll', function() {
    const header = document.getElementById("mainHeader");
    const sidebar = document.querySelector('.sidebar-right'); // Pastikan class sesuai HTML
    
    // 1. Efek Header
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.padding = "5px 0";
        header.style.backgroundColor = "rgba(255, 255, 255, 1)";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.padding = "15px 0";
        header.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        header.style.boxShadow = "none";
    }

    // 2. Logika Sidebar Sticky
    let scrollPos = window.scrollY;
    if (sidebar) {
        if (scrollPos > 400) {
            sidebar.style.position = 'sticky';
            sidebar.style.top = '100px';
        }
    }
});

// ================= ACCORDION & SEARCH (Loaded) =================
document.addEventListener("DOMContentLoaded", function() {
    // 1. Accordion Logic
    const buttons = document.querySelectorAll(".accordion-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const content = this.nextElementSibling;

            if (content.style.maxHeight && content.style.maxHeight !== "0px") {
                content.style.maxHeight = "0px";
                content.style.paddingTop = "0";
                content.style.paddingBottom = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.paddingTop = "10px";
                content.style.paddingBottom = "10px";
            }
        });
    });

    // 2. Search Toggle (Sesuai kode search kamu sebelumnya)
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-box input"); // Pastikan ada di HTML

    if (searchIcon && searchInput) {
        searchIcon.addEventListener("click", function() {
            // Logika munculkan kotak search
            console.log("Search clicked");
        });
    }
});