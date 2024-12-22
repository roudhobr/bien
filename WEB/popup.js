// Fungsi untuk menampilkan popup dan gambar produk yang diklik
function showPopup(imgElement) {
    const popup = document.getElementById("imagePopup");
    const popupImg = document.getElementById("popupImg");

    popupImg.src = imgElement.src; // Setel gambar popup dengan gambar yang diklik
    popup.style.display = "block";  // Tampilkan popup
}

// Fungsi untuk menutup popup
function closePopup() {
    const popup = document.getElementById("imagePopup");
    popup.style.display = "none"; // Sembunyikan popup
}
