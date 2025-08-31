/*Ejercicio 5: Encuentra los números pares entre dos valores 
Consigna: 
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El 
programa debe mostrar todos los números pares que se encuentran entre esos 
dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
los números entre el inicio y el fin. Si el número inicial es mayor que el final, el 
programa debe mostrar un mensaje indicando que los valores son inválidos. */

const prompt = require('prompt-sync')()
let numero1 = parseInt(prompt('Ingrese un número de inicio: '));
let numero2 = parseInt(prompt('Ingrese un número de fin: ')) 

if (numero1 > numero2) {
    console.log("Los valores son inválidos: el número inicial es mayor que el final.");
} else {
    // Si son válidos, recorremos desde inicio hasta fin
    for (let i = numero1; i <= numero2; i++) {
        if (i % 2 === 0) {   // 
            console.log(i);
        }
    }
}