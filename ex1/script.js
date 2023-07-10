const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// h1.innerText = 'Yes king <br> Amazing'
// let variable = h1.getAttribute('pantalla')
// console.log(variable);
// h1.setAttribute('class')
h1.classList.add('rojo')
h1.classList.remove('verde')
// h1.classList.toggle('verde')
// h1.classList.contains('verde')

input.value = ' '
input.placeholder = 'Introduzca un numero'

const img = document.createElement('img');
img.setAttribute('src', 'https://static.wikia.nocookie.net/pokemon-opalo-por-ericlostie/images/3/34/094.png/revision/latest?cb=20220313114504&path-prefix=es')
pid.replaceWith(img);