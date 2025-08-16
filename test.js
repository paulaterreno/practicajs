//PARA VISUALIZAR RESULTADOS EN CONSOLA, NODE + NOMBREDRARCHIVO.JS

//----------CALCULADORA DE DESCUENTO.---------------
//Logica: Se debe ingresar un monto. Luego se debe calcular el porcentaje deseado del monto. Luego debe mostrar el resultado

//const prompt = require('prompt-sync')();
//require es la forma en Node.js de importar un módulo o librería externa
//'prompt-sync' es el nombre de un paquete de npm que permite leer datos del usuario por consola de forma síncrona (es decir, que el programa se detiene y espera a que el usuario escriba algo).
//prompt-sync, en realidad exporta una función que, al ejecutarse, devuelve otra función que será la que uses para pedir datos. Los () ejecutan esa primera función para que te devuelva el prompt listo para usar.
//const numeroIngresado = parseFloat(prompt("Ingrese monto de la venta: "));
//debo guardar en una variable el ingreso del dato, convirtiendo ese dato en numero decimal
//let descuento = parseFloat(prompt("Ingrese porcentaje a aplicar: "));
//debo guardar en una variable el descuento deseado, convirtiendo ese dato en numero decimal
//let calculoPorcentaje =   numeroIngresado * descuento / 100;
//operacion de calculo de descuento
//console.log(calculoPorcentaje)
//let precioFinal = calculoPorcentaje - numeroIngresado ;
//operacion de calculo de descuento total SOBRE precio ingresado
//console.log("El precio final es:" + precioFinal);
//debo mostrar por consola el precio final.


//----------PERMISO DE INGRESO DE USUARIO.---------------
//Comprobar si el usuario es mayor a 18. const prompt = require('prompt-sync')();


//let edadIngresada = parseFloat(prompt("Ingrese su edad: "));

//if  (edadIngresada >= 18) {
//    result = "Acceso permitido";
//  } else {
//    result = "Acceso denegado";
//  }

//  console.log(result);

// En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes 
//escribir un programa en JavaScript que: 
//1. Solicite al usuario que ingrese un número cualquiera. 
//2. Calcule el doble de ese número. 
//3. Muestre el resultado en la consola. 


const prompt = require('prompt-sync')();
let IngreseNumero = parseFloat(prompt("Ingrese número:"));
let numeroResultado = IngreseNumero * 2;
console.log("El resultado es:" + numeroResultado);
