const prompt = require("prompt-sync")({ sigint: true });

//Ejercicio para reestringir el ingreso a una discoteca
//funcion Expresada = anomina
// let adulto = function (edad) {
//     if (edad < 18){
//         console.log("Eres menor de edad, no puedes ingresar")
//     }else{
//         console.log("Bienvenido, tienes edad suficiente!!!")
//     }
// };
//console.log(adulto(20));

// Mismo ejercicio con una funcion declarativa = nombradas
// function adulto (edad){
//     if(edad >= 18){
//         console.log("Eres mayor de edad, puedes ingresar")
//     }else{
//         console.log("Eres menor de edad, aca no puedes ingresar")
//     }
// }
// let ingresoDiscoteca = adulto(17);

//Mismo ejercicio utilizando function arrow
// const adulto = edad => {
//     if (edad >= 18){
//         console.log("Eres mayor de edad, Bienvenido");
//     }else{
//         console.log("Eres menor de edad, no puedes ingresar");
//     }
// }

// let ingresoDiscoteca = adulto(17);

// haciendole modificaciones si la edad es negativa, si es mayor de 21 y si es impar tu edad
// const adulto = edad => {
//     if (edad < 0){
//         edad % 2 != 0
//         console.log("tu edad es un numero impar")
//         console.log("Error, edad invalida. Por favor ingrese un número válido");
//     }else if(edad < 18){
//         edad % 2 != 0
//         console.log("tu edad es un numero impar")
//         console.log("Eres menor de edad, no puedes ingresar");
//     }else if(edad < 21){
//         edad % 2 != 0
//         console.log("tu edad es un numero impar")
//         console.log("puedes pasar al bar pero no puedes ingresar licor");
//     }else{
//         edad % 2 != 0
//         console.log("tu edad es un numero impar")
//         console.log("puedes pasar y consumir licor si deseas");
//     }
// }

// let ingresoDiscoteca = adulto(23);

/*totalAPagar() Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
litrosConsumidos.  A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones:
● Si el vehículo es “coche”, el precio por litro es de $86.
● Si es “moto”, ha de ser $70.
● Si es “autobús”, ha de ser $55.
● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.*/

// const totalAPagar = (vehiculo, litrosConsumidos) => {
//     let litro;
//     switch (vehiculo) {
//         case "coche":
//             litro = litrosConsumidos * 86;
//             if (litrosConsumidos <= 25){
//                 litro = litro + 50;
//             }else{
//                 litro = litro + 25
//             }
//             console.log(`El total a pagar por el conbustible de tu ${vehiculo} es de : ${litro}`);
//             break;
//         case "moto" :
//             litro = litrosConsumidos * 70;
//             if (litrosConsumidos <= 25){
//                 litro = litro + 50;
//             }else{
//                 litro = litro + 25
//             }
//             console.log(`El total a pagar por el conbustible de tu ${vehiculo} es de : ${litro}`);
//             break;
//         case "autobus" :
//             litro = litrosConsumidos * 55;
//             if (litrosConsumidos <= 25){
//                 litro = litro + 50;
//             }else{
//                 litro = litro + 25
//             }
//             console.log(`El total a pagar por el conbustible de tu ${vehiculo} es de : ${litro}`);
//             break;
//             default :
//                 console.log("ingrese un vehiculo valido !!")
//     }
// };
// let totalApagarFinal = totalAPagar("autobus", 30);
// console.log(totalApagarFinal); //35 lineas de codigo

//segundo intento. tratar de disminuir lineas de codigo
//const totalAPagar = (vehiculo, litrosConsumidos) => {
//     let litro;
        
//     switch (vehiculo) {
//         case "coche":
//             litro = litrosConsumidos * 86;
//             break;
//         case "moto" :
//             litro = litrosConsumidos * 70;
//             break;
//         case "autobus" :
//             litro = litrosConsumidos * 55;
//             break;
//             default :
//                 console.log("ingrese un vehiculo valido !!")
//             }
//         if (litrosConsumidos <= 25){
//             litro = litro + 50;
//         }else{
//             litro = litro + 25
//         }
//     console.log(`El total a pagar por el conbustible de tu ${vehiculo} es de : ${litro}`);
// };
// let totalApagarFinal = totalAPagar("coche", 30);
// console.log(totalApagarFinal);   //23 lineas de codigo

/*Local de sándwiches
Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes. Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros recibiremos los datos de la siguiente manera.
Nos llega un string indicando el tipo de sándwich base. Estos tienen un valor base diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego, el sistema pregunta al cliente qué tipo de pan quiere. Tienen para elegir entre otras tres opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—. Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron. Finalmente, deberá retornar el valor numérico del total a pagar del cliente.*/


