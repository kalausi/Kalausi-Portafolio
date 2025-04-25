

  // Código

const toggle = document.querySelector('.menu-toggle');
const icon = toggle.querySelector('.icon');
const navMenu = document.querySelector('nav.menu');

toggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Cambiar el ícono según el estado
  if (navMenu.classList.contains('active')) {
    icon.textContent = '✕'; // icono de cerrar
  } else {
    icon.textContent = '☰'; // icono de hamburguesa
  }
});