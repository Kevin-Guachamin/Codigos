document.addEventListener('DOMContentLoaded', function() {
    const btnAgregar = document.getElementById('btnAgregar');
    const themeToggle = document.getElementById('themeToggle');
    const moviesContainer = document.getElementById('moviesContainer');

    btnAgregar.addEventListener('click', agregarPelicula);
    themeToggle.addEventListener('change', cambiarTema);

    function agregarPelicula() {
        const titulo = document.getElementById('titulo').value;
        const anio = document.getElementById('anio').value;
        const categoria = document.getElementById('categoria').value;
        const urlImagen = document.getElementById('urlImagen').value;

        // Validación de campos vacíos
        if (!titulo || !anio || !categoria || !urlImagen) {
            alert('Todos los campos son obligatorios');
            return;
        }

        // Validación del año
        if (parseInt(anio) > 2023) {
            alert('¿Ha filmado una película en el futuro?');
            return;
        }

        // Crear tarjeta de película
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${urlImagen}" alt="${titulo}" onerror="this.src='https://via.placeholder.com/200x300?text=Error+de+imagen'">
            <h3>${titulo}</h3>
            <p>Año: ${anio}</p>
            <p>Categoría: ${categoria}</p>
        `;

        moviesContainer.appendChild(movieCard);

        // Limpiar formulario
        document.getElementById('titulo').value = '';
        document.getElementById('anio').value = '';
        document.getElementById('categoria').value = '';
        document.getElementById('urlImagen').value = '';
    }

    function cambiarTema() {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
    }
});