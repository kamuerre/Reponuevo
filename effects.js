// Crear el resplandor
const glow = document.createElement('div');
glow.classList.add('highlight');
document.body.appendChild(glow);

// Detectar el movimiento del mouse
document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    // Posicionar el resplandor
    glow.style.left = `${x - 75}px`; // Centrar en el mouse
    glow.style.top = `${y - 75}px`;
});

// Revelar texto al pasar el mouse
const container = document.getElementById('container');
container.addEventListener('mousemove', () => {
    container.style.color = '#00FF41'; // Texto visible
});
