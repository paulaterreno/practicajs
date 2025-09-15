//● Ejercicio 1: While CLASE 12
//Crea un programa que solicite al usuario ingresar números continuamente 
//hasta que el usuario ingrese un número negativo. Luego, imprime la suma 
//de todos los números ingresados. 

const prompt = require('prompt-sync')();

let suma = 0;
let numero = parseFloat(prompt("Ingresa un número: "));


while (numero >= 0) {
  suma += numero;
  numero = parseFloat(prompt("Ingresa otro número: "));
}

console.log("La suma de los números ingresados es: " + suma);
