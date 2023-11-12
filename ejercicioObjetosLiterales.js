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
  // podes continuar tu codigo a partir de aca!

const functionConsultarCliente = function (titular){
    for (let i = 0; i < this.clientes.length; i++) {
        if (this.clientes[i].titularCuenta === titular)
            return this.clientes[i];
    }
};

const functionDepositar = function (titular, cantidadDinero){
    let cliente = this.functionConsultarCliente(titular);
    cliente.saldoEnPesos += cantidadDinero;
    console.log("Deposito realizado, su nuevo saldo es :",  this.cliente.saldoEnPesos);
}
    



// deposito: function (nombre, dinero) {
//     const cliente = this.consultarCliente(nombre);
//     cliente.saldoEnPesos += dinero;
//     console.log(
//         'Depósito realizado, su nuevo saldo es: ',
//         cliente.saldoEnPesos
//     );
// },




let banco = {
    clientes : arrayCuentas,
    consultarCliente : functionConsultarCliente,
    deposito : functionDepositar,

};

let clienteEncontrado = banco.consultarCliente("Ramon Connell");
console.log(clienteEncontrado);
let consignacion = banco.deposito("Jacki Shurmer", 100000);
