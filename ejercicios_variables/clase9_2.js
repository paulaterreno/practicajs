//Ejercicio 2:  
//Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
//valores numéricos de tu elección. Pide al usuario que ingrese un 
//número y verifica si está dentro del rango definido por las constantes.

const prompt = require('prompt-sync')();

const ingreseNumero = parseFloat(prompt("Ingrese número: "))

const rangoMinimo = 0
const rangoMaximo = 50

if ( ingreseNumero <= 49) {
  console.log("Número ingresado dentro del rango mínimo");
} else if (ingreseNumero === 50) {
  console.log("Número ingresado dentro del rango máximo"); 
} else { (ingreseNumero > 50) 
    console.log("Número fuera del rango")
}

