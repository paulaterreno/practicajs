//● Ejercicio 4: Ciclo For - Array 
//Crear un programa que permita registrar las notas de varios estudiantes 
//usando arrays y mostrarlas por pantalla: 
//1. Crear un array para almacenar las notas. 
//2. Define un array vacío llamado notas donde almacenaremos las notas 
//de los estudiantes. 
//3. Pide al usuario que ingrese las notas de varios estudiantes una por una 
//utilizando el método prompt. 
//4. Usa un bucle for para solicitar las notas y asignarlas directamente a 
//posiciones específicas del array notas. 
//5. Imprime en consola las notas ingresadas usando el array notas. 

const prompt = require('prompt-sync')();

let estudiante1 = prompt('Ingrese nota de estudiante 1: ');
let estudiante2 = prompt('Ingrese nota de estudiante 2: ');
let estudiante3 = prompt('Ingrese nota de estudiante 3: ');
let estudiante4 = prompt('Ingrese nota de estudiante 4: ');
let notas = [estudiante1, estudiante2, estudiante3, estudiante4];

for (let i = 0; i< notas.length; i++) {

console.log (`La nota del estudiante ${i + 1} es:  ${notas[i]}`);

}
 