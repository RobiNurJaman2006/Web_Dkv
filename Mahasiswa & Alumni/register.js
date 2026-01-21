const scriptURL = "https://script.google.com/macros/s/AKfycbwCkeYS8YxZF2xOEFI8BIAVDWEHHxxcT3ea1czqp7qUzhH1Yqv8xwJEEj2Y7Hz_lHC2/exec";

// Fungsi ganti tema (Dark/Light)
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Fungsi memuat data dari Google Sheets
function loadData() {
    const tableBody = $("#alumniTableBody");
    tableBody.html('<tr><td colspan="7" class="text-center py-4 text-muted">⏳ Sinkronisasi data alumni...</td></tr>');
    
    $.getJSON(scriptURL + "?action=read")
        .done(function (data) {
            let html = "";
            if (!data || data.length === 0) {
                html = '<tr><td colspan="7" class="text-center">Database masih kosong.</td></tr>';
            } else {
                data.forEach((a) => {
                    html += `
                        <tr class="alumni-row">
                            <td class="fw-bold">${a.nama || "-"}</td>
                            <td><code>${a.nim || "-"}</code></td>
                            <td>${a.jenis_kelamin || "-"}</td>
                            <td>${a.tahun_lulus || "-"}</td>
                            <td><span class="badge" style="background: var(--primary)">${a.peminatan || "-"}</span></td>
                            <td>${a.pekerjaan || "-"}</td>
                            <td class="text-center">
                                ${a.portfolio ? `<a href="${a.portfolio}" target="_blank" class="btn btn-sm btn-outline-dark"><i class="fa-solid fa-up-right-from-square"></i></a>` : "-"}
                            </td>
                        </tr>`;
                });
            }
            tableBody.hide().html(html).fadeIn(600);
        })
        .fail(function () {
            tableBody.html('<tr><td colspan="7" class="text-danger text-center">❌ Gagal terhubung ke database.</td></tr>');
        });
}

$(document).ready(function () {
    // Proses Simpan Data
    $("#alumniForm").on("submit", function (e) {
        e.preventDefault();
        const btn = $("#submitBtn");
        const originalBtnText = btn.html();

        // Tampilan saat loading
        btn.prop("disabled", true).html('<i class="fa-solid fa-circle-notch fa-spin"></i> Memproses...');

        $.ajax({
            url: scriptURL,
            type: "POST",
            data: $(this).serialize(),
            success: function () {
                alert("Selamat! Data alumni Anda berhasil disimpan.");
                $("#alumniForm")[0].reset();
                loadData(); // Segarkan tabel
            },
            error: function () {
                alert("Terjadi kesalahan teknis. Silakan coba lagi nanti.");
            },
            complete: function() {
                btn.prop("disabled", false).html(originalBtnText);
            }
        });
    });

    // Fitur Pencarian Real-time
    $("#searchInput").on("keyup", function() {
        let keyword = $(this).val().toLowerCase();
        $("#alumniTableBody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1);
        });
    });

    // Load data pertama kali saat halaman dibuka
    loadData();
});