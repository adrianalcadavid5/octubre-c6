let num1 = 43;
let num2 = 78;
let num3 = 100;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.
// const numeroMayorFun = (a,b,c) => {
//     let mayor;
//     if (num1 > num2){
//         mayor = num1;
//     } else if(num2 > num3){
//         mayor = num2
//     }else{
//         mayor = num3
//     }
//     return mayor
// }
// let numeroMayor = numeroMayorFun(num1,num2, num3);
// console.log("El numero mayor es : "+ numeroMayor);

/*Extra: que puedes hacer para identificar el numero mayor de una lista de numeros,
como la siguiente? Utiliza Javascript.
 
Tip: es valido buscar en google :)
 
Adicional: al terminar tu algoritmo,  cambia los valores de la lista, bien sea
agregando o removiendo, y asegurate que tu algoritmo funcione con cualquier lista  de numeros */
const numeros = [5, 12, 2, 40, 33, 2, 88];

const mayor = array => {
    let temp = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > temp){
            temp = array[i]
        }
    }
    return temp
}
let numMayor = mayor(numeros);
console.log(numMayor);


