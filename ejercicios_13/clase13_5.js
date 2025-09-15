//Ejercicio 5: Concatenar nombres (función expresada)
//Crea una función expresada llamada concatenarNombres que reciba dos
//nombres (nombre y apellido) como parámetros y devuelva el nombre
//completo concatenado.

const nombre = "Paula";
const apellido = "Terreno"

let concatenarNombres = function (nombre,apellido) {
    return nombre + " " + apellido;
}

console.log(concatenarNombres(nombre,apellido))