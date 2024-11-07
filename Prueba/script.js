const eventos = [
    { nombre: "Trail en el mirador de la Perdiz", lugar: "Mirador de la Perdiz", fecha: "31/10/2024", asistentes: 30, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReU-8pGc6IK21fjakAARW-oik-koKW537wQ&s" },
    { nombre: "Concurso de la Mejor colada morada", lugar: "Estadio de San José", fecha: "31/10/2024", asistentes: 100, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjOQyVV2c-tgQjr_nXEluBIenPJFPKC5_XA&s" },
    { nombre: "Conmemoracion Día de los Difuntos", lugar: "Cementerio de San José", fecha: "02/11/2024", asistentes: 30, imagen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAACysrLn5+dlZWVBQUGOjo7s7Oyvr69cXFzV1dW9vb3k5OTBwcGJiYlHR0csLCx6enphYWFXV1fz8/PX19f5+fk7OzuEhIQzMzMiIiJLsMzlAAACCUlEQVR4nO3cwXKCMBRGYUVrihUqKCq+/4N2utBNUslFQn8y52wz3ORb6TjB1Wr6ivXYigSnSRFChPohRKgfwoyEpTvE5MrFCreRD2wRqoXQC6FcCL0QyuUL3fHD7+geyxkIN+tQm8cyQrkQItQPIUL9ECLUDyFC/RAi1A8hQv0QIpy7/aexohktbArrZvsJhHXwdFGZhfbqCYS78dvPINwhRIjwdQiXL2wjhe34LSYV9m1p6/T8sBoQ1ifj5LZPInxj2IDwfw7lD3vj68PkwhqhJYQxITSH0NQUQhcUuuEH/yqx8Lw31lVBYdVZB51nEobPO0cVQoQIESYPIUKECNOHECFChOlDiBAhwvTNJbw4a13wvJ15zmUmob38fxFGaA6hKYQxITSXRpj/XYx74F8DXnZtIoXN1Tr6nkRob2l3ouzlf68NIcKIECL8Lf/3LbovY9VttPBWWTfrJhDaW9p7T/YQItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RDmKHT9t1/vHssZCAdCKBdCL4RyIfRCKNdTWLpDTK5crNAcQpUQItQPIUL9tIQ/0nxeir4NYm4AAAAASUVORK5CYII=" },
    { nombre: "Concurso de Guaguas de pan", lugar: "Estadio de San José", fecha: "03/11/2024", asistentes: 100, imagen: "https://www.shutterstock.com/shutterstock/photos/1160516839/display_1500/stock-vector-ecuadorian-traditional-bread-babies-or-guaguas-de-pan-sticker-doodle-icon-1160516839.jpg" },
];

function renderEventos(eventos) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Limpiar el contenido previo

    eventos.forEach(evento => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('bloquehijo');

        eventDiv.innerHTML = `
            <div class="imagen">
                <img src="${evento.imagen}" alt="Imagen del evento">
            </div>
            <div class="textos2">
                <h2>${evento.nombre}</h2>
                <p>${evento.lugar}</p>
                <p>${evento.fecha}</p>
                <div class="textos">
                    <p class="asistentes">${evento.asistentes} asistentes</p>
                    <button class="btnAsistir" onclick="asistirEvento('${evento.nombre}')">Asistiré</button>
                </div>
            </div>
        `;
        container.appendChild(eventDiv);
    });
}

function asistirEvento(nombre) {
    const evento = eventos.find(e => e.nombre === nombre);
    if (evento) {
        evento.asistentes += 1; // Incrementar asistentes
        renderEventos(eventos); // Renderizar de nuevo los eventos para actualizar el contador
    }
}

document.getElementById('buscar').addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const input = document.querySelector('input[name="event-name"]').value.toLowerCase();
    const resultElement = document.getElementById('search-result');

    if (input.trim() === "") {
        resultElement.textContent = "Por favor, ingrese un nombre válido.";
        resultElement.style.color = "red";
        renderEventos(eventos);
    } else {
        const resultados = eventos.filter(evento =>
            evento.nombre.toLowerCase().includes(input)
        );

        if (resultados.length > 0) {
            resultElement.textContent = `Mostrando resultados para: "${input}"`;
            resultElement.style.color = "green";
            renderEventos(resultados);
        } else {
            resultElement.textContent = "No se encontraron coincidencias.";
            resultElement.style.color = "red";
            renderEventos([]);
        }
    }
}

// Render inicial de los eventos
renderEventos(eventos);