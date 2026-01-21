async function prosesLogin() {
    const card = document.querySelector('.form-card');
    const btn = document.getElementById('login-btn');
    const namaInput = document.getElementById('nama');
    const nimInput = document.getElementById('nim');
    const errorMsg = document.getElementById('error-msg');

    // 1. Reset state
    errorMsg.style.display = "none";

    // 2. Validasi Input Kosong (dengan animasi shake)
    if (!namaInput.value.trim() || !nimInput.value.trim()) {
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
        return;
    }

    // Tampilan Loading
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.style.opacity = "0.8";
    btn.innerHTML = '<span>⏳ Memproses...</span>';

    const scriptURL = "https://script.google.com/macros/s/AKfycbz50G7-9UHAmONRJnem1avb5xmGpIeHzLIxFC7WlTPTX5B1DmG45iuBDVbm_TZy0z4/exec";

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({
                nama: namaInput.value,
                nim: nimInput.value
            })
        });

        const result = await response.json();

        if (result.status === "success") {
            // Animasi Sukses
            btn.style.background = "#2ecc71";
            btn.innerHTML = "Berhasil! ✓";
            
            card.style.transform = "scale(0.9)";
            card.style.opacity = "0";
            
            setTimeout(() => {
                window.location.href = "register.html";
            }, 600);
        } else {
            handleError(card, btn, errorMsg, originalText);
        }
    } catch (error) {
        handleError(card, btn, errorMsg, originalText, "Koneksi Bermasalah");
    }
}

function handleError(card, btn, errorEl, originalText, customMsg) {
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 500);
    
    errorEl.style.display = "block";
    if(customMsg) errorEl.innerText = customMsg;
    
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.innerHTML = originalText;
}