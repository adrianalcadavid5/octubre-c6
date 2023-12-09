/*Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

// let arregloLikes = [
//     {
//     nombre:"juan",
//     likes: 18
// },
// {
//     nombre:"Luisa",
//     likes: 20
// },
// {
//     nombre:"Italo",
//     likes: 11
// },
// {
//     nombre:"pablo",
//     likes: 16
// },
// {
//     nombre:"Adriana",
//     likes: 38
// },
// {
//     nombre:"Rodrigo",
//     likes: 118
// },
// {
//     nombre:"Oh",
// likes: 138
// },
// {
//     nombre:"García",
//     likes: 182
// },
// {
//     nombre:"Lucia",
//     likes: 1842
// },
// {
//     nombre:"Zuniga",
//     likes: 1
// },
// {
//     nombre:"Amashta",
//     likes: 1831
// },
// {
//     nombre:"Pedroza",
//     likes: 100
// },
// {
//     nombre:"pedro",
//     likes: 52
// },
// {
//     nombre:"juanito",
//     likes: 199
// },
// {
//     nombre:"juanita",
//     likes: 18012
// }
// ];

// const bubbleSort = (array, propiedad) => {
//     let aux;
//     for (let i = 0; i < array.length; i++){

//         for(let j = 0; j < array.length - 1; j++){
//             if (array[j][propiedad] < array[j + 1][propiedad]){
//                 aux = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = aux;
//             }
//         }
//     }
// }
// bubbleSort(arregloLikes, "likes");
//console.log(arregloLikes);

//El de mayor cantidad de likes obtenidos
//console.log(arregloLikes[0]);

//cuanto obtuvo el segundo
//console.log(arregloLikes[1]);


//cuanto el tercero
//console.log(arregloLikes[2]);

//cuanto el que menos tuvo
//console.log(arregloLikes[arregloLikes.length - 1]);

/*Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.*/

// let arregloTemp = [
// 	{
// 		dia: 22,
// 		mes: 12,
// 		maxTemp: 27,
// 		minTemp: 11,
// 	},
// 	{
// 		dia: 25,
// 		mes: 10,
// 		maxTemp: 25,
// 		minTemp: 15,
// 	},
// 	{
// 		dia: 23,
// 		mes: 11,
// 		maxTemp: 23,
// 		minTemp: 13,
// 	},
// 	{
// 		dia: 20,
// 		mes: 10,
// 		maxTemp: 20,
// 		minTemp: 10,
// 	},
// 	{
// 		dia: 29,
// 		mes: 1,
// 		maxTemp: 31,
// 		minTemp: 21,
// 	},
// 	{
// 		dia: 12,
// 		mes: 2,
// 		maxTemp: 32,
// 		minTemp: 23,
// 	},
// 	{
// 		dia: 27,
// 		mes: 7,
// 		maxTemp: 27,
// 		minTemp: 17,
// 	},
// 	{
// 		dia: 22,
// 		mes: 12,
// 		maxTemp: 27,
// 		minTemp: 11,
// 	},
// 	{
// 		dia: 2,
// 		mes: 1,
// 		maxTemp: 29,
// 		minTemp: 11,
// 	},
// 	{
// 		dia: 22,
// 		mes: 12,
// 		maxTemp: 27,
// 		minTemp: 11,
// 	},

// ];

// const bubbleSortTemperatura = (array, propiedad, orden) => {
//     let aux;
//     if(orden === "ASC"){
//         for(let i = 0; i < array.length; i++){

//             for(let j = 0; j < array.length - 1; j++){
//                 if(array[j][propiedad] > array[j + 1][propiedad]){
//                     aux = array[j];
//                     array[j] = array[j + 1];
//                     array[j + 1] = aux
//                 }
//             }
//         }
//     } else if (orden === "DESC"){
//         for(let i = 0; i < array.length; i++){

//             for (let j = 0; j < array.length - 1; j++){
//                 if(array[j][propiedad] < array[j + 1][propiedad]){
//                     aux = array[j];
//                     array[j] = array[j + 1];
//                     array[j + 1] = aux;
//                 }
//             }
//         }
//     }else{
//         console.log("Por favor indicar el orden, ASC o DESC");
//     }
// }
// //a) Ordenar por temperatura mínima de menor a mayor.
// bubbleSortTemperatura(arregloTemp,"minTemp","ASC");
//console.log(arregloTemp);

