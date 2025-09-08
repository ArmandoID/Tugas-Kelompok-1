const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const nis = document.getElementById("nis").value.trim();
    const tempatLahir = document.getElementById("tempat-lahir").value.trim();
    const tanggalLahir = document.getElementById("tanggal-lahir").value.trim();
    const alamat = document.getElementById("alamat").value.trim();

    if (nama === "") {
        alert("Nama harus diisi!");
        document.getElementById("nama").focus();
        return;
    }

    if (nis === "") {
        alert("NIS harus diisi!");
        document.getElementById("nis").focus();
        return;
    }

    if (tempatLahir === "") {
        alert("Tempat Lahir harus diisi!");
        document.getElementById("tempat-lahir").focus();
        return;
    }

    if (tanggalLahir === "") {
        alert("Tanggal Lahir harus diisi!");
        document.getElementById("tanggal-lahir").focus();
        return;
    }

    if (alamat === "") {
        alert("Alamat harus diisi!");
        document.getElementById("alamat").focus();
        return;
    }

    alert("Form telah disubmit berhasil!");
    // form.reset();
});