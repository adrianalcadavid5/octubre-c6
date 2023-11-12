// Arrays y colecciones

//como ingresar a un array dentro de otro array. ejemplo al numero 28 
//let variados = ["Nacho", 34, true, false, [34,28,37,40,43]];
//console.log(variados[4][1]);

//el primer [indica el indice del array principal][el segundo posicion del indice del array dentro del array]

//aprendiendo metodos del array.
//.push  se usa para agregar elementos al array.

// let colores = ["azul", "blanco", "rojo", "verde"];

// colores.push("violeta", "amarillo");

// console.log(colores);
// console.log(colores.length);

// .pop() me sirve para sacar un elemento del array, no recibe parámetros, ya que elimian el ultimo
// let nombres = ["adriana", "lucia", "valeria", "juan", "jhonIvan"];
// nombres.pop(); // elimina el ultimo del array
// console.log(nombres); // muestra el array menos el ultimo
// console.log(nombres.pop()); // elilmian el ultimo y me mustra cual fue el que elimino, solo ese
// console.log(nombres);

// con el metodo .pop puede retornar el elemento eliminado y si lo necesito, puedo gurardarlo en una variable
// let nombres = ["adriana", "lucia", "valeria", "juan", "jhonIvan"];
// let ultimo = nombres.pop();
// console.log(ultimo); // jhonIvan

//con el metodo .shift(); puedo elimiar el primer elemento de un array asi;
// let nombres = ["juana", "mariana", "pablo"];
// let elPrimero = nombres.shift();
// console.log (nombres);   //[ 'mariana', 'pablo' ]
// console.log (elPrimero);  //juana

// el metodo .unshift(); me permite insertar uno o mas datos al inicio de un array
// let colores = ["azul", "blanco","rojo"];
// colores.unshift("amarillo", "violeta");
// console.log(colores); //[ 'amarillo', 'violeta', 'azul', 'blanco', 'rojo' ]

// el metodo .indexOf(); recibe como parámetro una cadena de texto, la cual va a ser buscada dentro 
//del array en el cual se ejecuto el método  y retornará el indice en el que se encuentra el elemento  buscado.
//let colores = ["azul", "blanco", "rojo", "verde"];
//console.log (colores.indexOf("rojo")); //2

// el metodo .join(); coje un array y me retorna un string con todos sus elementos separados por una coma
//let diasSemana = ["lunes", "martes", "miercoles", "jueves","viernes"];
//console.log (diasSemana.join());  //lunes,martes,miercoles,jueves,viernes



// A. Acceder a elementos específicos de un array.
let notas = [5,4,6,8,10];

console.log(notas[4]); //imprime el indice 4 = numero 10
console.log(notas[0]); // imprime el indice 0 = numero 5

//B. Modificar cada uno de sus elementos e imprimirlos.

notas[0] = 10;
notas[1] = 10;
notas[2] = 10;
notas[3] = 10;

console.log(notas);

TERMINAR!!!!!!



