
//● Ejercicio 2: Eliminar al último invitado
//Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El
//ltimo invitado no puede asistir. Elimina al último invitado y muestra quién
//fue eliminado y el estado actualizado de la lista.

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
let invitadoEliminado = invitados.pop();

console.log(`Los invitados confirmados son: ${invitados}`)
console.log(`El invitado eliminado es: ${invitadoEliminado}`);