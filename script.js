// ================= SEARCH TOGGLE =================
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const searchInput = searchBox.querySelector("input");

// tombol icon search
searchToggle.addEventListener("click", () => {
  searchBox.style.display =
    searchBox.style.display === "block" ? "none" : "block";
  searchInput.focus();
});

// ================= DATA MENU =================
const pages = {
  "overview": "tentang/overview.html",
  "sejarah": "tentang/sejarah.html",
  "visi": "tentang/visi-misi.html",
  "misi": "tentang/visi-misi.html",
  "struktural": "tentang/struktural.html",
  "dosen": "tentang/dosen.html",
  "fasilitas": "tentang/fasilitas.html",

  "kurikulum": "akademik/kurikulum.html",
  "final year": "akademik/final-year.html",
  "riset": "akademik/riset.html",
  "jurnal": "akademik/jurnal.html",

  "tugas akhir": "portofolio/Karyatugasakhir.html",
  "karya intelektual": "portofolio/Karyaintelektual.html",
  "prestasi": "portofolio/prestasi.html",

  "berita": "news/berita.html",
  "event": "news/event.html",

  "hima": "hima.html",
  "ukm": "ukm.html",
  "testimoni": "testimoni.html",
  "kadkv": "kadkv.html"
};

// ================= SEARCH ACTION =================
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    const keyword = searchInput.value.toLowerCase().trim();

    if (pages[keyword]) {
      window.location.href = pages[keyword];
    } else {
      alert("Data tidak ditemukan");
    }
  }
});

// ================= CLOSE WHEN CLICK OUTSIDE =================
document.addEventListener("click", function (e) {
  if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
    searchBox.style.display = "none";
  }
});
