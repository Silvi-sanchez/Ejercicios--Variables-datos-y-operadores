// Ejercicio 22

let montoUno = 900;
let montoDos = 1200;
let montoTres = 1500;

const productoUno = prompt(`Ingrese la cantidad que desea comprar de camisas`);
const productoDos = prompt(`Ingrese la cantidad que desea comprar de remeras`);
const productoTres = prompt(`Ingrese la cantidad que desea comprar de pantalones`);

const costoTotal = (productoUno * montoUno) + (productoDos * montoDos) + (productoTres * montoTres) 

const cuotas = prompt(`El precio total es de ${costoTotal} pesos. 
Especifique en cuantas cuotas desea realizar el pago.`);

const valorCuotas = (costoTotal / cuotas)

alert(`La compra total por la cantidad de ${productoUno} camisas, ${productoDos} remeras y ${productoTres} pantalones tiene un costo de ${costoTotal} pesos. 
Abonando en ${cuotas} cuotas, con un valor cada una de ${valorCuotas} pesos`);