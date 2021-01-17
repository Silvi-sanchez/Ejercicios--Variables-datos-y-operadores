// Ejercicio 06

const edadHumana = prompt("Ingresa una edad");

const e = Math.exp(1);

const result = Math.pow(e, (edadHumana -31) / 16);

alert(`La edad humana equivalente a edad canina es ${result.toFixed(2)}`);


//      OTRA MANERA DE RESOLVER

// 16 x In(edad cronologica  del perro) + 31 = edadHumana
//  e(age -31)/16

//    const edad = prompt("Ingrese una edad");

//    const expo = (edad -31)/ 16;
//    const edadPerro = Math.expo(expo);

//    alert(`La edad humana equivalente a edad canina es ${edadPerro}`);