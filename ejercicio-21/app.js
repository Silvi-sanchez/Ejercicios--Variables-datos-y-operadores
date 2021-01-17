// Ejercicio 21

let totalService = 3;
let moneyDisponible = 0;

const dineroTotal = prompt(`Ingrese dinero disponible`);


const servicioNameOne = prompt(`${totalService} servicios disponibles y su saldo disponible es: ${dineroTotal};
   Ingrese nuevo servicio`);
const montoOne = prompt(`Ingrese monto a pagar del servicio`);

moneyDisponible = dineroTotal - montoOne;

const servicioNameTwo = prompt(`${totalService = totalService - 1} servicios disponibles y su saldo disponible es: ${moneyDisponible};
   Ingrese nuevo servicio`);
const montoTwo = prompt(`Ingrese monto a pagar del servicio`);

moneyDisponible = moneyDisponible - montoTwo;

const servicioNameThree = prompt(`${totalService = totalService - 1} servicios disponibles y su saldo disponible es: ${moneyDisponible};
   Ingrese nuevo servicio`);
const montoThree = prompt(`Ingrese monto a pagar del servicio`);

moneyDisponible = moneyDisponible - montoThree;

alert(`Servicios a Pagar:
${servicioNameOne}: ${montoOne}
${servicioNameTwo}: ${montoTwo}
${servicioNameThree}: ${montoThree}
Dinero Disponible: ${moneyDisponible}`);