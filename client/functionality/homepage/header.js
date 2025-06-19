document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.nav');
    const closeBtn = document.querySelector('.hiddenMenu');
    const menuBtn = document.getElementById('menu-display');
    const header = document.querySelector('.header');

    // Initially hide nav and close button
    nav.classList.remove('active'); // Only use .active for animation
    closeBtn.classList.add('hide');

    menuBtn.addEventListener('click', function () {
        nav.classList.add('active'); // Show nav
        closeBtn.classList.remove('hide');
        menuBtn.classList.add('hide');
    });

    closeBtn.addEventListener('click', function () {
        nav.classList.remove('active'); // Hide nav
        closeBtn.classList.add('hide');
        menuBtn.classList.remove('hide');
    });

    window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        document.querySelector('.nav').classList.add('active');
        document.querySelector('.nav').classList.remove('hide');
        document.querySelector('.hiddenMenu').classList.add('hide');
        document.getElementById('menu-display').classList.add('hide');
    }else {
        nav.classList.remove('active');
        closeBtn.classList.add('hide');
        menuBtn.classList.remove('hide');
    }
});

});
