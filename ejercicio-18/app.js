// Ejercicio 18

const segundos = prompt("Ingresar una cantidad de tiempo en segundos");

const minutos = segundos / 60
const segundosResto = segundos % 60

const horas = minutos / 60
const minutosResto = minutos % 60

alert(`${segundos} segundos = ${horas.toFixed(0)} horas ${minutosResto.toFixed(0)} minutos y ${segundosResto} segundos`);