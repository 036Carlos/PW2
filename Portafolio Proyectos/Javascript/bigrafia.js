document.addEventListener('DOMContentLoaded', () => {
    const contactoLink = document.querySelector('.contact a');
    contactoLink.addEventListener('click', (event) => {
        event.preventDefault(); 
        alert('¡Haz hecho clic en el enlace de contacto!');
    });

    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = 'Cambiar color de fondo';
    document.body.appendChild(changeColorButton);

    changeColorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
