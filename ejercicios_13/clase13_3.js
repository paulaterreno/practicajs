//Ejercicio 3: Mensaje global y local
//Declara una variable global llamada saludoGlobal con el valor "Hola desde
//el scope global". Luego, crea una función llamada mostrarMensaje que
//declare una variable local llamada saludoLocal con el valor "Hola desde el
//scope local" y que imprima ambos mensajes.


const saludoGlobal = " Hola desde el scope GLOBAL";

function mostrarMensaje () {
    let saludoLocal = "Hola desde scope LOCAL "
    return saludoGlobal + saludoGlobal
}

let saludando = mostrarMensaje();
console.log(saludando)