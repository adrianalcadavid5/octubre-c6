const prompt = require("prompt-sync")({ sigint: true });
console.log("probando");

// let edad = prompt("ingrese su edad : ");
// console.log(edad);

//Para convertir Pulgadas a centtímetros. 1 pulgada = 2.54 cm
//1. crear una funcion que convierta pulgadas en centimetros. Recibe por parámetro pulgadas y retorna su equivalente en centimetros
let numero = prompt("ingrese el numero de pulgadas a convertir en centimetros :");

function pulgada(){
    return numero * 2.54
}
console.log(pulgada() + " centimetros" );

//no me funciono con este metodo
// let pulgada1 = numero => numero * 2.54;
// console.log(pulgada1());

//2.crear una funcion que recibe un string y lo convierte en una URL ejemplo "pepito" y es devuelto
//como "http://www.pepito.com"
let url = prompt("ingrese el nombre que deseas tener en tu URL personal :");

function personal(){
    return (`https://www.${url}.com`)
}
console.log(personal());

//3. Crear una funcion que reciba un string y devuelva la misma frase pero con admiración
let frase = prompt("ingrese una frase por favor :");

function fraseAd(){
    return (`${frase}!!`)
}

console.log(fraseAd())

//7. crear una funcion que recibe un string en minuscula, lo convierta a mayuscula y lo retorne
//metodo .toUpperCase()   debe ser arrow function

let convertir = () => {
    let texto = prompt("ingreso el texto que sea convertir a MAYUSCULAS sostenida: ");
    return texto.toUpperCase();
}
console.log(convertir());

//8. crear una funcion que recibe un parametro y devuelve que tipo de dato es ese parametro
let tipoParametro = () => {
    let parametro = prompt("ingrese un parametro de cualquier tipo: ");
    return (typeof parametro);
}
console.log(tipoParametro());// siempre me va a salir un string por que todo lo que ingresa por el
//prompt por consola son strings

//9. crear una funcion que le pasemos el radio de un circulo y nos devuelva la circunferencia
let rcircunferencia = () => {
    let radio = prompt("ingrese el valor del radio :");
    let calculocircunferencia = 2 * Math.PI * radio;
    return calculocircunferencia;
}
console.log("la circunferencia es de : " + rcircunferencia());
