//Ejercicio 4: Número par o impar
//Crea una función declarada llamada esPar que reciba un número y devuelva
//"Es par" si el número es par o "Es impar" si el número es impar. Usa una
//variable local para guardar el resultado

const prompt = require('prompt-sync')() ;
let num = parseInt(prompt('Ingrese número:  '));



function esPar (num) {
    let resultado;
    if (num  % 2 === 0) {
  resultado = "Es par";      //asignamos valor a resultado dentro de if
    } else {
    resultado = "Es impar";
    }
    
    return resultado;
}

let msj = esPar(num);
console.log(msj) 