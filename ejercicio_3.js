//Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
//aritméticos. Escribe un programa que: 
//1. Pida al usuario que ingrese dos números. 
//2. Sume ambos números. 
//3. Muestre el resultado de la suma. 
//Requisitos: 
//• Utiliza prompt() para recibir los números. 
//• Utiliza parseFloat() para convertir las entradas a números. 
//• Almacena los resultados en variables adecuadas y muestra el resultado.

const prompt = require('prompt-sync')();
primerNumero = parseFloat(prompt("Ingrese un número:"));
segundoNumero = parseFloat(prompt("Ingrese un segundo número:"));
const resultado = primerNumero + segundoNumero;
console.log(resultado)
