document.getElementById('menu').addEventListener('click', function() {
    document.getElementById('off_screen_menu').classList.add('active');
});

document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('off_screen_menu').classList.remove('active');
});