document.querySelector('.open-menu').addEventListener('click', function(e) {
    e.preventDefault();
    var menu = document.querySelector('.side-menu');
    var menuOverlay = document.querySelector('.overlay');
    if(menu.classList.contains('show')) {
        menu.classList.remove('show')
        menuOverlay.classList.remove('show')
    } else {
        menu.classList.add('show')
        menuOverlay.classList.add('show')
    }
});

document.getElementById('closeMenu').addEventListener('click',function() {
    var menu = document.querySelector('.side-menu');
    var ovaerlayMenu = document.querySelector('.overlay');

    if(menu.classList.contains('show')){
        menu.classList.remove('show');
        ovaerlayMenu.classList.remove('show');
    } else {
        menu.classList.add('show');
        ovaerlayMenu.classList.add('show');
    }
});

document.querySelector('.overlay').addEventListener('click',function() {
    var menu = document.querySelector('.side-menu')
    var overlayMenu = document.querySelector('.overlay')

    if(menu.classList.contains('show')){
        menu.classList.remove('show');
        overlayMenu.classList.remove('show');
    } else {
        menu.classList.add('show');
        overlayMenu.classList.add('show');
    }
});

window.addEventListener('resize', function() {
    var menu = document.querySelector('.side-menu');
    var overlayMenu = this.document.querySelector('.overlay');
    if(window.innerWidth >= 1200) {
        menu.classList.remove('show');
        overlayMenu.classList.remove('show');
    }
});

