//● Ejercicio 7: Mensaje según la hora
//Declara una variable global llamada horaActual (puedes asignarle un valor
//fijo). Crea una función declarada llamada mostrarSaludo que imprima
//"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o
//"Buenas noches" en cualquier otro caso.

const prompt = require('prompt-sync')();
let hora = parseFloat(prompt('Ingrese hora del momento: '))

function mostrarSaludo (hora) {
    let horaSaludo;
    if (hora < 12) {
        horaSaludo = "Buenos días";
    
    } else if (hora > 18) {
    horaSaludo = "Buenas tardes";
    
    } else {
    horaSaludo = "Buenas noches";
}
 return horaSaludo;

}

let saludar = mostrarSaludo(hora)
console.log(saludar)