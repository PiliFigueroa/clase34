// VARIABLES GLOBALES
// const btn = document.querySelector('#btn');
// const contenedor = document.querySelector('#contenedor-cajas');

// const crearCaja = () => {
//     const div = document.createElement('div');
//     div.style.width = '200px';
//     div.style.height = '200px';
//     div.style.backgroundColor = 'red';
//     div.style.margin = '20px';
//     contenedor.style.display = 'flex';
//     contenedor.appendChild(div);
// }

// btn.onclick = crearCaja;

// const pedirFrutas = () => {
//     let fruta = prompt('Ingrese una fruta');
//     const ul = document.createElement('ul');
//     const li = document.createElement('li');
//     li.innerText = fruta;
//     ul.appendChild(li);
//     contenedor.appendChild(ul);
// }

// btn.onclick = pedirFrutas;

// const contenedorFrutas = document.querySelector('#contenedor-frutas')
// const frutas = ["naranja", "banana", "pera", "manzana"];
// console.log(frutas[3])

//    variable

// const listarFrutas = () => {
//     for (let i = 0; i < 5; i++) {
//         let fruta = prompt('Ingrese una fruta')
//         let li = document.createElement('li');
//         li.innerText = fruta;
//         contenedorFrutas.appendChild(li);
//     }
// }

// const botones = document.querySelectorAll('.btn');
// const color = ['red', 'green', 'blue', 'yellow', 'brown']

// for (let i = 0; i < botones.length; i++) {
//     botones[i].onclick = () => {
//         botones[i].style.backgroundColor = `${color[i]}`
//     }
// }

/* EJERCICIO 1
Crear una pagina con un formulario de un input y un boton enviar. El input debe admitir solo 1 caracter en el cual el usuario ingresara una letra.
Si la letra es una vocal, al hacer click en enviar se debe imprimir un texto en verde que diga "Vocal detectada".
Si no es una vocal, se debe imprimir un texto en rojo que diga "Consonante detectada".
- Nota: si utilizas un if, solo puede haber if y else, no utilizar elseif. Recordar operadores logicos.
*/

/* EJERCICIO 2
Crear un programa en el que se pueda ingresar por un input una temperatura en celcius. Al hacer click en un boton "Convertir" se debe
imprimir en pantalla su equivalente en farengeit.
*/

/* EJERCICIO 3
Crear un programa que pida al usuario ingresar la temperatura actual. Al ingresarla se debe imprimir un texto que diga
"La temperatura es (temperatura ingresada por el usuario)". El color del texto dependera de la temperatura:
- de -50 a 15 en AZUL
- de 15 a 21 en AMARILLO
- de 21 a 30 en NARANJA
- de 30 a 40 en ROJO
*/

/* EJERCICIO 4
Crear un programa con un input de tipo color. Segun el color que elige el usuario, se debe cambiar el color de fondo del documento al
color que eligio al usuario.
*/

/* EJERCICIO 5
Crear un programa que cambie de color una caja de 200x200 pixeles al hacer click en la misma. Inicialmente, la caja sera roja. Al darle click
debe cambiar a azul, al darle click otra vez, cambiar a verde, y por ultimo a amarillo.
*/