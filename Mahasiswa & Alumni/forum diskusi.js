const scriptURL = 'https://script.google.com/macros/s/AKfycbz7_qI-HPo0c2rd8b0hZPI-f6Gp5d9iM1Uy4dCwzxpuuwNgPo1IBvaIooxR4dZV2qU/exec';

window.onload = function() {
    fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
        const list = document.getElementById('comment-list');
        list.innerHTML = "";
        data.forEach(row => {
            list.innerHTML += `
                <div class="comment-item fade-in">
                    <strong>${row[0]}</strong>
                    <p>${row[1]}</p>
                </div>`;
        });
        document.getElementById('comment-count').innerText = data.length;
    });
};

function tambahKomentar() {
    const nama = document.getElementById('username').value;
    const teks = document.getElementById('comment-text').value;
    const btn = document.querySelector('.btn-creative');

    if(!nama || !teks) return alert("Yuk, isi nama dan komentarnya dulu!");

    btn.disabled = true;
    btn.innerHTML = "<span>Memproses...</span>";

    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ nama: nama, komentar: teks })
    })
    .then(() => {
        location.reload();
    })
    .catch(() => {
        btn.disabled = false;
        btn.innerHTML = "<span>Kirim Komentar</span>";
    });
}