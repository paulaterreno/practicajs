//Se ingresa por teclado un número natural de hasta 2 cifras, si tiene una cifra
//que muestre lo mínimo que le falta para ser un número de 2 cifras; de lo
//contrario, que muestre lo mínimo que le falta para ser un número de 3 cifras.
//Considerar que el usuario ingresa números de hasta dos cifras

let num = parseInt(prompt("Ingrese un número de hasta dos cifras"));

if (num < 10 ) {
 console.log(`A usted le falta ${10 - num} para ser de dos cifras`);
} else if (num >= 10 && num < 100 ) {
 console.log(`A usted le falta ${100 - num} para ser de tres cifras`);
} else {
 console.log("Ingrese un número válido");}