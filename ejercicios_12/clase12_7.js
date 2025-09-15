//● Ejercicio 7: Matriz 5x5 
//Declara una variable que contenga una matriz de 5x5 llena de puros 
//números enteros y positivos. Luego, escribe un algoritmo para sumar todos 
//los números en la matriz. 


const matrizNum = [10,20,25,85,45,
                   55,75,80,65,88,
                   44,20,7,6,80,
                   10,9,65,4,20,
                   75,15,29,24,30];

let sumaGuardar = 0;
for (let i = 0; i < matrizNum.length; i++) {
sumaGuardar = sumaGuardar + matrizNum[i];
console.log('la suma total es: ' +sumaGuardar);




}