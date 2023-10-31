//1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes
// const numeros_siguientes = (n) => {
// for (let i = n; i <= n+10; i++){
//     console.log(i)
//     }   
// }
// let numeros = numeros_siguientes(5);
// console.log(numeros);

//2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
// const numeros_santando = () => {
//     for (let i = 5; i <= 20; i+=3){
//         console.log(i);
//     }
// }
// let numerossalt = numeros_santando();
// console.log(numerossalt);

// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100
// const sumatoria = () => {
//     let sumatotal = 0;
//     for (let i = 1; i<=100; i++){
//         sumatotal+=i;
//     }
//     return sumatotal;
// }
// let resultadosuma = (sumatoria());
// console.log(resultadosuma);

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.
const factorial = (n) => {
    let acumulador = 1;
    for ( let i = 1; i <= n; i++){
        acumulador*=i;
    }
return acumulador;
}
let numfactorial = factorial(8);
console.log(numfactorial);

