// Ejercicio 17

const primerNumero = prompt("Ingresar el primer número");

const segundoNumero = prompt("Ingresar el segundo número");

const restoDivision = (primerNumero % segundoNumero);

if (restoDivision === 0){
    alert(`El primer valor es múltiplo del segundo`);
}else{
    alert(`El primer valor no es múltiplo del segundo`);
}

