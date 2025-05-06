 /* ---------- Primera parte -----------------------------------
    Dado un array de libros, implementar una función filterBooksByAuthor( ) que reciba por
    parámetros dicho array y un string con el nombre de un autor, y devuelva un nuevo array con libros del autor indicado. */

    const books = [
        { title: 'El Aleph', author: 'Jorge Luis Borges' },
        { title: 'La ciudad y los perros', author: 'Mario Vargas Llosa' },
        { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
        { title: 'Rayuela', author: 'Julio Cortázar' },
        { title: 'Ficciones', author: 'Jorge Luis Borges' },
        { title: 'El hacedor', author: 'Jorge Luis Borges' },
        { title: 'Los pasos perdidos', author: 'Alejo Carpentier' },
        { title: 'El reino de este mundo', author: 'Alejo Carpentier' },
        { title: 'La fiesta del chivo', author: 'Mario Vargas Llosa' },
        { title: 'La tía Julia y el escribidor', author: 'Mario Vargas Llosa' },
        { title: 'Crónica de una muerte anunciada', author: 'Gabriel García Márquez' },
        { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez' },
        { title: 'Bestiario', author: 'Julio Cortázar' },
        { title: 'Las armas secretas', author: 'Julio Cortázar' }
    ];////arregle algunos errores semanticos que me marcaban en las declaraciones del array

    /* filter Books By Author(books, ‘Jorge Luis Borges’) return ==> [
  { title: 'El Aleph', author: 'Jorge Luis Borges' },
  { title: 'Ficciones', author: 'Jorge Luis Borges' },
  { title: 'El hacedor', author: 'Jorge Luis Borges' }
]*/
    
    // Funcion que deberia cumplir con lo pedido
    function filterBooksByAuthor(booksArray, authorName) {
        return booksArray.filter(function(book) {
            return book.author === authorName;
        });
    }
    
    //  Pruebo si anda
    const borgesBooks = filterBooksByAuthor(books, 'Jorge Luis Borges');
    console.log(borgesBooks);
    /////////////////////////

    /* --------------- SEGUNDA PARTE ------------------
    A partir de lo realizado en la primera parte, utilizar la función para obtener todos los libros de un autor a elección, 
    luego mediante métodos de array modificar el nombre del autor de todos los libros filtrados. 
    Verificar que si se muestra en consola los libros filtrados se verá el autor modificado. 
    ¿Qué sucede si se muestra en consola el array original? */

const librosDeBorges = filterBooksByAuthor(books, 'Jorge Luis Borges'); ////////////// uso la funcion de la parte 1

librosDeBorges.forEach(function(libro) { ///////cambio el nombre de los autores 
    libro.author = 'Autor Anónimo';
});

console.log('Libros filtrados con autor modificado:');
console.log(librosDeBorges); //////muestro los libros que se deberian filtrar

console.log('Array original:'); //////muestro el array original
console.log(books);

/* ----------- TERCERA PARTE -------------
Modificar la función de la primera parte para que ahora funcione si mando el nombre completo del autor, o solo su apellido (mejorar el filtro).
Por ejemplo, la función debe devolver lo siguiente, ya sea si le mando ‘Jorge Luis Borges’ o ‘Borges’:
return ==> [
  { title: 'El Aleph', author: 'Jorge Luis Borges' },
  { title: 'Ficciones', author: 'Jorge Luis Borges' },
  { title: 'El hacedor', author: 'Jorge Luis Borges' }
]*/

////modificacion 
function filterBooksByAuthor(booksArray, authorSearch) {
    return booksArray.filter(function(book) {
        const authorLower = book.author.toLowerCase(); ////evito errores al pasar todas las entradas a minusculas (Recomendacion de un compñaero de facultad)
        const searchLower = authorSearch.toLowerCase();
        return authorLower.includes(searchLower);  // compruebo si el nombre del autor esta en el texto solicitado.
    });
}
//// PRUEBAS 
const resultado1 = filterBooksByAuthor(books, 'Jorge Luis Borges'); /////NOMBRE COMPLETO
const resultado2 = filterBooksByAuthor(books, 'Borges');////APELLIDO

console.log('Resultado con nombre completo:');
console.log(resultado1);

console.log('Resultado con solo apellido:');
console.log(resultado2);
/////////////////////////////////
/* Cuarta parte
Teniendo en cuenta lo observado en la segunda parte, 
corregir ese comportamiento de la forma que considere apropiada*/