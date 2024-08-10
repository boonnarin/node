function toggleMenu() {
    var sidebar = document.getElementById('mySidebar');
    var main = document.getElementById('main');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        main.classList.remove('menu-open');
    } else {
        sidebar.style.display = 'block';
        main.classList.add('menu-open');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    var sidebar = document.getElementById("mySidebar");
    var openBar = document.getElementById("openBar");

    openBar.addEventListener('click', function() {
        toggleMenu();
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !openBar.contains(event.target)) {
            sidebar.style.display = 'none';
            document.getElementById('main').classList.remove('menu-open');
        }
    });
});
