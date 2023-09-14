// Función para abrir un modal específico
function openModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.style.display = 'block';
}

// Función para cerrar un modal específico
function closeModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.style.display = 'none';
}

