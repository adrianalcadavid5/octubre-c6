//NOTAS: para comentar todo un bloque tambien puedo utilizar ctrol + } y comenta todo lo marcado
//let - const

let nombreDeUsuario = "pepito";
//las variables tienen 4 partes, 1 palabra reservada, 2 nombre de la variable. 3 signo de asignacion 4 valor de la variablee.

//clg y enter o log y con esto creamos un console.log,, me funciona el log y tab
const APELLIDO = "perez"; // las variables const no se pueden reasignar
let edad = 22;

nombreDeUsuario = "maria" // para asignarle un nuevo valor a una variable existente no debo ponerle let

console.log(nombreDeUsuario + " " + APELLIDO + " " + edad);

// TIPOS DE DATOS
//Strings - number - booleanos

//Strings
let frase = "Hola como estas?";  // es un string y se contruye con comillas simples o dobles
// podemos utilizar dos tipos de comillas para poder utilizar comillas dentro de un texto ejemplo
let frase1 = "hola 'como estas'?"
console.log(frase1);

//numbers, pueden ser positivos, enteros, negativos y decimales con punto
let altura = 176.4;
// cuando vemos bases de datos, los telefonos y DNI lo vemos como string por que no se hacen operaciones con el. por buenas practicas

// typeof me muestra de que tipo de dato es la variable.. ejemplo
console.log(typeof altura); // la respuesta es number

//booleanos --> true o false
let usuarioLogueado = true; // se usan muchos para condicional el sistema

//si no quiero darle valor a una variable por el momento puedo crearlo asi:
let nombre; // queda como undefined - indefinico

//null no existen datos
//NaN not a Number   * que no es un numero
//null es la respuesta de una base de datos cuando pido un valor de una variable que aun no existe
//NaN es una respuesta a algo ejemplo
let a = 2;
let b = "hola";
let resultado = a * b 
console.log(resultado); // respuesta es NaN

//OPERADORES
// Operadores matemáticos o aritmeticos
//simbolos que para javascript tiene un significado
let x = 12
let y = 5

console.log( x + y);
console.log( x - y);
console.log(x * y);
console.log(x /y);
console.log(x % y );// mod modulo, lo que le sobra de la division, sobrante, se utiliza para saber si un numero es primo, entero.

//concatenacion

let saludo = "hola como estas"
let usuario = "pepe"

console.log(saludo + " " + usuario);//esto ya no se usa con frecuencia

//template literals, es una forma de interpolar se usan los backsticks
// se sacan lo asentos graves con alt + 96  o ctrol alt + }} los asentos graves son ``
console.log(`hola ${saludo} ${usuario}`);// esto es interpolar variables con ${variable}

//Operadores de comparacion

//Operadores lógicos