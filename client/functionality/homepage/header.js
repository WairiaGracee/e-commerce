document.addEventListener('DOMContentLoaded', function(){
    const header = document.getElementById('header')
    const navLinks = document.querySelector('.nav-links')
    const cart = document.querySelector('.carthide')
    const menu = document.getElementById('menu')
    const logo = document.querySelector('.logo')

    menu.addEventListener('click', function(){
        cart.classList.toggle('hide')
        navLinks.style.display = 'flex'
        menu.classList.toggle('hide')
        logo.classList.toggle('hide')
    })

})