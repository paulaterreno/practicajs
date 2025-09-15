 //Ejercicio 5: Uso de Arrays y Condicionales 
//Crea un programa que solicite al usuario ingresar 5 nombres y los 
//almacene en un array. Luego, solicita al usuario ingresar un nombre y 
//verifica si ese nombre se encuentra en el array. 

const prompt = require('prompt-sync')();
let nombre1 = prompt('Ingrese un primer nombre: ')
let nombre2 = prompt('Ingrese un segundo nombre: ')
let nombre3 = prompt('Ingrese un tercer nombre: ')
let nombre4 = prompt('Ingrese un cuarto nombre: ')
let nombre5 = prompt('Ingrese un quinto nombre: ')

let nombres = [nombre1, nombre2, nombre3, nombre4, nombre5];

let nombreX = prompt('Ingrese un nuevo nombre para buscar coincidencia: ')


if (nombres.includes(nombreX)) { //METODO DE ARRAY PARA BUSCAR "INLCUYE"
    console.log('Se encontro coincidencia') 
} else { 
    console.log('No se encontro nombre')
}
