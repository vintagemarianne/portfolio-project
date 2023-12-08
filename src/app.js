document.addEventListener('DOMContentLoaded', function () {
    let menuContainer = document.getElementById('menuContainer');
    let menuButton = document.querySelector('.menu-btn');

    menuButton.addEventListener('click', function () {
        menuContainer.style.display = menuContainer.style.display === 'flex' ? 'none' : 'flex';
    });

    menuContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') {
            menuContainer.style.display = 'none';
        }
    });

    document.addEventListener('click', function (event) {
        if (!menuContainer.contains(event.target) && event.target !== menuButton) {
            menuContainer.style.display = 'none';
        }
    });
});