// const pedido = (base,tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {
//     let total;
//     if (base == "pollo"){
//         total = 150;
//     }
//     if (base == "carne"){
//         total = 200;
//     }
//     if (base == "veggie")
//         total = 100;
//     if (tipoPan == "blanco"){
//         total = total + 50;
//     }
//     if (tipoPan == "negro"){
//         total = total + 60;
//     }
//     if (tipoPan == "s/gluten"){
//         total = total + 75;
//     }
//     if (queso == true){
//         total += 20;
//     }
//     if (tomate == true){
//         total += 15;
//     }
//     if (lechuga == true){
//         total += 10;
//     }
//     if (cebolla == true){
//         total += 15;
//     }
//     if (mayonesa == true){
//         total += 5;
//     }
//     if (mostaza == true){
//         total += 5
//     }
    
//     return total;
// }
// let totalApagar = pedido("pollo","blanco", false, false, false, false, false, false);
// console.log(`El valor total de tu pedido es ${totalApagar}`);  // 41 lineas

// intento mejorarlo con menos lineas de codigo
// const pedido = (base,tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza)=> {
//     let total = 0;
//     let baseSandwches = base == "pollo"?  total = 150 : total += 0;
//     let tipoPanes = tipoPan == "blanco"? total += 50 : total += 0;
//     let quesoSi = queso == true? total += 20 : total += 0;
//     let tomatoSi = tomate == true? total += 15 : total += 0;
//     let lechugaSi = lechuga == true? total += 10 : total += 0;
//     let cebollaSi = cebolla == true? total += 15 : total += 0;
//     let mayonesaSi = mayonesa == true? total += 5 : total += 0;
//     let mostazaSi = mostaza == true? total += 5 : total += 0;

//     return total;
// }
// let totalPedido = pedido("pollo","blanco", true, true, false, false, false, true);
// console.log(`El total a pagar es de : $ ${totalPedido}`);  //14 lineas... excelente

/*¿Cuál es el número secreto?
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.*/

// let numeroUsuario = parseInt(prompt("Ingrese un numero de 1 a 10 :"));
// const numeroSecretoFun = numero => {
//     let numeroAleatorio = Math.floor(Math.random() * 10) + 1;  //forma de sacar un numero aleatorio de 1 a 10 sin tener decimales
//     console.log(`El numero escogido al azar fue : ${numeroAleatorio}`)
//     console.log(`El numero ingresado por ti fue : ${numeroUsuario}`)
//     if (numeroAleatorio == numeroUsuario){
//         console.log("Eres adivino, asertaste con exito");
//     }else{
//         console.log("No acertaste, suerte para la proxima");
//     }
// }
// numeroSecretoFun(numeroUsuario);

/*abrirParacaidas()   Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.*/

// const abrirParacaidasFun = (velocidad, altura) => {
//     if ((velocidad < 1000) && (altura >=2000 && altura < 3000)){
//         console.log("Es el momento indicadoo para abrir el paracaidas");
//     }else{
//         console.log("no es el momento de abrir el paracaidas")
//     }
// };
// let abrirParacaidas = abrirParacaidasFun(900, 2100);

/*Traductor condicional   Usando la estructura switch, crea un programa en el que si un usuario ingresa 
"casa", "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le informe que la palabra ingresada es incorrecta.*/

// let palabraUsuario = prompt("ingrese una palabra para traducir entre casa, perro, pelota arbol o genio : ");

// const traductor = string => {
//     switch (palabraUsuario){
//         case "casa" :
//             console.log(`La palabra ${palabraUsuario} en ingles se escribe House `);
//             break;
//         case "perro" :
//             console.log(`La palabra ${palabraUsuario} en ingles se escribe Dog`);
//             break;
//         case "pelota" :
//             console.log(`La palabra ${palabraUsuario} en ingles se escribe Ball `);
//             break;
//         case "arbol" :
//             console.log(`La palabra ${palabraUsuario} en ingles se escribe Tree`);
//             break;
//         case "genio" :
//             console.log(`La palbra ${palabraUsuario} en ingles se escribe Genius`);
//             break;
//         default :
//             console.log("La palabra ingresada no esta en las opciones!!!")
//     };
// };
// let traductorPalabra = traductor(palabraUsuario);

/*Valoración de películas  Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.*/

// console.log("Deseamos saber tu apreciacion de la pelicula que acavas de ver, valorela en una escala de  1 a 5 ")
// let valoracion = prompt("1. Muy mala,   2. Mala.   3. Mediocre.  4. Buena.  5. Muy buena : ");

// const valoracionPeliculaFun = string => {
//     switch (valoracion){
//         case "1" : 
//         case "2" :
//         case "3" :
//             console.log("Lamentamos que no te haya gustado");
//             break;
//         case "4" :
//         case "5" :
//             console.log("Fue una buena opcion");
//             break;
//         default :
//             console.log("Ingrese una valoracion validad");
//     }
//     console.log("Gracias por tu valoracion. Hasta la proxima peli!");
// }
// let valoracionPeliculas = valoracionPeliculaFun(valoracion);











