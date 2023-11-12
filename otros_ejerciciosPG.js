/*Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.*/



// function loro (texto){
//     for (let repite = 1; repite <=5; repite ++){
//         console.log(texto);
//     }
// }
// loro("hola");

//En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

// function noParesDeContarImparesHasta(numero){
//     let contador = 0;
//     for(let i = 1; i <= numero; i++){
//         if (i % 2 == 1){
//             contador++;
//         }
//     }
//     return contador
// }
// let impares = (noParesDeContarImparesHasta(9));
// console.log(impares);

//Ejercicio tabla de multiplicar, por medio de una funcion le pasamos el numero como parametro y a ese numero
// le mostramos en pantalla la tabla hasta el 10.

// function tablaDeMultiplicar(numero) {
//     let i = 1;
//     while (i <= 10){
//         console.log(numero + " * ", i, " = " , (numero*i));
//         i++;
//     }
// }

// tablaDeMultiplicar(6);

//practicando METODOS DE STRING
// let frase = " Breaking Bad Rules! ";
// console.log(frase.length);

// console.log(frase.trim().length);

//.split() divide un string en partes
// let cancion = "And bingo was his name, oh!";
// console.log(cancion);
// newArray = (cancion.split(" "));

// function dominio (string){
//     return string.replace(string, "http://www.digitalhouse.com.ar");
// }

// let frase = dominio("digitalhouse.com.ar");
// console.log(frase);

// function reemplazoFastFast (texto, palabraBuscar, palabraReemplazar){
//     let frase = texto.replace(palabraBuscar, palabraReemplazar);
//     return frase;
// }
// let textoSinGuiones = reemplazoFastFast("Todo lo que pasa tiene que bajar","pasa","sube");
// console.log(textoSinGuiones);

//Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.
//Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. La misma función retorna true en el caso de encontrar la palabra.

// function menciona (texto, palabra ){
//     let verificacion = texto.includes(palabra);
//     return verificacion;
// }
// let confirma = menciona("Hola mundo","Hola");
// console.log(confirma);

// //Teniendo como punto de partida la cadena de texto 'Hola!, soy Carli', almacenada en la variable 'frase' deberemos recortarla para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada.

// let frase = 'Hola!, soy Carli';
// let licenciada = frase.slice(-5);
// console.log(licenciada);



