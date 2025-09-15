//Ejercicio 3: 
//Declara dos variables booleanas condicion1 y condicion2. Pide al 
//usuario que ingrese dos valores booleanos (true o false) y muestra el 
//resultado de diversas combinaciones lógicas. 


const prompt = require('prompt-sync')();

let condicion1 = prompt("Ingrese el primer valor booleano a comparar: ");
let condicion2 = prompt("Ingrese el segundo valor booleano a comparar: ");

// Convertimos texto a booleano con metodo
condicion1 = (condicion1.toLowerCase() === "true");
condicion2 = (condicion2.toLowerCase() === "true");

if (condicion1 && condicion2) {
  console.log("Ambas condiciones son verdaderas (AND = true)");
} else if (condicion1 || condicion2) {
  console.log("Al menos una condición es verdadera (OR = true)");
} else {
  console.log("Ninguna condición es verdadera");
}
