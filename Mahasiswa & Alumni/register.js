const scriptURL =
  "https://script.google.com/macros/s/AKfycbwCkeYS8YxZF2xOEFI8BIAVDWEHHxxcT3ea1czqp7qUzhH1Yqv8xwJEEj2Y7Hz_lHC2/exec";

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function loadData() {
  $.getJSON(scriptURL + "?action=read")
    .done(function (data) {
      let html = "";

      if (!data || data.length === 0) {
        html = <tr><td colspan="7" class="text-center">Data kosong</td></tr>;
      } else {
        data.forEach((a) => {
          html += `<tr>
            <td>${a.nama || ""}</td>
            <td>${a.nim || ""}</td>
            <td>${a.jenis_kelamin || ""}</td>
            <td>${a.peminatan || ""}</td>
            <td>${a.tahun_lulus || ""}</td>
            <td>${a.pekerjaan || ""}</td>
            <td>
              ${
                a.portfolio
                  ? <a href="${a.portfolio}" target="_blank">Lihat</a>
                  : ""
              }
            </td>
          </tr>`;
        });
      }

      $("#alumniTableBody").html(html);
    })
    .fail(function () {
      $("#alumniTableBody").html(
        <tr><td colspan="7" class="text-danger text-center">Gagal memuat data</td></tr>
      );
    });
}

$(document).ready(function () {
  $("#alumniForm").on("submit", function (e) {
    e.preventDefault();

    $.ajax({
      url: scriptURL,
      type: "POST",
      data: $(this).serialize(),
      success: function () {
        alert("Data berhasil disimpan");
        $("#alumniForm")[0].reset();
        loadData();
      },
      error: function () {
        alert("Gagal menyimpan data");
      },
    });
  });

  loadData();
});