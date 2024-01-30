const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

h1.innerHTML = 'Patito <br> Feo '; // Introduce html
h1.innerText = 'Segundo Título'; //Solo texto
h1.getAttribute('class', 'rojo'); // Cambia la clase por rojo
h1.classList.add('violeta'); // Añade violeta en la clase
h1.classList.remove('rojo'); //Quita clase rojo

input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', './brk.jpeg');

pid.innerHTML = "";
pid.append(img);