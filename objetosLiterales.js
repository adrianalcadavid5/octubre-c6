let curso = {
    cantidadDeAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario: "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cursada es de " + this.horario;
    }
}
//console.log(curso); // aca me muestra todo el objeto completo

//si deseo ver alguna propiedad en especial hago uso del dot notation que es poner un . y escribir la propiedad
//console.log(curso.cantidadDeAlumnos);
//console.log(curso.notificaciones());

//si deseo imprimirlo de una forma mas bonita lo haria asi:
//console.log("La cantidad de alumnos de este curso es :"+ curso.cantidadDeAlumnos);

//metodos de los objetos literales
let miPais = {
    nombre : "Argentina",
    poblecion : 4009200,
    capital : "Buenos Aires",
    decirNacionalidad : function () {
        return "yo nací en " + this.nombre;
    }
};

//console.log(miPais.decirNacionalidad()); //yo nací en Argentina

let perro = {
    nombre : "Firulais",
    edad : 12,
    vacunado : true, 
};
///otro ejercicio
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(horas){
        this.energia = (this.energia - horas*5); 
        this.experiencia = (this.experiencia + horas*2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);


