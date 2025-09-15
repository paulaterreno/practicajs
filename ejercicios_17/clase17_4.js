//Solicita al usuario el nombre de su mascota y si está vacunada. Usa una
//función flecha para verificar y mostrar su estado de vacunación.

let nombreMascota = prompt("Ingrese el nombre de su mascota");
let vacunado = prompt("Ingrese si o no si su mascota está vacunada");

let estadoVacunacion = () => {
 if (vacunado === "si") {
console.log("La mascota " + nombreMascota + " está vacunada");
} else if (vacunado === "no") {
 console.log("No está vacunado");
         } else {
     console.log("Por favor ingrese una respuesta válida");
 }

}

estadoVacunacion()