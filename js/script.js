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