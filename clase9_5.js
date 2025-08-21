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



//• Ejercicio 6:  
//Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
//edad. Muestra un mensaje personalizado según el caso. 

//• Ejercicio 7:  
//Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
//libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
//kg a libras, Pista: 2.20462) 

//• Ejercicio 8:  
//Pide al usuario que ingrese las longitudes de los tres lados de un 
//triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
//escaleno. (Investiga sobre los triángulos para determinar la formula) 

//• Ejercicio 9:  
//Define una constante PI con el valor de pi (3.14159). Pide al usuario 
//que ingrese el radio de un círculo y calcula su área y perímetro 
//utilizando la constante PI. 

//• Ejercicio 10:  
//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
//semana correspondiente. Si el número no está dentro de ese rango, 
//muestra un mensaje de error.