//● Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
//Crea una función declarada llamada calcularAreaTriangulo que reciba dos
//parámetros: la base y la altura de un triángulo. La función debe devolver el
//área del triángulo.
//Pista: Usa la fórmula: area = base x altura %2

const prompt = require('prompt-sync')() 
let base = parseInt(prompt('Para calcular área de triangulo, ingrese base: ')) //se crea con prompt para hacer distintas pruebas
let altura = parseInt(prompt('ara calcular área de triangulo, ingrese altura: '))

function calcularAreaTriangulo (base,altura) {
   return base * altura / 2
}

let area = calcularAreaTriangulo(base,altura) // Guardamos y llamamos a la funcion que tiene el cálculo del área
console.log(`El area del triangulo es: ${area}  `)