//b) Ordenar por temperatura máxima de mayor a menor.
//bubbleSortTemperatura(arregloTemp,"maxTemp","DESC");
//console.log(arregloTemp);

//EJERCICIOS CLASE 13S
/*1) Escribir un programa que muestre en pantalla los números del 1 al 100,
sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
“buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
por la palabra “fizzbuzz”. */
// for (let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbuzz");
//     }else if(i % 3 === 0 ){
//         console.log("fizz");
//     }else if (i % 5 === 0){
//         console.log("buzz");
//     }else{
//         console.log(i);
//     }
// }

/*2.Escriban una función que reciba dos parámetros: un array y un índice. La
función deberá de mostrar por consola el valor del elemento según el
índice dado. Por ejemplo, dada la siguiente array e índice, la función
imprimirá '6'. */
// let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 

// const indice = (arr, numero) => {
//     console.log(arr[numero]);
// }
// let index = indice(array, 1);
// console.log(index);


/* Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos 
 Luego, escribe un algoritmo para sumar todos  los numeros en la matriz. */

// let cinco = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [21,22,23,24,25],
// ]

// const suma = matriz => {
//     let accumulador = 0;
//     for(let i = 0; i < matriz.length; i++){

//         for(let j = 0; j < matriz[i].length; j++){
//             accumulador += matriz[i][j]
//         }
//     }
//     return accumulador;
// }

// let sumaMatriz = suma(cinco);
//console.log(sumaMatriz);

//Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10 números. 
// const crearMatricesFun = numero => {
//     let contador = 1;
//     let matriz = [];
//     for (let i = 0; i < numero; i++){
//         let fila = [];
//         for (let j = 0; j < numero; j++){
//             fila.push(contador++);
//         }
//         matriz.push(fila);
//     }
//     return matriz;
// }
// let creadorMatriz = crearMatricesFun(10);
// //onsole.table(creadorMatriz);

// //generar dos funciones, para que sume los valores de la diagonal principal y otra la diagonal secundaria
// const diagonalPrincipalFun = matriz => {
//     let suma = 0;
//     for (let i = 0; i < matriz.length; i++){
//         suma += matriz[i][i];
//     }
//     return suma;
// }
// let diagonalPrincipal = diagonalPrincipalFun(creadorMatriz);
// //console.log(diagonalPrincipal);

// const diagonalSegundariaFun = matriz => {
//     let suma = 0;
//     for( let i = 0; i < matriz.length; i++){
//         suma += matriz[i][(matriz.length -1) - i];
//     }
//     return suma;
// }
// let diagonalSegundaria = diagonalSegundariaFun(creadorMatriz)
// //console.log(diagonalSegundaria);

// // TODO FILTRAR LOS PRODUCTOS QUE TENGAN MENOS DE 10 UNIDADES EN STOCK  Y RETORNARLO
// let items = [
//     {
//     nombre: "televisor",
//     precio: 500,
//     stock: 7,
//     },
//     {
//     nombre: "tablet",
//     precio: 350,
//     stock: 12,
//     },
//     {
//     nombre: "celular",
//     precio: 400,
//     stock: 21,
//     },
//     {
//     nombre: "notebook",
//     precio: 600,
//     stock: 5,
//     },
// ];

// const filtrarFun = (array, propiedad) => {
//     let nuevoArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i][propiedad] < 6){
//             nuevoArray.push(array[i])
//         }
//     }
//     return nuevoArray
// }

// let filtrar = filtrarFun(items,"stock")
// console.log(filtrar);

// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

// let edades = [2, 12, 1, 5, 32, 56, 7];

// let palabras = [ "alberto", "maria", "pepe" ]

// const bubbleSortDesFun = array => {
//     let temporal;
//     for (let i = 0; i < array.length; i++){
//         for (let j = 0; j < array.length -1; j++){
//             if(array[j] < array[j + 1]){
//                 temporal = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = temporal;
//             }
//         }
//     }
// }
// bubbleSortDesFun(edades);
// console.log(edades);
// bubbleSortDesFun(palabras);
// console.log(palabras);

// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

// let productos = [
//     {
//     nombre: "televisor",
//     precio: 500,
//     stock: 7,
//     },
//     {
//     nombre: "tablet",
//     precio: 350,
//     stock: 12,
//     },
//     {
//     nombre: "celular",
//     precio: 400,
//     stock: 21,
//     },
//     {
//     nombre: "notebook",
//     precio: 600,
//     stock: 16,
//     },
// ];

// const ordenarObjetos = (array, propiedad) => {
//     let aux;
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length - 1; j++){
//             if(array[j][propiedad] > array[j + 1][propiedad]){
//                 aux = array[j];
//                 array[j] = array[j + 1];
//                 array[j + 1] = aux; 
//             }
//         }
//     }
// }
// ordenarObjetos(productos,"stock")
//console.log(productos);


//CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO CON TODOS LOS ELEMENTOS DE LA FILA 2 (multiplicados x 3)


let matriz1 = [
    [2, 4, 3],
    [3, 1, 5], // [9, 3, 15]
    [8, 4, 9],
];
const nuevoArrayFila2Fun = array => {
    let nuevo = [];
    for (let i = 0; i < array[1].length; i++){
        nuevo.push(array[1][i] * 3)
    }
    return nuevo;
}
let fila2 = nuevoArrayFila2Fun(matriz1);
//console.log(fila2);


 // TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS IMPARES DE LA COLUMNA 0, POR UN numero cero"
// let matriz2 = [
//     [2, 4, 3],
//     [3, 1, 5],
//     [8, 4, 9],
// ];
// const imparesFun = matriz => {
//     for(let i = 0; i < matriz.length; i++){
//         if(matriz[i][0] % 2 === 1){
//             matriz[i][0] = 0;
//         }
//     }
// }
// imparesFun(matriz2);
// console.table(matriz2);



  // TODO --> ACA DOBLE FOR
  // CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR SU NEGATIVO
// let matriz5 = [
//     [2, 4, 3],
//     [3, 1, 5],
//     [8, 4, 9],
// ];

// const matrizNegativoFun = matriz => {
//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             matriz[i][j] *= -1;
//         }
//     }
// }
// matrizNegativoFun(matriz5);
// console.table(matriz5);

// const dias = numero => {
//     if(numero == 1 || numero == 3 || numero == 5 || numero == 7 || numero == 8 || numero == 10 || numero == 12){
//         console.log(" el mes tiene 31 dias");
//     }else if (numero == 4|| numero == 6 || numero == 9 || numero == 11){
//         console.log(" el mes tiene 30 dias");
//     }else if (numero == 2){
//         console.log(" el mes tiene 28 dias");
//     }else{
//         console.log("por favor ingrese un numero de mes valido");
//     }
// }
// dias(13)

/*Escribe una función en JavaScript que reciba dos matrices bidimensionales como parámetros y
devuelva una nueva matriz que sea la suma de las dos matrices de entrada. 
Asegúrate de validar que las matrices tengan las mismas dimensiones antes de intentar sumarlas.*/
const matriz11 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matriz22 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
// Verificar que las matrices tengan las mismas dimensiones
// Inicializar una nueva matriz para almacenar la suma
// Iterar sobre las filas y columnas para realizar la suma
// Devolver la matriz resultante


// const sumaMatrizFun = matriz => {
//     let acumulador = 0;
//     for (let i = 0; i < matriz.length; i++){
//         for( let j = 0; j < matriz[i].length; j++){
//             acumulador += matriz[i][j]
//         }
//     }
//     return acumulador
// }
// //let sumaMatriz = sumaMatrizFun(matriz11);
// //console.log(sumaMatriz);

// const sumaDosMatricesfun = (mat1, mat2) => {
//     // Verificar que las matrices tengan las mismas dimensiones
//     let acumulador = 0;
//     if(mat1.length === mat2.length){
//         acumulador = sumaMatrizFun(mat1) + sumaMatrizFun(mat2)
//     }
//     return acumulador;
// }
// let sumaDosMatrices =  sumaDosMatricesfun(matriz11, matriz22);
// console.log(sumaDosMatrices);

