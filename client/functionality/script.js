document.addEventListener("DOMContentLoaded", function(){
    const links = document.getElementById('links')
    const menuIcon = document.getElementById('menu')

    links.classList.add('hide')
    menuIcon.addEventListener('click', function(){
        links.classList.toggle('hide')
        menuIcon.classList.toggle('hide')
    })

})