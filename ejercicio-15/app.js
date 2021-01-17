// Ejercicio 15

const numeroPartida = prompt("Ingresar número de partida");

const cantidadIncremento = prompt("Ingresa la cantidad a ir incrementando");

const incrementoUno = Number(numeroPartida) + Number(cantidadIncremento);
const incrementoDos = Number(numeroPartida) + Number(cantidadIncremento*2);
const incrementoTres = Number(numeroPartida) + Number(cantidadIncremento*3);
const incrementoCuatro = Number(numeroPartida) + Number(cantidadIncremento*4);
const incrementoCinco = Number(numeroPartida) + Number(cantidadIncremento*5);

alert(`Incremento 1 - Total: ${incrementoUno}`)
alert(`Incremento 2 - Total: ${incrementoDos}`);
alert(`Incremento 3 - Total: ${incrementoTres}`);
alert(`Incremento 4 - Total: ${incrementoCuatro}`);
alert(`Incremento 5 - Total: ${incrementoCinco}`);