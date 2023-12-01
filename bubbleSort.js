/*A partir de él siguiente array de edades nos solicitan realizar lo siguiente*/

const edades = [33, 27, 34, 30, 34, 25];

/*Desarrollar una función que ordene internamente de forma descendente las edades*/

const bubbleSortDesc = (arr)=>{

    let aux = undefined

    for( let i = 0; i < arr.length; i++){
        
        for(let j = 0; j < arr.length - 1; j++ ){
           if( arr[j] < arr[j + 1]) { // 5 > 2 
                aux = arr[j] // 5
                arr[j] = arr[j + 1] // 2 
                arr[j + 1] = aux
            }
        }

    }
    
}
bubbleSortDesc(edades)
//console.log(`En forma descendente quda asi: ${edades}`);

/*Desarrollar una función que ordene internamente de forma ascendente las edades*/

const bubbleSortAsc = (arr)=>{

    let aux = undefined

    for( let i = 0; i < arr.length; i++){
        
        for(let j = 0; j < arr.length - 1; j++ ){
           if( arr[j] > arr[j + 1]) { // 5 > 2 
                aux = arr[j] // 5
                arr[j] = arr[j + 1] // 2 
                arr[j + 1] = aux
            }
        }

    }
    
}
bubbleSortAsc(edades)
//console.log(`En forma ascendente quda asi: ${edades}`);

/*2. Dado un array de strings:
¿Cómo pudieras ordenar el array anterior, alfabéticamente?*/

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

const bubbleSortAbc = (arr)=>{

    let aux = undefined

    for( let i = 0; i < arr.length; i++){
        
        for(let j = 0; j < arr.length - 1; j++ ){
           if( arr[j] > arr[j + 1]) { // 5 > 2 
                aux = arr[j] // 5
                arr[j] = arr[j + 1] // 2 
                arr[j + 1] = aux
            }
        }

    }
    
}

bubbleSortAbc(letras)
//console.log(`ordenado en forma alfabetica seria ${letras}`);

/*3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:*/

const arrayCuentas =
    [
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
            estaHabilitada: false,
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
    ]

    /*Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, 
    la misma deberá retornar él array ordenado*/
    
    const bubbleSortAscendente = (arr)=>{

        let aux = undefined
    
        for( let i = 0; i < arr.length; i++){
            
            for(let j = 0; j < arr.length - 1; j++ ){
               if( arr[j].saldo > arr[j + 1].saldo) { // 5 > 2 
                    aux = arr[j] // 5
                    arr[j] = arr[j + 1] // 2 
                    arr[j + 1] = aux
                }
            }
    
        }
        
    }
bubbleSortAscendente(arrayCuentas)
//console.log(arrayCuentas);

/*Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta, 
la misma deberá retornar él array ordenado.*/

const bubbleSortEdad = (arr)=>{

    let aux = undefined

    for( let i = 0; i < arr.length; i++){
        
        for(let j = 0; j < arr.length - 1; j++ ){
           if( arr[j].edadTitular > arr[j + 1].edadTitular) { // 5 > 2 
                aux = arr[j] // 5
                arr[j] = arr[j + 1] // 2 
                arr[j + 1] = aux
            }
        }

    }
    
}
bubbleSortEdad(arrayCuentas)
//console.log(arrayCuentas);

// otros ejercicios
let listaCartas = [6,3,5,8,7,9,2,4,1,0];

const ordenarCartasFun = array => {
    let mayor;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){ 
            if(array[j] > array[j + 1]){
                mayor = array[j];
                array[j] = array[j + 1];
                array[j + 1] = mayor;
            }
        }
    }
}


let ordenarCartas = ordenarCartasFun(listaCartas);
//console.log(listaCartas);

let persona = {
    nombre : "Dua",
    apellido : "Lipa",
    ocupacion : "cantante",
    estatura : 173,
}
//console.log(persona.nombre) // Dua
//console.log(persona.ocupacion) // cantante


//¿Cómo podrías ordenar la siguiente colección, de menor a mayor, considerando solo la estatura?

let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

const bubbleSortEstatura = (array, propiedad) => {
    let aux;
    for (let i = 0; i < array.length; i++){

        for(let j = 0; j < array.length - 1; j++){
            if (array[j][propiedad] > array[j + 1][propiedad]){
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}
bubbleSortEstatura(personas, "estatura")
console.log(personas);







