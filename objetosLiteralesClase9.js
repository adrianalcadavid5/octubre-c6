//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
 /* Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
  nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
  objeto cliente que corresponda con ese nombre ingresado.*/

const consultarClienteFun = function(titular){
    for (let i = 0; i < this.clientes.length; i++){
        if(this.clientes[i].titularCuenta === titular){
            return this.clientes[i];
        }
    }
    return `Cliente de nombre "${titular}" no encontrado, verificar o no existe.`;
};
/* Crear otro método llamado depósito que recibirá dos parámetros: el titular de cuenta y una cantidad de dinero a depositar. 
El método debe obtener la cuenta correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su nuevo saldo es: XXXX”.*/
const depositar = function (titular, dinero){
    let cliente = this.consultarCliente(titular);
    if (typeof cliente === "object"){
        cliente.saldoEnPesos += dinero;
        console.log(`Deposito realiado con exito señor ${titular}, su nuevo saldo es de $${cliente.saldoEnPesos}`);
    }else{
        console.log(`cliente ${titular} no encontrado, deposito no realizado, por favor verifique el titular.`);
    };
};

/*Crear un último método llamado extracción que recibirá también dos parámetros: el titular de cuenta y el monto a extraer. 
El método debe obtener la cuenta correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”. De lo contrario, deberá imprimir 
“Extracción realizada correctamente, su nuevo saldo es: XXXX”.*/

const extraccion = function (titular, dinero){
    let cliente = this.consultarCliente(titular);
    if(typeof cliente === "object"){
        if(cliente.saldoEnPesos >= dinero){
            cliente.saldoEnPesos -= dinero;
            console.log(`Su retiro de ${dinero} realizado con exito señor ${titular}, su nuevo saldo es de ${cliente.saldoEnPesos}`)
        }else{
            console.log(`Retiro no realizado, Señor ${titular}, usted no tiene saldo suficiente para este retiro, su saldo es de $${cliente.saldoEnPesos}`);
        };
        
    };
};


let banco = {
    clientes : arrayCuentas,
    consultarCliente : consultarClienteFun,
    depositoCliente : depositar,
    retiroCliente : extraccion,
};


let clienteEncontrado = banco.consultarCliente("Abigael Natte");
console.log(clienteEncontrado);
//let depositoRealizado = banco.depositoCliente("Juan gonzalo",500000);  
let retiroDinero = banco.retiroCliente("Abigael Natte",20000);
console.log("_____________________________________");
console.log(clienteEncontrado);



