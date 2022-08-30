const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');
const btnNav = document.querySelector('.btn-nav');
const navbar = document.querySelector('.nav-section');

// * Hamburger Menu for Mobile Devices
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    menuList.classList.toggle('menu-list-active');
    btnNav.classList.toggle('btn-nav-active');
});

// * Add shadows to navbar when scrolling
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.style.boxShadow = 'rgba(0, 0, 0, 0.85) 0px 1px 4px';
    } else {
        navbar.style.boxShadow = 'none';
    }
}

// * Send Message to WhatsApp
function send_message() {
    let nim = document.getElementById('nim').value;
    let name = document.getElementById('nama').value;
    let kelas = document.getElementById('kelas').value;
    let noWA = document.getElementById('noWA').value;
    let alamat = document.getElementById('alamat').value;
    var send = window.open('https://api.whatsapp.com/send?phone=6288806923500&text=Hai+kak%2C+saya+ingin+mendaftar+sebagai+bagian+dari+UPT+Komputer.%0D%0ABerikut+data-data+yang+saya+lampirkan+%3A%0D%0A1.+NIM+%3A%0D%0A'+nim+'2.+Nama+Lengkap+%3A%0D%0A'+name+'3.+Kode+Kelas+%3A%0D%0A'+kelas+'4.+No+WA+%3A%0D%0A'+noWA+'5.+Alamat+%3A'+alamat,'_blank');
    send.focus();
}