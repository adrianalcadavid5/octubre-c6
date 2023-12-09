let notas = [10, 4, 5, 8, 9, 2, 7];

/*let notasHastaElCien = notas.map(function(nota){
    return nota * 10
})
console.log(notasHastaElCien);*/

// MAP Y FILTER obtenemeos un nuevo array

let notasHastaElCien = notas.map(nota => nota * 10);
//console.log(notasHastaElCien);

/*let notasAprobadas = notas.filter(function(nota){
    return nota >= 7
})*/


let notasAprobadas = notas.filter(nota => nota >= 7);
//console.log(notasAprobadas);

// let sumaNotas = notas.reduce(function(acumulador, nota){
//     return acumulador + nota
// });
// reduce devolverá un dato unico.
let sumaNotas = notas.reduce((acumulador, nota)=> acumulador + nota)
//console.log(sumaNotas);

// notas.forEach(function(valor, indice){
//     console.log("En la posicion " + indice + " Tengo el valor de " + valor);
// })

//me permite recorrer un arra y obtener de el su indice o su valor
//notas.forEach((valor, indice)=> console.log("En la posicion " + indice + " Tengo el valor de " + valor));

//MAP
/*Nos dejaron una lista con los horarios de partida de algunos aviones. 
Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de travesura, 
queremos adelantar una hora cada partida. Nuestro trabajo será utilizar el método map para poder 
lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.*/

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(horario => horario - 1);
//console.log(horariosAtrasados);

//FILTER
/*Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados 
para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados 
y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.*/

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante){
    return estudiante.promedio >= 7
})

let desaprobados = estudiantes.filter(estidiante => estidiante.promedio < 7);

//console.log(aprobados);
//console.log(desaprobados);

//REDUCE
// Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
// Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
let vueltas = [5, 8, 12, 3, 22];

let totalVueltas = vueltas.reduce((acumulador, vuelta) => acumulador + vuelta);

//console.log(totalVueltas);

//FOREACH
/*Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista 
por consola utilizando un foreach.*/
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach((valor,indice) => console.log(valor));
