const prompt = require("prompt-sync")({ sigint: true });

//practicando variables
let temperatura = 40;
let lloviendo = false;
let pisoAscensor = 2;
let horaActual = prompt("ingrese por favor la  hora actual : ");
let horaApertura = 8;
let HoraCierre = 18;
let cantidadQueso = prompt("ingrese por favor la cantidad del queso que desea llevar : ")
let precio = prompt("ingrese por favor el valor del queso en gramos : ")
let deudaFiambreria;

console.log(horaActual);
console.log(cantidadQueso);
console.log(precio);
deudaFiambreria = cantidadQueso * precio;
console.log(`El total de la deuda es $ ${deudaFiambreria}`);

//Desafio extra.
let camisas = ["pantalon", "pantalon", "pantalon"];
let pantalones = ["camisa", "camisa", "camisa"]

let cajonVacio = []

console.log(`En cajon de las camisas hay ${camisas} y en el cajon de los pantalones hay ${pantalones} debo organizarlo `);

// FUNCIONO
cajonVacio = camisas
camisas = pantalones
pantalones = cajonVacio

// FUNCIONO
// for (let i = 0; i < camisas.length; i++){
//     if (camisas[i] == "pantalon") {
//         for (let j = 0; j < pantalones.length; j++){ 
//             if (pantalones[j]== "camisa") { 
//                 let manoVacia = camisas[i]
//                 camisas[i] =  pantalones[j]
//                 pantalones[j] = manoVacia
//             }
//         }
//     }
// }

// FUNCIONO
// let elSuelo = []

// elSuelo = elSuelo.concat(camisas, pantalones)
// camisas = []
// pantalones = []


// for (let i = 0; i < elSuelo.length; i++){
//     if (elSuelo[i] == "camisa") {
//         camisas.push(elSuelo[i])
//     } else {
//         pantalones.push(elSuelo[i])
//     }
// }

// FUNCIONO
// for (let i = 0; i < camisas.length; i++){
//     if (camisas[i] == "pantalon"){
//         pantalones.push(camisas[i]);
//         camisas[i] = "BORRAME"
//     }else{
//         console.log("todo esta muy bien");
//     }
// }

// camisas = camisas.filter(elemento => elemento !=  "BORRAME");


// for (let i = 0; i < pantalones.length; i++){
//     if (pantalones[i] == "camisa"){
//         camisas.push(pantalones[i]);
//         pantalones[i] = "BORRAME"
//     }else{
//         console.log("todo esta super")
//     }
// }


// FUNCIONO
// for (let i = 0; i < camisas.length; i++){
//     if (camisas[i] == "pantalon"){
//         pantalones.push(camisas[i]);
//         camisas.splice(i,1)
//         i = i - 1
//     }else{
//         console.log("todo esta muy bien");
//     }
// }

// for (let i = 0; i < pantalones.length; i++){
//     if (pantalones[i] == "camisa"){
//         camisas.push(pantalones[i]);
//         pantalones.splice(i,1)
//         i = i - 1
//     }else{
//         console.log("todo esta super")
//     }
// }

console.log(`el cajon de las camisas quedo asi : ${camisas}`);
console.log(`el cajon de las pantalones quedo asi : ${pantalones}`);