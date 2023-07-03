const toogleBtn = document.querySelector('.navber_toogleBtn');
const menu = document.querySelector('.navber_menu');
const icons = document.querySelector('.navber_lcons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});