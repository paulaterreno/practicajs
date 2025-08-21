// Ejercicio 1:  
//Declara dos variables numéricas numero1 y numero2. Pide al usuario 
//que ingrese dos números y muestra cuál es mayor o si son iguales. 

const prompt = require('prompt-sync')();
numero1 = parseFloat(prompt("Ingrese un primer número"));
numero2 = parseFloat(prompt("Ingrese un segundo número"))

if ( numero1 > numero2) {
  console.log("El primer número ingresado es MAYOR al segundo número ingresado:");
} else if (numero1 < numero2) {
  console.log("El primer número ingresado es MENOR al segundo número ingresado:");
} else if  (numero1 === numero2) { 
  console.log("ambos números son iguales");
}


