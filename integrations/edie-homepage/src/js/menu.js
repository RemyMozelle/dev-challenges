const burgerIcon = document.querySelector('#burger-icon');
const closeBtn = document.querySelector('.btn-close');
const menu = document.querySelector('#menu');
const logo = document.querySelector('.container-logo');
const container = document.querySelector('.container');

burgerIcon.addEventListener('click', function () {
    menu.classList.add('open');
    logo.classList.add('hidden');
    container.classList.add('overflow-hidden');
    burgerIcon.style.display = 'none';
    closeBtn.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
    menu.classList.remove('open');
    logo.classList.remove('hidden');
    container.classList.remove('overflow-hidden');
    burgerIcon.style.display = 'flex';
    closeBtn.style.display = 'none';

});