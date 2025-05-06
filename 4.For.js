/*Timer con bucle for
Hacer un timer que muestre en pantalla una cuenta del 1 al 10 mediante el uso de un bucle for. 
Una vez realizado el timer, verificar que es lo que sucede si en lugar de utilizar let para declarar el iterador del bucle, se usa var. 
Intentar corregir dicho comportamiento, considerando que parte es sincrónica del código y cual asincrónica.*/ 
for (let i = 1; i <= 10; i++) { // si uso let, el for funciona. 
    setTimeout(() => {          
      console.log(i); //muestra i cada un segundo ( i * 1000)
    }, i * 1000);
}//el for es sincronico, el setTimeout es asincronico.

///////// con var
for (var i = 1; i <= 10; i++) { // si uso let, el for funciona. Con var, muestra el ultimo valor de i que se genera (10) y le suma 1 del bucle for
    setTimeout(() => {          // generando que muestre 11. Nunca lo cambia de forma ascendente desde 1.
      console.log(i); //muestra i cada un segundo ( i * 1000)
    }, i * 1000);
}

////////intentado arreglar el error¿?
for (var i = 1; i <= 10; i++) { //Use una IIFE, una funcion que se usa sola, lo vi en ejemplos. Vi una forma de hacerlo con async/await
    (function(j) {              // pero se me hacia bastante mas complejo y requiere mas lineas de codigo, tampoco sé si es mejor.
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    })(i);
  }
  






