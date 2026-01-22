async function prosesLogin() {
    /*Menghubungkan JavaScript dengan HTML Mengambil*/
    const card = document.querySelector('.form-card');
    const btn = document.getElementById('login-btn');
    const namaInput = document.getElementById('nama');
    const nimInput = document.getElementById('nim');
    const errorMsg = document.getElementById('error-msg');

    // 1. Reset state
    /*Menyembunyikan pesan error setiap login dimulai
Supaya error lama tidak muncul lagi*/
    errorMsg.style.display = "none";

    // 2. Validasi Input Kosong (dengan animasi shake)
    if (!namaInput.value.trim() || !nimInput.value.trim()) {
        card.classList.add('shake');
/*Memberi efek visual jika input kosong
Login dihentikan jika validasi gagal*/
        setTimeout(() => card.classList.remove('shake'), 500);
        return;
    }

    // Tampilan Loading
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.style.opacity = "0.8";
    btn.innerHTML = '<span>⏳ Memproses...</span>';

    const scriptURL = "https://script.google.com/macros/s/AKfycbz50G7-9UHAmONRJnem1avb5xmGpIeHzLIxFC7WlTPTX5B1DmG45iuBDVbm_TZy0z4/exec";

    /*Data nama dan NIM dikirim ke backend untuk dicek*/
    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({
                nama: namaInput.value,
                nim: nimInput.value
            })
        });
/*Backend mengirim hasil dalam format JSON Biasanya berisi status sukses atau gagal*/
        const result = await response.json();
/*Tombol berubah warna hijau Muncul teks berhasil Card menghilang User diarahkan ke halaman berikutnya*/
        if (result.status === "success") {
            // Animasi Sukses
            btn.style.background = "#2ecc71";
            btn.innerHTML = "Berhasil! ✓";
            
            card.style.transform = "scale(0.9)";
            card.style.opacity = "0";
            /*Jika login berhasil, user diarahkan ke halaman selanjutnya*/
            setTimeout(() => {
                window.location.href = "register.html";
            }, 600);
        } 
        /*Jika gagal: Menjalankan fungsi handleError() Tidak langsung menulis ulang kode error*/
        else {
            handleError(card, btn, errorMsg, originalText);
        }
        /*Menangani jika server tidak bisa diakses Memberi pesan error yang jelas ke user*/
    } catch (error) {
        handleError(card, btn, errorMsg, originalText, "Koneksi Bermasalah");
    }
}
/*Menangani semua error login Supaya kode lebih rapi dan tidak berulang*/
function handleError(card, btn, errorEl, originalText, customMsg) {
    /*animasi error*/
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
    /*pesan error*/
    errorEl.style.display = "block";
    if(customMsg) errorEl.innerText = customMsg;
    
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.innerHTML = originalText;
}


/*JavaScript ES6

async / await

fetch API

DOM Manipulation

JSON*/