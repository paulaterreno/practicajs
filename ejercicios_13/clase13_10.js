
//● Ejercicio 10: Factorial de un número (Ejercicio entrevista)
//Crea una función expresada llamada calcularFactorial que reciba un número
//y devuelva su factorial.
//Fórmula del factoria


//realiazado en clases

let calcularFactorial = function(n) {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial = factorial * 1
    }
    return factorial
}

console.log(calcularFactorial(20))