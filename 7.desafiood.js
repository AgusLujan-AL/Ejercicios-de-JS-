/*Deberán realizar una serie de pasos para obtener productos de un recurso brindado, manipular dichos datos con diversos métodos de arreglos y presentar la información de manera organizada. 

Tareas del desafío
Obtener los datos:
Realizar un fetch a https://fakestoreapi.com/products para obtener todos los productos

Filtrado y Transformación:
Crear una función que filtre productos por categoría
Implementar una función que ordene productos por precio (ascendente/descendente)
Desarrollar una función que calcule el precio promedio por categoría
Crear una función que busque productos por nombre (incluso con coincidencias parciales)

Manipulación Avanzada:
Agrupar los productos en un objeto donde las claves (key) sean las categorías
Encontrar el producto más caro y el más barato de cada categoría
 */
async function obtenerProductos() {
    try {
      const respuesta = await fetch('https://fakestoreapi.com/products');  // hice un fetch a la API
      const productos = await respuesta.json();  // convertí la respuesta a JSON
      return productos;  // devolví el array con los productos
    } catch (error) {
      console.error('Error al obtener productos:', error);  // mostré el error si algo fallaba
      return [];  // devolví un array vacío como fallback
    }
  }

  function filtrarPorCategoria(productos, categoria) {
    return productos.filter(p => p.category === categoria);  // usé filter para quedarme solo con los de esa categoría
  }
  
  function ordenarPorPrecio(productos, orden = 'asc') {
    return productos.slice().sort((a, b) => {
      return orden === 'asc' ? a.price - b.price : b.price - a.price;  // ordené según el parámetro ascendente o descendente
    });
  }
  
  function promedioPorCategoria(productos, categoria) {
    const filtrados = filtrarPorCategoria(productos, categoria);  // usé la función de filtro para quedarme con los que necesitaba
    if (filtrados.length === 0) return 0;
  
    const total = filtrados.reduce((suma, p) => suma + p.price, 0);  // sumé todos los precios
    return (total / filtrados.length).toFixed(2);  // dividí y redondeé a dos decimales
  }
  
  function buscarProductos(productos, texto) {
    const textoLower = texto.toLowerCase();  // convertí a minúsculas para evitar errores por mayúsculas
    return productos.filter(p => p.title.toLowerCase().includes(textoLower));  // usé includes para encontrar coincidencias parciales
  }

  function agruparPorCategoria(productos) {
    return productos.reduce((grupo, producto) => {
      const categoria = producto.category;
  
      if (!grupo[categoria]) {
        grupo[categoria] = [];  // si la categoría no existía, la creé como array vacío
      }
  
      grupo[categoria].push(producto);  // agregué el producto a su categoría correspondiente
      return grupo;
    }, {});
  }

  function extremosPorCategoria(productos) {
    const agrupados = agruparPorCategoria(productos);  // agrupé todos los productos por categoría
    const resultado = {};
  
    for (const categoria in agrupados) {
      const lista = agrupados[categoria];
  
      const masBarato = lista.reduce((min, p) => p.price < min.price ? p : min);  // comparé precios para encontrar el menor
      const masCaro = lista.reduce((max, p) => p.price > max.price ? p : max);  // lo mismo para el mayor
  
      resultado[categoria] = {
        masBarato,
        masCaro
      };
    }
  
    return resultado;
  }

////////////seccion de prueba si funciona

async function main() {
    const productos = await obtenerProductos();
  
    console.log("Filtrados por 'electronics':", filtrarPorCategoria(productos, 'electronics'));
    console.log("Ordenados ASC:", ordenarPorPrecio(productos, 'asc'));
    console.log("Precio promedio 'jewelery':", promedioPorCategoria(productos, 'jewelery'));
    console.log("Búsqueda 'bag':", buscarProductos(productos, 'bag'));
    console.log("Agrupados por categoría:", agruparPorCategoria(productos));
    console.log("Extremos por categoría:", extremosPorCategoria(productos));
  }
  
  main();
  
  