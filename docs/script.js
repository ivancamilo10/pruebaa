// Obtener referencia a los botones
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');

// Función para manejar la acción del botón "Sí"
function handleSiButtonClick() {
    // Obtener la escala actual del botón
    let currentScale = parseFloat(siBtn.style.transform.replace('scale(', '').replace(')', '')) || 1;
    // Aumentar la escala gradualmente
    currentScale += 0.1;
    // Aplicar la nueva escala al botón
    siBtn.style.transform = `scale(${currentScale})`;
    // Deshabilitar el botón "No"
    noBtn.disabled = true;
}

// Asociar la función al evento click del botón "Sí"
siBtn.addEventListener('click', handleSiButtonClick);
