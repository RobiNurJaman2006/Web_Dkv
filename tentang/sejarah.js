function openHistory(evt, historyName) {
    var i, tabcontent, tablinks;
    
    // Sembunyikan semua konten tab
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Hilangkan class 'active' dari semua tombol
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Tampilkan tab yang dipilih dan tambahkan class 'active' pada tombol
    document.getElementById(historyName).style.display = "block";
    evt.currentTarget.className += " active";
}
  function openHistory(evt, historyId) {
            const contents = document.querySelectorAll(".history-content");
            contents.forEach(content => content.classList.remove("active"));

            const tabs = document.querySelectorAll(".tab-link");
            tabs.forEach(tab => tab.classList.remove("active"));

            document.getElementById(historyId).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
function openHistory(evt, historyId) {
    // 1. Sembunyikan semua konten sejarah
    const contents = document.querySelectorAll(".history-content");
    contents.forEach(content => content.classList.remove("active"));

    // 2. Hapus status aktif dari semua tombol tab
    const tabs = document.querySelectorAll(".tab-link");
    tabs.forEach(tab => tab.classList.remove("active"));

    // 3. Tampilkan konten yang dipilih dan tandai tombol sebagai aktif
    document.getElementById(historyId).classList.add("active");
    evt.currentTarget.classList.add("active");
}