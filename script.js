document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Menampilkan tombol scroll ke atas saat user scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Fungsi untuk scroll ke atas
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Validasi Formulir Kontak
    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Pesan berhasil dikirim!");
    });
});
