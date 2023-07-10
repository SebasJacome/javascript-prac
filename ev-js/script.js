const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('.resultado')
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputValues)



// btn.addEventListener('click', btnOnClick);

function sumarInputValues(event){
    console.log(event)
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = 'Resultado = ' + sumaInputs;
}

