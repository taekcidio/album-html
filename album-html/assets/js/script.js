
const imagenes = [
    "photo1.jpg", "photo2.jpg", "photo3.jpg",
    "photo4.jpg", "photo5.jpg", "photo6.jpg",
    "photo7.jpg", "photo8.jpg", "photo9.jpg"
];


const album = document.getElementById('album');

imagenes.forEach((imagen, index) => {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = `
        <div class="card">
            <img src="assets/images/${imagen}" class="card-img-top" alt="Foto ${index + 1}">
            <div class="card-body">
                <p class="card-text">Esta es una tarjeta con una imagen del álbum.</p>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary btn-sm ver" data-id="${index}">Ver</button>
                    <button class="btn btn-secondary btn-sm editar" data-id="${index}">Editar</button>
                </div>
            </div>
        </div>
    `;
    album.appendChild(card);
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('ver')) {
        const id = e.target.getAttribute('data-id');
        alert(`Viendo la imagen ${id + 1}`);
    }
});


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('editar')) {
        const id = e.target.getAttribute('data-id');
        const nuevaDescripcion = prompt("Ingrese una nueva descripción:");
        if (nuevaDescripcion) {
            e.target.closest('.card').querySelector('.card-text').textContent = nuevaDescripcion;
        }
    }
});