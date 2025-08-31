// Ejercicio 1: ¿Positivo, negativo o cero? 

//Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa 
//que le pida al usuario un número cualquiera. El programa deberá analizar si el 
//número ingresado es positivo, negativo o cero. Utiliza estructuras if para 
//resolverlo y muestra un mensaje explicativo en cada caso. 

const prompt = require('prompt-sync')();
let ingreseNumero = parseFloat(prompt('Ingrese un número: '))


let resultado = ingreseNumero > 0 ? "número positivo" : ingreseNumero < 0  ? "número negativo" : "cero";
console.log(resultado);