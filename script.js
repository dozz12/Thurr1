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

// Tampilkan halaman Login & Sign Up
function showLogin() {
    document.getElementById("login-page").style.display = "block";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("account-page").style.display = "none";
}

function showSignUp() {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "block";
    document.getElementById("account-page").style.display = "none";
}

function showAccount(email) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("signup-page").style.display = "none";
    document.getElementById("account-page").style.display = "block";
    document.getElementById("user-email").innerText = email;
}

// Simulasi database akun (hanya di memori, tidak disimpan permanen)
const users = {};

// Handle Sign Up
document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (users[email]) {
        alert("Email sudah terdaftar!");
    } else {
        users[email] = password;
        alert("Akun berhasil dibuat! Silakan login.");
        showLogin();
    }
});

// Handle Login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (users[email] && users[email] === password) {
        alert("Login berhasil!");
        showAccount(email);
    } else {
        alert("Email atau password salah!");
    }
});

// Logout
function logout() {
    alert("Anda telah logout!");
    showLogin();
}
