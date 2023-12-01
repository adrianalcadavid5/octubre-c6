let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
console.table(arrayMatriz)

//¿Cómo accedo al valor almacenado en 1-1?
//console.table(arrayMatriz[1][1]);

//¿Cómo puedo cambiar el valor almacenado en 1-0?
// arrayMatriz[1][0] = 5;
// console.table(arrayMatriz);

//Pensemos ahora, cómo podemos imprimir con un ciclo for la primera fila solamente 
// for(let i = 0; i < arrayMatriz[0].length; i++){
//     console.log(arrayMatriz[0][i]);
// }

//Pensemos ahora, cómo podemos imprimir con un ciclo for la primera columna solamente
// for(let i = 0; i < arrayMatriz.length; i++){
//     console.log(arrayMatriz[i][0]);
// }

//para recorrer toda la matriz
for (let i =0; i < arrayMatriz.length; i++){
    for (let j = 0; j < arrayMatriz[i].length; j++){
        console.log(arrayMatriz[i][j]);
    }
}

