//● Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
//Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba
//una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
//Fórmula:

const gradosC = 25;
let convertirCelsiusAFahrenheit = function (gradosC) {
    return gradosC * 9/5 + 32
}

let gradosF = convertirCelsiusAFahrenheit(gradosC)
console.log(gradosF)