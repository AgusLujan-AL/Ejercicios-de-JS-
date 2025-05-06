/* function CalculateTotal(items, tax, discount) { var VALOR_TOTAL = 0;

 for(var i = 0; i < items.length; i++) { VALOR_TOTAL += items[i]; 
} VALOR_TOTAL += VALOR_TOTAL * tax; if(discount) { VALOR_TOTAL -= VALOR_TOTAL * discount; } 
      return VALOR_TOTAL.toFixed(2); } var items = [10, 20, 30]; 
var tax = 0.05; 
var discount = 0.10; var ElprOFeEstuvo_aQui = CalculateTotal(items, tax, discount); 

console.log("Total: " + ElprOFeEstuvo_aQui); */
 
/* =-=-=-=-=-=-=-= Malas practicas que anote del codigo =-=-=-=-=-=-=-= 
1. EL uso de var dentro de la funcion, en el anterior ejercicio del bucle for, usar var te rompia todo el codigo.
2. El nombre de las variables estan en mayusculas, minusculas y otras combinan ambas. Ademas, son poco informativas.
3. Falta validacion de las variables. Si pide numeros, se deberia verificar.
4. Está realmente feo a la vista. */

/* =====Codigo arreglado y con mejoras ======*/
function calculateTotal(items, taxRate, discountRate) {  // Función que calcula el total con impuestos y descuento
    let total = 0;  // variables acumuladoras se inicializan en 0 siempre.
  
    for (let i = 0; i < items.length; i++) {  
      total += items[i];  
    }
  
    total += total * taxRate;  // aplica el impuesto al total
  
    if (discountRate) {  // si hay descuento (es distinto de 0 o null)
      total -= total * discountRate;  // resto el porcentaje de descuento al total
    }
  
    return total.toFixed(2);  // devuelve resultado con 2 decimales como string
  }
  
  const items = [10, 20, 30]; 
  const tax = 0.05;  
  const discount = 0.10;  
  
  const totalPrice = calculateTotal(items, tax, discount);  
  console.log("Total: " + totalPrice);  // muestra el total
  
