//loop de pares..

// const pares = function (numero){
//     for( let i = 0; i <= 100; i++){
//         let suma = i + numero;
//             if( suma % 2 == 0 ){
//                 console.log(`El numero ${suma} es par`);
//         }
//         console.log(i);   
//     }
// }

// pares(50);

// Ejercicio:Deberás crear una función llamada loopDeImpares que reciba como parámetros un número y una palabra, 
// y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código 
// para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, 
// muestre en la consola la palabra pasada por parámetro.

// const loopDeImpares = function (numero,palabra){
//     for (let i = 0; i <= 100; i++){
//         let suma = numero + i;
//         if (suma % 2 !=0){
//             console.log(palabra);
//         }
//         console.log(i);

// }
// }

// let impares = loopDeImpares(5, "hola");



//palindromo
// const palindromo = function(palabra){
//     let palabraconfirmada = false;
//     let palabraInversa = palabra.split('').reverse().join('');
//             if (palabra === palabraInversa){
//                 palabraconfirmada = true;
                
//             }
//             return palabraconfirmada;
//     }
// let resultado = palindromo("ana");
// console.log(resultado);

//Deberás crear una función llamada sumatoria que reciba un número como parámetro y que devuelva la sumatoria 
//de todos sus números anteriores, incluso ese mismo

// let sumatoria = function (numero){
//     let suma = 0;
//     for(i = 1; i <= numero; i++){
//         suma += i;
//     }
//     return suma;
// }
// let sumando = sumatoria(4);
// console.log(sumando);

// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo
// arreglo con tantos elementos como el número que le hayas pasado

// const nuevoArreglo = numero => {
//     let arreglo = [];
//     for (i = 1; i <= numero; i++){
//         arreglo.push(i);
//     }
//     return arreglo;
// }

// let arreglo = nuevoArreglo(6);
// console.log(arreglo);

//Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original.

const split = texto => {  
    miArray = [];
    for (let i = 0; i < texto.length; i++){
        miArray.push(texto[i]);
    }
    return miArray

}
let nuevoSplit = split("COLOMBIA");
console.log(nuevoSplit);





