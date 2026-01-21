const modal = document.getElementById('modalOverlay');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-btn');
const form = document.getElementById('aspirasiForm');

// GANTI DENGAN URL WEB APP HASIL DEPLOY APPS SCRIPT
const scriptURL = 'https://script.google.com/macros/s/AKfycbwaqQhrpSFCm3lIkxKXsb8Lg7TA9GwdiL5a0NLjfhOCBLsjoFM8Nnt4L5aMWMb_L_g/exec';

openBtn.onclick = () => modal.style.display = 'flex';
closeBtn.onclick = () => modal.style.display = 'none';

form.addEventListener('submit', e => {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    const status = document.getElementById('statusMessage');

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sedang Mengirim...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        status.innerHTML = "✅ Berhasil! Data telah masuk ke Spreadsheet.";
        status.className = "success";
        status.classList.remove('hidden');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Kirim Aspirasi";
        
        setTimeout(() => {
            modal.style.display = 'none';
            status.classList.add('hidden');
        }, 3000);
    })
    .catch(error => {
        alert("Terjadi kesalahan! Pastikan Deployment URL benar.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Kirim Aspirasi";
    });
});