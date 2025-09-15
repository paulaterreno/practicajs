/*Ejercicio 4: ¿Es par o impar? 
Consigna: 
Los números pueden ser pares o impares. Escribe un programa que le pida al 
usuario un número y determine si es par o impar. Muestra un mensaje 
explicativo indicando qué significa cada caso. */

const prompt = require("prompt-sync")();
const ingreseNum = parseFloat(prompt("Ingrese un número"))

if (ingreseNum % 2 === 0) {
  console.log(`El número ${ingreseNum} es par. Esto significa que al dividirlo por 2, el resto es 0.`);
} else {
  console.log(`El número ${ingreseNum} es impar. Esto significa que al dividirlo por 2, el resto es 1.`);
}