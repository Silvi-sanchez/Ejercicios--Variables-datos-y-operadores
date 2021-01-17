// Ejercicio 14

const destinoOne = prompt(`Ingrese el destino 1`);
const duracionOne = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoOne}`);

const destinoTwo = prompt(`Ingrese el destino 2`);
const duracionTwo = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoTwo}`);

const destinoThree = prompt(`Ingrese el destino 3`);
const duracionThree = prompt(`Ingrese el tiempo estimado de vuelo para ${destinoThree}`);

const total = Number(duracionOne) + Number(duracionTwo) + Number(duracionThree);

alert(`Su vuelo tiene las siguientes escalas:
${destinoOne}: con duración de ${duracionOne} horas
${destinoTwo}: con duración de ${duracionTwo} horas
${destinoThree}: con duración de ${duracionThree} horas
La duración total de vuelo es ${total} horas`);