// TODO FILTRAR LOS PRODUCTOS QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLO

let items = [
    {
    nombre: "televisor",
    precio: 500,
    stock: 7,
    },
    {
    nombre: "tablet",
    precio: 350,
    stock: 12,
    },
    {
    nombre: "celular",
    precio: 400,
    stock: 21,
    },
    {
    nombre: "notebook",
    precio: 600,
    stock: 5,
    },
];

const filtrarProductosFun = (array, propiedad,unidades) => {
    let filtrado = [];
    for(let i = 0; i < array.length; i++){
        if(array[i][propiedad] < unidades){
            filtrado.push(array[i])
        }
    }
    return filtrado
}
// let filtrarProductos = filtrarProductosFun(items,"stock", 10);
// console.log(filtrarProductos);


// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

let edades = [2, 12, 1, 5, 32, 56, 7];

let palabras = [ "alberto", "maria", "pepe" ]

const bubbleSortDesc = array => {
    let aux;
    for (let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] < array[j + 1]){
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}
// bubbleSortDesc(edades);
// console.log(edades);
// bubbleSortDesc(palabras);
// console.log(palabras);


// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

let productos = [
    {
    nombre: "televisor",
    precio: 500,
    stock: 7,
    },
    {
    nombre: "tablet",
    precio: 350,
    stock: 12,
    },
    {
    nombre: "celular",
    precio: 400,
    stock: 21,
    },
    {
    nombre: "notebook",
    precio: 600,
    stock: 16,
    },
];

const bubbleSortAsc = (array, propiedad) => {
    let aux;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j][propiedad] > array[j + 1][propiedad]){
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}
//bubbleSortAsc(productos,"stock")
//console.log(productos);


// DADA LA SIGUIENTE MATRIZ

let matriz1 = [
    [2, 4, 3],
    [3, 1, 5], // [9, 3, 15]
    [8, 4, 9],
];

  // TODO ---> UN SOLO CICLO
  // CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO CON TODOS LOS ELEMENTOS DE LA FILA 2 (multiplicados x 3)
const nuevoArrayFun = matriz => {
    let array = [];
    for(let i = 0; i < matriz[1].length; i++){
        array.push(matriz[1][i] * 3);
    }
    return array;
}
// let nuevoArray = nuevoArrayFun(matriz1);
// console.log(nuevoArray);

// TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS IMPARES DE LA COLUMNA 0, POR UN numero cero"

let matriz5 = [
    [2, 4, 3],
    [3, 1, 5],
    [8, 4, 9],
];

const matrizModificaFun = matriz => {
    for(let i = 0; i < matriz.array; i++){
        if(matriz[i][0] % 2 === 1){
            matriz[i][0] = 0; *********TERMINAR ********
        }
    }
}
matrizModificaFun(matriz5);
console.table(matriz5);

  // TODO --> ACA DOBLE FOR
  // CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR SU NEGATIVO