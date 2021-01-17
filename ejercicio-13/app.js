// Ejercicio 13

// Velocidad = distancia/tiempo   
// Tiempo = distancia /velocidad

const pie = 5;
const bici = 10;
const auto = 80;

const distancia = prompt("Ingrese la distancia de su viaje en km");

alert(`Su viaje de ${distancia} le tomará:
    a pie: ${distancia/pie} horas,
    en bici ${distancia/bici} horas, 
    en auto ${distancia/auto} horas`)