//A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
//const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// //Obtener en un nuevo array las edades menores a 18.
// let arrayMenores = [];

// for (i = 0; i < edades.length; i++){
//     if (edades[i] < 18){
//         arrayMenores.push(edades[i]);
//     }
// }
// console.log(arrayMenores);

// //Obtener en un nuevo array las edades mayor o igual a 18.
// let arrayMayores = [];

// for(i = 0; i < edades.length; i++){
//     if (edades[i] >= 18){
//         arrayMayores.push(edades[i]);
//     };
// };
// console.log(arrayMayores);

// //Obtener en un nuevo array las edades igual a 18.
// let igualdad = [];

// for(i = 0; i < edades.length; i++){
//     if (edades[i] === 18){
//         igualdad.push(edades[i]);
//     };
// }
// console.log(igualdad);

//OTRA FORMA DE HACER DISMINUYENDO CODIGO
// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
// let menores = [];
// let mayores = [];
// let edadDieciocho = [];

// const organizandoEdadesFun = array => {
//     for(let i = 0; i < array.length; i++){
//         if(array[i] < 18){
//             menores.push(array[i]);
//         };
//         if (array[i] >= 18){
//             mayores.push(array[i]);
//         }
//         if (array[i] === 18){
//             edadDieciocho.push(array[i]);
//         };
//     };
// };

// organizandoEdadesFun(edades);

// console.log(menores);
// console.log(mayores);
// console.log(edadDieciocho);


//Obtener el menor.
//Obtener el mayor. 
// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// let mayor = [1];
// let menor = [100];
// const mayorMenor = array => {
//     for(let i = 0; i < array.length; i++){
//         if (array[i] > mayor){
//             mayor = array[i];
//         }if (array[i] < menor){
//             menor = array[i];
//         }
//     }
// }

// mayorMenor(edades);

// console.log(mayor);
// console.log(menor);

// //Obtener el promedio de edades.
// const promedio = array => {
//     let contador = 0;
//     let acumulador = 0;
//     for(i = 0; i < array.length; i++){
//        contador = i + 1;
//        acumulador += array[i];
//     }
//     let promEdad = acumulador/contador;
//     return promEdad;
// };
// let promedioEdades = promedio(edades);
// console.log(promedioEdades);

//Incrementar en 1 todas las edades.
// const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// for (i = 0; i < edades.length; i++){
//     edades[i] = edades[i] + 1;
// }
// console.log(edades);

const arrayCuentas = [
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: true,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente"
    }
];
//a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
//b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30
//c. Obtener un nuevo array de cuentas cuyas edades sean menores o igual a 30.
// let edadMenor = [];
// let edadMayor = [];
// let edadMenorOIgual = [];
// const organizacionEdades = array => {
//     for(let i = 0; i < array.length; i++){
//         if (array[i].edadTitular < 30){
//             edadMenor.push(array[i]);
//         }if ( array[i].edadTitular >= 30){
//             edadMayor.push(array[i]);
//         }
//         if(array[i].edadTitular <= 30){
//             edadMenorOIgual.push(array[i]);
//         }
//     };
// }
// organizacionEdades(arrayCuentas);
// console.log(edadMenor);
// console.log("________________");
// console.log(edadMayor);
// console.log("________________");
// console.log(edadMenorOIgual);

//d. Obtener la cuenta con el titular de la misma más joven.****REPETIR****** *
// const clienteJoven = array => {
//     let menorEdad = array[0];
//     for (let i = 0; i < array.length; i++){
//         if(array[i].edadTitular < menorEdad.edadTitular ){
//             menorEdad = array[i];
//         }
//     } return menorEdad;
// };
// let clienteMasJoven = clienteJoven(arrayCuentas);
// console.log(clienteMasJoven);

