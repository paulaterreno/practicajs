//• Ejercicio 10:  
//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
//semana correspondiente. Si el número no está dentro de ese rango, 
//muestra un mensaje de error.

const prompt = require('prompt-sync')();
const semana = parseFloat(prompt('Ingrese un número del 1 al 7: '))

let lunes = 1;
let martes = 2;
let miercoles = 3;
let jueves = 4;
let viernes = 5;
let sabado = 6;
let domingo = 7;

switch (semana) {
    case 1:
        console.log('El número ingresado corresponde al día LUNES')
     break;
         case 2:
        console.log('El número ingresado corresponde al día a MARTES')
        break;
            case 3:
        console.log('El número ingresado corresponde al día MIERCOLES')
        break;
            case 4:
        console.log('El número ingresado corresponde al día JUEVES')
        break;
            case 5:
        console.log('El número ingresado corresponde al día VIERNES')
        break;
            case 6:
        console.log('El número ingresado corresponde al día SABADO')
        break;
            case 7:
        console.log('El número ingresado corresponde al dia DOMINGO')
        break;

    default:
        console.log('Número invalido.')
        break;
}