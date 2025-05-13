document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    // Mostrar/ocultar menú al hacer clic
    menuBtn.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    // Ocultar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== menuBtn) {
            menu.style.display = 'none';
        }
    });
});


