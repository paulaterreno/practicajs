//• Ejercicio 4:  
//Declara una variable nombre y pide al usuario que ingrese su nombre. 
//Verifica si el nombre ingresado es igual a tu nombre. 

const prompt = require('prompt-sync')(); 
let tuNombre = prompt("Ingrese su nombre: ")

const miNombre = "paula";

 
if ( miNombre.toLowerCase() === tuNombre.toLowerCase()) { //se agrega metodo para conventir en minúscula string y evitar resultados indeseados.
  console.log("Nuestro nombre es igual =)" );
} else {
  console.log("Nuestro nombre es diferente :'(" );
}