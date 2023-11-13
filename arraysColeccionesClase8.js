//¿Qué devuelven estos códigos?

// let numbers =[22, 33, 54, 66, 72];
// console.log(numbers[numbers.length]);  // retorna un undefined

// let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk",
// "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
// console.log(grupoDeAmigos[5]); //retorna Ironman

// let str = “un string cualquiera”
// let arrayAleatorio= ["Digital", "House", “true”, "string", "123","false", “54”, str ]
// console.log(arrayAleatorio[arrayAleatorio.length - 1])  // retorna SyntaxError: Invalid or unexpected token

/*1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.*/
//let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

/*2.Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/

//let peliMayusculas = [];

// for (i = 0; i < peliculas.length; i++){
//     peliMayusculas.push((peliculas[i]).toUpperCase());
// }
// console.log(peliMayusculas);


// const mayusculas = array => {
//     for(let i = 0; i < array.length; i++){
//         peliMayusculas.push((array[i]).toUpperCase());
//     }
//     return peliMayusculas;
// }

// let arrayPeliculas = mayusculas(peliculas);
// console.log(arrayPeliculas);

/*3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.*/
//let peliculasAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// const unirArrays = (array1, array2) => {
//     for (i = 0; i < array2.length; i++){
//         peliMayusculas.push(array2[i].toUpperCase());
//     };
//     return peliMayusculas;
// };
// let unionDeArrays = unirArrays(peliMayusculas,peliculasAnimadas);
// console.log(unionDeArrays);
// // console.log(peliMayusculas);
// let unionPeliculas = [];
// const unirArraysFun = (array1, array2) => {
//     for (i = 0; i < array1.length; i++){
//         unionPeliculas.push(array1[i]);
//     }
//     for (i = 0; i < array2.length; i++){
//         unionPeliculas.push((array2[i]).toUpperCase());
//     }
//     return unionPeliculas;
// };
// let unirArrays= unirArraysFun(peliMayusculas,peliculasAnimadas);
// console.log(unirArrays);

//let unionPrueba = peliMayusculas.concat(peliculasAnimadas);  //** otro metodo para unir arrays utilizando concat array1.concat(array2) */
// console.log(unionPrueba);
// console.log(typeof unionPrueba);

/*4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. 
Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas. PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/
//let elementoEliminado = unionPeliculas.pop();//aca grabo en una variable el elemento eliminado y elimino del array el ultimo (los 2 al mismo tiempo)

/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. Te confirman que están en el orden adecuado 
y que solo traen valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en orden al del array resultante de combinar películas con películas
animadas. Es decir, el primer elemento del array de películas general corresponde al primer elemento de asiaScores y al primer elemento 
de euroScores, y así sucesivamente.*/

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// const comparacionArrays = (array1, array2) =>{
//     if (array1.length === array2.length){
//         for (i = 0; i <array1.length; i++){
//             if (array1[i] === array2[i]){
//                 console.log("en la posicion " + i  + "es igual su scors");
//             }else{
//                 console.log("en la posicion " + i  + "son diferentes de  scors");
//             };
//         };
//     };
// };
// let comparacion = comparacionArrays(asiaScores,euroScores);
//console.log(comparacion); 

// const comparacion = (array1, array2) => {
//     if (array1 === array2){
//         console.log("Son iguales las calificaciones");
//     }else{
//         console.log("son diferentes las calificaciones");
//     }
// };

//let comparacionCalificaciones = comparacion(asiaScores,euroScores);

/*Array inverso
1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).*/
// let numeros = [1,2,3,4,5,6,7,8,9];
// for (i = numeros.length - 1; i >= 0; i--){
//     console.log(numeros[i]);
// }
/*2. Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido.*/
// let nuevoInvertido = [];
// const inversor = array => {
//     for (i = array.length - 1; i >= 0; i--){
//         nuevoInvertido.push(array[i]);
//     };
//     return nuevoInvertido;
// };
// let arrayNuevoInvertido = inversor(numeros);
// console.log(arrayNuevoInvertido);

/*sumaArray()
En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114*/
// let numeros = [1,2,3,];

// const sumaArrayFun = numero => {
//     let suma = 0;
//     for (i = 0; i < numero.length; i++){
//         suma +=numero[i];
//     }
//     return suma;
// }
// let sumaArray = sumaArrayFun(numeros);
// console.log(sumaArray);

/*Simulación Array.join()
En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau".*/
let saludo = ["H","O", "L","A"];

//console.log(saludo.join("")); // esto es lo que retorma este metodo. HOLA en un string
const joinFun = array => {
    let texto = "";
    for( i = 0; i < array.length; i++){
        texto = texto + array[i];
    }
    return texto;
};
let join = joinFun(saludo);
console.log(join);











