//Ejercicio 2: Número mayor (función expresada)
//Crea una función expresada llamada encontrarMayor que reciba dos
//números como parámetros y devuelva el número mayor.

const prompt = require('prompt-sync')() 
let num1= parseInt(prompt('Ingrese numero 1:  ')) //se crea con prompt para hacer distintas pruebas
let num2 = parseInt(prompt('Ingrese numero 2: '))


let encontrarMayor = function (num1,num2) {
    if (num1 > num2)
        return num1;
    else {
        return num2;
    }
}

let mayor = encontrarMayor(num1,num2);
console.log(`El numero MAYOR es: ${mayor}`)