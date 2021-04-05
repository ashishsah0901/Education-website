const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const rightNav = document.querySelector('.rightNav');
const navList = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})