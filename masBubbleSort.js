let personas = [
    {
    nombre: "Dua",
    apellido: "Lipa",
    ocupacion: "cantante",
    estatura: 173,
    },
    {
    nombre: "Ariana",
    apellido: "Grande",
    ocupacion: "cantante",
    estatura: 160,
    },
    {
    nombre: "Taylor",
    apellido: "Swift",
    ocupacion: "cantante",
    estatura: 180,
    },
];

const bubbleSort = (array, propiedad) => {
    for (let i = 0; i < array.length; i++) {
        let aux;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j][propiedad] > array[j + 1][propiedad]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
                }
            }
        }
};
bubbleSort(personas, "estatura");
//console.log(personas);


//ordenar el siguiente array de menor a mayor
const arrayDesordenado = [5, 2, 8, 1, 3];

const ordenarArray = array => {
    let aux;
    for( let i = 0; i < array.length; i++){
        for( let j = 0; j < array.length - 1; j++){
            if (array[j] > array[j + 1]){
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
}
ordenarArray(arrayDesordenado);
console.log(arrayDesordenado);
