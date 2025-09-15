//• Ejercicio 5: 
//Escribe un programa que pida al usuario que ingrese tres números y 
//determine cuál es el mayor de los tres. 


const prompt = require('prompt-sync')();
const numero1 = parseInt(prompt("Ingrese primer número: "));
const numero2 = parseInt(prompt("Ingrese primer número: "));
const numero3 = parseInt(prompt("Ingrese primer número: "));



if ( numero1 >= numero2 && numero1 >= numero3 ) {
  console.log("el numero mayor es:" + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  console.log("el numero mayor es: " + numero2);
} else  {
  console.log("el numero mayor es: " + numero3); //seguir anidando IF, else para caso de que no sea ninguna de las otras condiciones
}



