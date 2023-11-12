/*Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.*/
const convertidor = centimetro => {
    return centimetro*2.54
}
let convertidorPulgadas = convertidor(2);
console.log(convertidorPulgadas);

/*Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”*/
const urlfun = string => {
    
    return ("http://www." + string + ".com");
}
let url = urlfun("adriana");
console.log(url);

/*Crear una función que recibe un string y devuelve la misma frase pero con
admiración.*/
const admiracion = string => {
    return (string + "!!");
}
let fraseAdmiracion = admiracion("Hola Mundo");
console.log(fraseAdmiracion);

/*Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.*/
const edad = numero => {
    return numero * 7;
}
let edadPerro = edad(2);
console.log(`La edad de tu perro es de ${edadPerro} años`);

/*Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.*/
const costoHora = salario =>{
    return (salario/40);
}
let valorHora = costoHora(400000);
console.log(`El valor del costo por hora es de $ ${valorHora}`);

/*Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.*/
const calculadorIMC = (altura, peso) => {
    let imc = (peso/(altura*altura))
    return imc;
}
let imcCalualado = calculadorIMC(1.58, 58);
console.log(`El indice de masa corporal es de ${imcCalualado}`);

/*Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.*/
const convertidorString = string => {
    return string.toUpperCase();
}
let convertidorMayusculas = convertidorString("adriana");
console.log(convertidorMayusculas);

/*Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.*/
const tipoDatofun = tipo => {
    return (typeof tipo);
}
let tipoDato = tipoDatofun("hola");
console.log(`El tipo de dato ingresado es : ${tipoDato}`);

/*Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.*/
const calcularCircunferenciaFun = radio => {
    let circunferencia = 2 * Math.PI * radio;
    return circunferencia;
}
let calcularCircunferencia = calcularCircunferenciaFun(5);
console.log(`La circunferncia  es de :${calcularCircunferencia}`);



