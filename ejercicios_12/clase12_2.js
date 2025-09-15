//● Ejercicio 2: Do While 
//Escribe un programa que solicite al usuario ingresar una contraseña. Si la 
//contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese 
//la correcta. La contraseña correcta es "1234". 

const prompt = require('prompt-sync')();

let pass = '1234'
let userPass;

do {
userPass = prompt('Ingrese contraseña: ');
if (userPass !== pass) {
    console.log('Contraseña incorrecta. Vuelva a intentar');
}

} while (userPass !== pass); //cuando la condicion deja de cumplirse   el ciclo se corta.
console.log('Contraseña correcta!')