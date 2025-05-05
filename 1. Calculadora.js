console.log("============ CALCULADORA DE PRESTAMOS ============");
console.log("=Sistema: Los datos ya fueron cargados... =");

/* Datos de entrada (para pruebas) */
const loanAmount = 10000;
const annualInterestRate = 12;  // 12%
const termInMonths = 24;
const clientType = "returning";

/* Funciones básicas para el préstamo */

function calcularCuotaMensual(monto, interes, meses) {
    let tasaMensual = (interes / 100) / 12;
    let cuota = monto * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -meses)));
    return cuota;
}

function calcularTotal(cuota, meses) {
    return cuota * meses;
}

function calcularIntereses(total, monto) {
    return total - monto;
}

function aplicarDescuento(cuota, tipoCliente) {
    let descuento = 0;

    if (tipoCliente === "returning") {
        descuento = 0.02;
    } else if (tipoCliente === "premium") {
        descuento = 0.05;
    }
    /* Si es "new" el descuento queda en 0 */
    return cuota * (1 - descuento);
}

/*Función general del préstamo */
function calcularPrestamo(monto, interesAnual, meses, tipoCliente) {
    /* Revisar si los datos están bien */
    if (monto < 1000 || monto > 50000) {
        return { error: "Monto fuera del rango (1000 - 50000)." };
    }
    if (interesAnual < 5 || interesAnual > 20) {
        return { error: "Interés fuera del rango (5% - 20%)." };
    }
    if (meses < 6 || meses > 60) {
        return { error: "Meses fuera del rango (6 - 60)." };
    }
    if (tipoCliente !== "new" && tipoCliente !== "returning" && tipoCliente !== "premium") {
        return { error: "Tipo de cliente no válido." };
    }

    /* Cálculos (revisar) */
    let cuota = calcularCuotaMensual(monto, interesAnual, meses);
    let cuotaConDesc = aplicarDescuento(cuota, tipoCliente);
    let totalFinal = calcularTotal(cuotaConDesc, meses);
    let interesTotal = calcularIntereses(totalFinal, monto);

    /* Mensaje segun el interés */
    let ratio = interesTotal / monto;
    let mensaje = "";

    if (ratio < 0.1) {
        mensaje = "Interés bajo.";
       } else if (ratio < 0.3) {
        mensaje = "Interés normal.";
       } else {
        mensaje = "Interés alto.";
    }

    return {
        cuota: cuota.toFixed(1),
        cuotaConDesc: cuotaConDesc.toFixed(1),
        total: totalFinal.toFixed(1),
        intereses: interesTotal.toFixed(1),
        mensaje: mensaje
    };
}

let resultado = calcularPrestamo(loanAmount, annualInterestRate, termInMonths, clientType);


console.log("============= RESULTADO DEL PRÉSTAMO =============");
if (resultado.error) {
    console.log("Error:", resultado.error);
} else {
    console.log("Cuota mensual sin descuento: $" + resultado.cuota);
    console.log("Cuota con descuento: $" + resultado.cuotaConDesc);
    console.log("Total a pagar: $" + resultado.total);
    console.log("Total de intereses: $" + resultado.intereses);
    console.log("Mensaje: " + resultado.mensaje);
}
