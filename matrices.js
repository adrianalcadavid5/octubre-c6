/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let numeros = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [10,9,8,7,6],
    [5,4,3,2,1],
    [2,4,6,8,10],
];
//console.table(numeros);

const sumaMatriz = matriz => {
    let acc = 0;
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++){
            acc += matriz[i][j]
        }
    }
    return acc;
}
let suma = sumaMatriz(numeros);
console.log(suma);

/*2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
números. La matriz debe verse así:*/

const creadorMatriz = () => {
    let contador = 1;
    let matriz = [];
    for (let i = 0; i < 10; i++){
        let fila = [];
        for(let j = 0; j < 10; j++){
            fila.push(contador++);
        }
        matriz.push(fila);
    }
    return matriz;
}
let matrizDiezxDiez = creadorMatriz();
//console.table(matrizDiezxDiez);

/*3) Por último, vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único.*/

const sumaPrincipal = matriz => {
    let suma = 0;
    for( let i = 0; i < matriz.length; i++) {
        suma += matriz[i][i];
    }
    return suma;
}
let resultadoDiagonalP = sumaPrincipal(matrizDiezxDiez)
console.log(resultadoDiagonalP);

const sumaSecundaria = matriz => {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++){
        suma += (matriz[i][(matriz.length -1) - i])
    }
    return suma;
}
let resultadoDiagonalS = sumaSecundaria(matrizDiezxDiez);
console.log(resultadoDiagonalS);



