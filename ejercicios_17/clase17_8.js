//Ejercicio 6: Numero N
//Hacer un programa que calcule la suma de los N primeros números
//naturales, dónde N es el número límite ingresado por teclado.

let num = parseInt(prompt("Ingrese un número"));
let suma = 0;

for (let i = 0; i <= num; i++) {
 suma= suma + i;
}

console.log(suma);
