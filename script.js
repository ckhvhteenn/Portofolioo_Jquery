let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle menu saat icon diklik
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Ubah ikon menjadi silang
    navbar.classList.toggle('active'); // Tampilkan atau sembunyikan navbar
}

// Tutup menu jika klik di luar navbar
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

const contactForm = document.querySelector(".contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.");
        contactForm.reset();
    });
}
;

