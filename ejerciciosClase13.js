/*1) Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. Visiten este sandbox*/

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz");
//     }
//     if(i % 3 === 0){
//         console.log("fizz");
//     }
//     if(i % 5 === 0){
//         console.log("buzz");
//     }else{
//         console.log(i);
//     }
// }

// const diasMes = numero => {
//         switch (numero){
//             case 2 : 
//                 console.log("El mes tiene 28 dias");
//                 break;
//             case 4 :
//             case 6 :
//             case 9 :
//             case 11 :
//                 console.log("El mes tiene 30 dias");
//                 break;
//             default :
//                 console.log("El mes tiene 31 dias");
//         }
// }
// console.log(diasMes(12));

// let num1 = 16;
// let num2 = 15;
// let num3 = 25;

// const numeromayor = (num1,num2,num3) =>{
//     let mayor = 0;
//     if (num1 > num2) {
//         mayor = num1;
//     } if (num2 > num3) {
//         mayor = num2;
//     } if (num3 > num1)
//     {
//         mayor = num3;
//     }
//     return mayor
// }


// console.log(numeromayor(26,15,25));

const numeros = [5, 12, 2, 40, 33, 2, 50];

const numeroMayor = (array) => {
    let mayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
};
console.log(numeroMayor(numeros));