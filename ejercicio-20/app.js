// Ejercicio 20

const dosPersonas = prompt("Ingresar cuantas habitaciones tiene un hotel para dos personas");
const tresPersonas = prompt("Ingresar cuantas habitaciones tiene un hotel para tres personas");
const cuatroPersonas = prompt("Ingresar cuantas habitaciones tiene un hotel para cuatro personas");

const result = (dosPersonas * 2) + (tresPersonas * 3) + (cuatroPersonas * 4)

alert(`El máximo de huéspedes que puede albergar el hotel es de ${result} personas`);