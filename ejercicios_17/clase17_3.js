//Ejercicio 1: Conversor de monedas
//Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
//una función flecha para convertir el monto a pesos.



let precio = parseFloat(prompt("Ingresa un monto en dólares: "));
let tasaDeCambio = parseFloat(prompt("Ingresa una tasa de cambio: "));
let cambioAPesos = () => {
 return precio * tasaDeCambio
}
console.log(`Usted recibirá $${cambioAPesos()}`);