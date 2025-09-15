//En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un 
//programa en JavaScript que: 
//1. Pida al usuario que ingrese un número. 
//2. Verifique si el número es positivo, negativo o igual a cero. 
//3. Muestre un mensaje indicando cuál es el caso.

const prompt = require('prompt-sync')();
const ingresarNumero = parseFloat(prompt("Ingrese un número:"));

if (ingresarNumero > 0) {
  console.log("El número es positivo");
} else if (ingresarNumero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es igual a cero");
}

