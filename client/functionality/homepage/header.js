document.addEventListener('DOMContentLoaded', function(){
    const overlay = document.querySelector('.overlay');
    const header = document.getElementById('header')
    const navLinks = document.querySelector('.nav-links')
    const cart = document.querySelector('.carthide')
    const menu = document.getElementById('menu')
    const logo = document.querySelector('.logo')

    menu.addEventListener('click', function(){
        overlay.classList.add('active');
        navLinks.classList.add('active');
        logo.classList.add('hide');
        cart.classList.add('hide');
    })

    // Click outside sidebar to close
    overlay.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target)) {
        overlay.classList.remove('active');
        navLinks.classList.remove('active');
        logo.classList.remove('hide');
        cart.classList.remove('hide');
        }
    });

})