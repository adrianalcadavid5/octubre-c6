/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

// let numeros = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [10,9,8,7,6],
//     [5,4,3,2,1],
//     [2,4,6,8,10],
// ];
// //console.table(numeros);

// const sumaMatriz = matriz => {
//     let acc = 0;
//     for (let i = 0; i < matriz.length; i++){
//         for (let j = 0; j < matriz[i].length; j++){
//             acc += matriz[i][j]
//         }
//     }
//     return acc;
// }
// let suma = sumaMatriz(numeros);
//console.log(suma);

/*2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así:*/

// const creadorMatriz = () => {
//     let contador = 1;
//     let matriz = [];
//     for (let i = 0; i < 10; i++){
//         let fila = [];
//         for(let j = 0; j < 10; j++){
//             fila.push(contador++);
//         }
//         matriz.push(fila);
//     }
//     return matriz;
// }
//let matrizDiezxDiez = creadorMatriz();
//console.table(matrizDiezxDiez);

/*3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.*/

// const sumaPrincipal = matriz => {
//     let suma = 0;
//     for( let i = 0; i < matriz.length; i++) {
//         suma += matriz[i][i];
//     }
//     return suma;
// }
// let resultadoDiagonalP = sumaPrincipal(matrizDiezxDiez)
// //console.log(resultadoDiagonalP);

// const sumaSecundaria = matriz => {
//     let suma = 0;
//     for (let i = 0; i < matriz.length; i++){
//         suma += (matriz[i][(matriz.length -1) - i])
//     }
//     return suma;
// }
// let resultadoDiagonalS = sumaSecundaria(matrizDiezxDiez);
//console.log(resultadoDiagonalS);

/* ejercicio de sumar dos matrices tomado de chatgpt*/

// function sumarMatrices(matriz1, matriz2) {
//     // Verificar si las matrices tienen las mismas dimensiones
//     const filasMatriz1 = matriz1.length;
//     const columnasMatriz1 = matriz1[0].length;
//     const filasMatriz2 = matriz2.length;
//     const columnasMatriz2 = matriz2[0].length;

//     if (filasMatriz1 !== filasMatriz2 || columnasMatriz1 !== columnasMatriz2) {
//         console.log("No se pueden sumar matrices con dimensiones diferentes.");
//         return null;
//     }

//     // Inicializar la matriz resultado con ceros
//     const resultado = [];
//     for (let i = 0; i < filasMatriz1; i++) {
//         resultado[i] = [];
//         for (let j = 0; j < columnasMatriz1; j++) {
//             resultado[i][j] = 0;
//         }
//     }

//     // Realizar la suma de las matrices
//     for (let i = 0; i < filasMatriz1; i++) {
//         for (let j = 0; j < columnasMatriz1; j++) {
//             resultado[i][j] = matriz1[i][j] + matriz2[i][j];
//         }
//     }

//     return resultado;
// }

// // Ejemplo de uso
// const matrizA = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const matrizB = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ];

// const resultadoSuma = sumarMatrices(matrizA, matrizB);

// if (resultadoSuma !== null) {
//     console.log("Matriz Resultado:");
//     console.log(resultadoSuma);
//}

//****Ejercicios */
/*2) Crear una función que genere una matriz de 10*10. Cada fila debe tener solo 10
números.*/
const crearMartizFun = numero => {
    let matriz = [];
    let acumulador = 1;
    for (let i = 0; i < numero; i++){
        let fila = [];
        for (let j = 0; j < numero; j++){
            fila.push(acumulador++);
    }
    matriz.push(fila);
    }
    return matriz;
}
let creadorMatriz = crearMartizFun(6);
console.table(creadorMatriz)

//sumar toda la diagonal principal
const diagonalPrincipalSumaFun = matriz => {
    let acumulador = 0;
    for(let i = 0; i < matriz.length; i++){
        acumulador += matriz[i][i];
    }
    return acumulador
}
let sumaDiagonalPrincipal = diagonalPrincipalSumaFun(creadorMatriz);
console.log(sumaDiagonalPrincipal);

//sumar la diagonal secundaria
const sumarDiadognalSecfun = matriz => {
    let acumulador = 0;
    for(let i = 0; i < matriz.length; i++){
        acumulador += matriz[i][(matriz.length - 1) -i];
    }
    return acumulador;
}
let sumarDiadognalSec = sumarDiadognalSecfun(creadorMatriz);
console.log(sumarDiadognalSec);

//vamos a sumar la fila, haremos una funcion que reciba dos parametros, la matriz y la fila
const sumaFilafun = (matriz, fila) => {
    let suma = 0;
    for(let i = 0; i < matriz[fila].length; i++){
        suma += matriz[fila][i];
    }
    return suma;
}
let sumaFila = sumaFilafun(creadorMatriz,5);  //creadorMatriz es una matriz que hice con funcion
console.log(sumaFila);

//vamos a sumar la columna, haremos una funcion que reciba dos parametros, matriz y columna
const sumadorColumnaFun = (matriz, columna) => {
    let acumulador = 0;
    for(let i = 0; i < matriz.length; i++){
        acumulador += matriz[i][columna]
    }
    return acumulador;
}
let sumadorColumna = sumadorColumnaFun(creadorMatriz,5);
console.log(sumadorColumna);

// vamos a recorrer toda la matriz, y sumaremos solo los numeros impares
const recorrerMatriz = matriz => {
    let acumulador = 0;
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] % 2 === 1){
                acumulador += matriz[i][j];
            }
        }
    }
    return acumulador;
}
let sumaImpares = recorrerMatriz(creadorMatriz);
console.log(sumaImpares);

//sumar dos filas de la matriz reutilizando ya la funcion de sumar
const sumarDosFilasFun = (matriz, fila1, fila2) =>{
    let aux = 0;
    aux = sumaFilafun(matriz,fila1) + sumaFilafun(matriz,fila2)
    return aux;
}
let sumadorFilas = sumarDosFilasFun(creadorMatriz,0,1)
console.log(sumadorFilas);



