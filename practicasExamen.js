// PRACTICANDO
// Reversa una cadena:
// Escribe una función que tome una cadena como entrada y devuelva la misma cadena pero al revés.
const cadenaReversa = string =>{
    let palabra = [];
    for(let i = 0; i < string.length; i++){
        palabra.unshift(string[i])
    };
    return palabra;
};
let cadenaPalabraInversa = cadenaReversa("hola");
//console.log(cadenaPalabraInversa);

let nombre =  "adriana";
//console.log(nombre.length);
//console.log(nombre[0]);

let saludo = "Hola, mi vida";
//console.log(saludo.slice("mi"));
//console.log(saludo.indexOf("te amo"));
//console.log(saludo.slice(21));
// console.log(saludo.length);
// let nuevoSaludo = saludo.trim();
// console.log(nuevoSaludo);
// console.log(nuevoSaludo.length);
//console.log(saludo.replace("vale","Valeria"));
//console.log(saludo.split(", "));

let numero = 5; //number
let despedida = "chao"; //string
let verdadero = true; //boolean
let contacto = {nombre : "adriana",
apellido : "cadavid",
nacionalidad : "colombiana"}; //object
let edades = [1,2,3,4,5];

//console.log(typeof edades);

//TABLA DE MULTIPLICAR
const tablaMultiplicar = numero => {
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} * ${i}  = ${numero*i}`);
    };
};
//tablaMultiplicar(5);

// TODO ---> 1
// Realizar una función que reciba por parámetro dos valores,
// el primero será numérico y el segundo booleano.
// Si el número es par y el booleano es true entonces retornar “Ha pasado la condición”.
// En cambio, si el número es impar y el booleano es false retornar “No ha pasado
// la condición”.
// Para cualquier otro caso, retornar -1

const verificar = (numero, Boolean) => {
    if(numero % 2 === 0 && Boolean === true){
        return "Ha pasado la condicion"
    }else if(numero % 2 === 1 && Boolean === false){
        return "No ha pasado la condicion"
    }else{
        return -1;
    }
}
let confirmacionVerificacion = verificar (2, false);
//console.log(confirmacionVerificacion);

// TODO ---> Simulacion frontend E-commerce
/*1)Las personas encargadas del backend nos enviaron una lista de productos pero 
      se olvidaron de asignarles un ID unico para cada producto,
      nuestra tarea es agregarles ese ID unico a cada uno
      Requisito: debe empezar en 1 y ser secuencial 
  2) Nos solicitan crear un algoritmo que pueda determinar el dinero total que ingresaria
      si se venden todos los productos que tenemos en stock
  3) Debemos crear una funcion que al ejecutarse filtre los productos que sean
      X categoria y retornar dichos productos en un nuevo arreglo(debe ser dinamica)*/

let productos = [
        {
          nombre: "motorola",
          precio: 40,
          cantidad: 5,
          categoria: "telefonia",
        },
        {
          nombre: "notebook",
          precio: 80,
          cantidad: 10,
          categoria: "computacion",
        },
        {
          nombre: "zapatilla",
          precio: 20,
          cantidad: 2,
          categoria: "indumentaria",
        },
        {
          nombre: "Macbook",
          precio: 100,
          cantidad: 7,
          categoria: "computacion",
        },
        {
          nombre: "samsung",
          precio: 60,
          cantidad: 15,
          categoria: "telefonia",
        },
        {
          nombre: "monitor",
          precio: 30,
          cantidad: 5,
          categoria: "computacion",
        },
];
const asigIdProductos = array => {
    for (let i = 0; i < array.length; i++){
        array[i].id = i +1;
    }
}

asigIdProductos(productos)
console.log(productos);

const ventaTotal = (array) => {
    let venta = 0;
    for(let i = 0; i < array.length; i++){
        venta += array[i].cantidad * array[i].precio;
    }
    return venta
}
let ventaTotalProductos = ventaTotal(productos);
console.log(ventaTotalProductos);