//e. Obtener un array con las cuentas habilitadas.
// let arrayCuentaHabilitada = [];
// const cuentasHabilitadas = array => {
//     for(let i = 0; i < array.length; i++)
//         if(array[i].estaHabilitada === true){
//             arrayCuentaHabilitada.push(array[i]);
//         };
//         return arrayCuentaHabilitada;
// };

// let cuentasHabilitadasClientes = cuentasHabilitadas(arrayCuentas);
// console.log(cuentasHabilitadasClientes);

//f. Obtener un array con las cuentas deshabilitadas.
// let arrayCuentasDeshabilitadas = [];

// const cuentasDeshabilitadasFun = array => {
//     for (let i = 0; i < array.length; i++){
//         if (array[i].estaHabilitada === false){
//             arrayCuentasDeshabilitadas.push(array[i])
//         };
//     };
//     return  arrayCuentasDeshabilitadas;
// }
// let cuentasDeshabilitadas = cuentasDeshabilitadasFun(arrayCuentas);
// console.log(cuentasDeshabilitadas);

//Obtener la cuenta con el menor saldo.

// const cuentaSaldoMenorFun = array => {
//     let saldoMenor = array[0];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].saldo < saldoMenor.saldo){
//             saldoMenor = array[i];
//         };
//     };
//     return saldoMenor;
// };

// let cuentaSaldoMenor = cuentaSaldoMenorFun(arrayCuentas);
// console.log(cuentaSaldoMenor);


//Obtener la cuenta con el mayor saldo.

// const cuentaSaldoMayorFun = array => {
//     let saldoMenor = array[0];
//     for( let i = 0; i < array.length; i++){
//         if (array[i].saldo > saldoMenor.saldo){
//             saldoMenor = array[i];
//         };
//     };
//     return saldoMenor;
// };

// let cuentaSaldoMayor = cuentaSaldoMayorFun(arrayCuentas);
// console.log(cuentaSaldoMayor);

/*Extras:
Desarrollar una función llamada generarID que reciba como parámetro el array de cuentas y 
agregue a cada elemento (objeto literal) una propiedad llamada id con un valor Numérico*/

//****PRACTICAR *****

const generarID = arrray => {
    for (let i = 0; i < arrayCuentas.length; i++){
        arrray[i]["id"] = 1 + i;
    };
};

generarID(arrayCuentas);
//console.log(arrayCuentas);

/*Desarrollar una función llamada buscarPorId que reciba como parámetro el array de cuentas y un id, 
en caso de encontrar retornar la cuenta (él objeto literal completo), caso contrario retornar null*/

const buscarPorIdfun = (array, numeroId) => {
    for (let i = 0; i < array.length; i++){
        if (array[i].id === numeroId){
            return array[i];
        };
    };
    return null;
};

let buscarPorId = buscarPorIdfun(arrayCuentas,2);
// console.log(buscarPorId);

/*Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el array de cuentas y un saldo (Number), 
deberá retornar un array que se cuyas cuentas se encuentren por debajo del saldo enviado por parámetro*/

const filtrarPorSaldosFun = (array, valorSaldo) => {
    let menorSaldo = [];

    for(let i = 0; i < array.length; i++){
        if (array[i].saldo < valorSaldo){
            menorSaldo.push(array[i])
        };
    };
    return menorSaldo;
};
let filtrarPorSaldos = filtrarPorSaldosFun(arrayCuentas,1400);
console.log(filtrarPorSaldos);  


/*Desarrollar una función llamada incrementarSaldo que reciba como parámetro el array de cuentas, un id y un saldo, 
deberá incrementar él saldo de la cuenta, en caso de encontrar, caso contrario retornar undefined 
Reutilizando la función  buscarPorId */

// const incrementarSaldoFun = (array, numeroId, nsaldo) => {
//     if (buscarPorIdfun(array, numeroId)){
//         array[i].saldo += nsaldosaldo;
//         return array[i];
//     };
    
// };
// let incrementarSaldo = incrementarSaldoFun(arrayCuentas, 6, 10000);
// console.log(incrementarSaldo);





