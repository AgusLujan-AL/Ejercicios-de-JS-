function sumar(a, b) {
    return a + b;  
  }
  
  function restar(a, b) {
    return a - b;  
  }
  
  function multiplicar(a, b) {
    return a * b;  
  }
  
  function dividir(a, b) {
    if (b === 0) {
      return "No se puede dividir por cero";  // agregué este mensaje para evitar errores si b es cero
    }
    return a / b;  // si b no era cero, dividí normalmente
  }
  
  const operaciones = {
    '+': sumar,        // asocié el símbolo '+' con la función de sumar
    '-': restar,       // hice lo mismo con la resta
    '*': multiplicar,  // asocié '*' con multiplicar para mantener todo claro
    '/': dividir       // vinculé '/' con dividir para que el código sea ordenado
  };
  
  function calcular(numero1, numero2, operador) {
    const operacion = operaciones[operador];  // busqué en el diccionario la operación que correspondía al símbolo
  
    if (!operacion) {
      return "Operador no válido";  // devolví este mensaje si el símbolo no estaba en el diccionario
    }
  
    return operacion(numero1, numero2);  // llamé a la función guardada y le pasé los dos números
  }
  
  console.log(calcular(8, 2, '+'));  // probé una suma para asegurarme de que funcionaba
  console.log(calcular(8, 2, '-'));  // probé la resta también
  console.log(calcular(8, 2, '*'));  // verifiqué la multiplicación
  console.log(calcular(8, 0, '/'));  // intenté dividir por cero para ver si el mensaje aparecía
  console.log(calcular(8, 2, '/'));  // finalmente probé una división normal
  