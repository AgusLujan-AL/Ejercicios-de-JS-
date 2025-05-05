/* Ejercicios
/////////////////////////////////////////////

Ejercicio 1
Haga una función que elimine el primer elemento del arreglo.

function EliminarPrimerElementoArray(array){
    array.shift; () 
    return array;
}
const descensoArray=[26,06,2011];

EliminarPrimerElementoArray(descensoArray);

console.log(descensoArray);
//////////////////////////////////////////////

Ejercicio 2
Haga una función que solo reciba arreglos con más de 5 elementos y luego elimine los últimos 3. En caso de recibir un arreglo de menos de 5 elementos, mostrar en pantalla un mensaje de error.

function eliminarUltimosTres(array) {
    if (array.length > 5) { //verifica si el array es de mas de 5 elementos (array.length vista en clase)
        array.splice(-3);  // Elimina los últimos 3 elementos
        return array;
    } else {
        console.log("Error: el arreglo debe tener ,minimo, 5 elementos.");
        return null; 
    }
}

//Funcional;
const SiFuncionaArray=[26,06,2011,2,3,6];
eliminarUltimosTres(SiFuncionaArray);
console.log(SiFuncionaArray);

//No funcional;
const NoFuncionaArray=[26,06,2011];
eliminarUltimosTres(NoFuncionaArray);
console.log(NoFuncionaArray);
//////////////////////////////////////////////

Ejercicio 3
Haga una función que reciba un arreglo y un número. Tenemos que sumarle dicho número a cada elemento del arreglo y devolver el arreglo modificado.

function NumSumaArray(num,array){
    for(let=i = 0; i<array.length; i++)
        array[i]+= num;
    }
return array;

const arrayNumerico=[1,2,3,4,5];
const resultado = NumSumaArray(6, arrayNumerico);
console.log(resultado); ///afecta al array original, podria hacer una copia del array original y operar sobre la copia.
//////////////////////////////////////////////////

Ejercicio 4
Haga una función que reciba un número y devuelva un arreglo que tenga el tamaño del número recibido.
El contenido del arreglo deben ser números desde el 1 hasta el número recibido. (1 a n)

function crearArray(n) {
    const array = []; ////es un array vacio

    for (let i = 1; i <= n; i++) {
        array.push(i);  // agrega el número actual al array
    }

    return array;  // devuelve el array completo
}

const resultado = crearArray(15);
console.log(resultado) /////=> deberia crear un array de hasta 15 unidades, lo que seria del 1 al 15.
///////////////////////////////////////////////////

Ejercicio 5
Hay un arreglo con varios números donde todos son iguales excepto uno. Haga una función que encuentre qué número es el distinto.

function findUniqF(array) {
    for (let i = 0; i < array.length; i++) { ////verifica que no haga ciclos por fuera del largo del array.
        // Verifico si el elemento actual es diferente al siguiente,
        // y además, si el siguiente (i+1) es igual al que le sigue (i+2)
        // Esto indica que el actual (i) es el distinto (lo devuelve).
        if (array[i] !== array[i + 1] && array[i + 1] === array[i + 2]) {
            return array[i]; // Devuelve el elemento diferente
        }
        // Si el elemento actual es diferente al siguiente,
        // pero el actual (i) es igual al que le sigue después (i+2),
        // entonces el elemento en la pos i+1 es el distinto. (lo devuelve)
        else if (array[i] !== array[i + 1] && array[i] === array[i + 2]) {
            return array[i + 1]; // Devuelve el elemento diferente
        }
    }
}

const findUniqA([1,1,1,1,1,2,1,1,1]);  # return (2)
const resultado = findUniqF(findUniqA);
console.log("El numero distinto es: ", resultado);
///////////////////////////////////////////////
Ejercicio 6
Dado un arreglo de números enteros, encuentre y devuelva el valor de la menor suma posible entre ellos.

function menorSuma(array) {
    if (array.length < 2) { ///verifico que tenga mas de dos numeros el array
        return "Error: se necesitan al menos 2 números.";
    }

    // Ordena el arreglo de menor a mayor, queda ordenado para sumar la menor cantidad.
    array.sort((a, b) => a - b);

    // Suma los dos primeros (los menores)
    return array[0] + array[1];
}

const minSum([7,4,2,3]);  # return (5)
const resultado = menorSuma(minSum);
console.log("La menor suma posible es:", resultado);
///////////////////////////////////////////////////////////7

Ejercicio 7
Dado un arreglo de números enteros, encuentre el mayor producto posible entre dos números adyacentes y devuelva el valor de dicho producto.

adjacentElementsProduct([9,5,10,2,24,-1])  # return (50)
# 5 * 10 = 50

function mayorProductoAdyacente(array) {
    let maxProducto = array[0] * array[1]; // Use de mayor producto la multiplicacion de los dos primeros elementos (es la forma con la que estoy acostumbrado a tomar elementos, lo mismo si se pide mayor o menor)
    for (let i = 1; i < array.length - 1; i++) { //// Se inicia el ciclo desde el segundo elemento hasta el final.
        const producto = array[i] * array[i + 1];
        if (producto > maxProducto) {
            maxProducto = producto; // Guardo el nuevo mayor si se encuentra alguno.
        }
    }
    return maxProducto;
}
const adjacentElementsProduct([9,5,10,2,24,-1]);  # return (50)
const resultado = mayorProductoAdyacente(adjacentElementsProduct);
console.log("El resultado de multiplicar factores adyacentes de mayor numero es; ", resultado);
///////////////////////////////////////////////////////////////

Ejercicio 8
Tenemos un grupo de ovejas amenazadas por un lobo y necesitamos saber a cuál se está por comer.

Consideramos que tenemos a las ovejas y al lobo en un arreglo y que en ese mismo consideramos al último elemento como el primero.

Consideración: El lobo solo puede comer a la oveja que tiene a su derecha.

warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])
# "Hey! Oveja numero 1! El lobo esta cerca!"

warnTheSheep(["sheep", "sheep", "sheep", "wolf"])
# "No sigas comiendo ovejas!"

Anterior */
