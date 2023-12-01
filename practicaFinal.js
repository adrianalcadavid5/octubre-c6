/*Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

let arregloLikes = [
    {
    nombre:"juan",
    likes: 18
},
{
    nombre:"Luisa",
    likes: 20
},
{
    nombre:"Italo",
    likes: 11
},
{
    nombre:"pablo",
    likes: 16
},
{
    nombre:"Adriana",
    likes: 38
},
{
    nombre:"Rodrigo",
    likes: 118
},
{
    nombre:"Oh",
likes: 138
},
{
    nombre:"García",
    likes: 182
},
{
    nombre:"Lucia",
    likes: 1842
},
{
    nombre:"Zuniga",
    likes: 1
},
{
    nombre:"Amashta",
    likes: 1831
},
{
    nombre:"Pedroza",
    likes: 100
},
{
    nombre:"pedro",
    likes: 52
},
{
    nombre:"juanito",
    likes: 199
},
{
    nombre:"juanita",
    likes: 18012
}
];

const bubbleSort = (array, propiedad) => {
    let aux;
    for (let i = 0; i < array.length; i++){

        for(let j = 0; j < array.length - 1; j++){
            if (array[j][propiedad] < array[j + 1][propiedad]){
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}
bubbleSort(arregloLikes, "likes");
//console.log(arregloLikes);

//El de mayor cantidad de likes obtenidos
//console.log(arregloLikes[0]);

//cuanto obtuvo el segundo
//console.log(arregloLikes[1]);


//cuanto el tercero
//console.log(arregloLikes[2]);

//cuanto el que menos tuvo
//console.log(arregloLikes[arregloLikes.length - 1]);

/*Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.*/

let arregloTemp = [
	{
		dia: 22,
		mes: 12,
		maxTemp: 27,
		minTemp: 11,
	},
	{
		dia: 25,
		mes: 10,
		maxTemp: 25,
		minTemp: 15,
	},
	{
		dia: 23,
		mes: 11,
		maxTemp: 23,
		minTemp: 13,
	},
	{
		dia: 20,
		mes: 10,
		maxTemp: 20,
		minTemp: 10,
	},
	{
		dia: 29,
		mes: 1,
		maxTemp: 31,
		minTemp: 21,
	},
	{
		dia: 12,
		mes: 2,
		maxTemp: 32,
		minTemp: 23,
	},
	{
		dia: 27,
		mes: 7,
		maxTemp: 27,
		minTemp: 17,
	},
	{
		dia: 22,
		mes: 12,
		maxTemp: 27,
		minTemp: 11,
	},
	{
		dia: 2,
		mes: 1,
		maxTemp: 29,
		minTemp: 11,
	},
	{
		dia: 22,
		mes: 12,
		maxTemp: 27,
		minTemp: 11,
	},

];

const bubbleSortTemperatura = (array, propiedad, orden) => {
    let aux;
    if(orden === "ASC"){
        for(let i = 0; i < array.length; i++){

            for(let j = 0; j < array.length - 1; j++){
                if(array[j][propiedad] > array[j + 1][propiedad]){
                    aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux
                }
            }
        }
    } else if (orden === "DESC"){
        for(let i = 0; i < array.length; i++){

            for (let j = 0; j < array.length - 1; j++){
                if(array[j][propiedad] < array[j + 1][propiedad]){
                    aux = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = aux;
                }
            }
        }
    }else{
        console.log("Por favor indicar el orden, ASC o DESC");
    }
}
//a) Ordenar por temperatura mínima de menor a mayor.
bubbleSortTemperatura(arregloTemp,"minTemp","ASC");
console.log(arregloTemp);

//b) Ordenar por temperatura máxima de mayor a menor.
bubbleSortTemperatura(arregloTemp,"maxTemp","DESC");
console.log(arregloTemp);


