const scriptURL = 'https://script.google.com/macros/s/AKfycbz7_qI-HPo0c2rd8b0hZPI-f6Gp5d9iM1Uy4dCwzxpuuwNgPo1IBvaIooxR4dZV2qU/exec';

// Ambil Data Otomatis
window.onload = function() {
    const list = document.getElementById('comment-list');
    list.innerHTML = "<p style='text-align:center; opacity:0.5;'>Memuat diskusi...</p>";

    fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
        list.innerHTML = "";
        data.forEach(row => {
            list.innerHTML += `
                <div class="comment-item fade-in">
                    <strong>${row[0]}</strong>
                    <p>${row[1]}</p>
                </div>`;
        });
        document.getElementById('comment-count').innerText = data.length;
    })
    .catch(() => list.innerHTML = "<p>Gagal memuat diskusi.</p>");
};

// Kirim Komentar
function tambahKomentar() {
    const nama = document.getElementById('username').value;
    const teks = document.getElementById('comment-text').value;
    const btn = document.querySelector('.btn-primary');

    if(!nama || !teks) return alert("Silakan lengkapi nama dan komentar.");

    btn.innerText = "Mengirim...";
    btn.disabled = true;

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ nama: nama, komentar: teks })
    })
    .then(() => {
        alert("Komentar berhasil dikirim!");
        location.reload();
    })
    .catch(() => {
        alert("Terjadi kesalahan.");
        btn.disabled = false;
        btn.innerText = "Kirim Komentar";
    });
}