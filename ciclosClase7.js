/*1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.*/
// const numerosSiguentesFun = numero => {
//     for(let i = numero ; i<= (numero + 10); i ++){
//         console.log(i);
//     }
// };
// let numeroSiguiente = numerosSiguentesFun(10);

/*2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.*/
// for (let i = 5; i <= 20; i = (i + 3)){
//     console.log(i);
// };

//3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
// let sumatoria = 0
// for (let i = 0; i <=100; i++){
//     sumatoria += i;
//     console.log(sumatoria);
// };

/*4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando 
todos los números enteros positivos que hay entre el 1 y ese número.*/
// let factor = 1;
// const factorial = numero =>{
//     for(let i = 1; i <= numero; i++){
//         factor *=i;
//     };
//     return factor
// };
// let numeroFactorial = factorial(10);
// console.log(numeroFactorial);

/*5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor 
ingresado por parámetro.*/
const secuenciaFibonacciFun = numero => {
    let arraySecuencia = [0,1];

    for(let i = 2; i < numero; i++){
        arraySecuencia[i] = arraySecuencia[i - 1] + arraySecuencia[i - 2];
    }
    return arraySecuencia;
}
let secuenciaFibonacci = secuenciaFibonacciFun(10);
console.log(secuenciaFibonacci);
