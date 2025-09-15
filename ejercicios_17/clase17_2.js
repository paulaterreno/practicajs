
//• Ejercicio Resuelto en clase (2): Cálculo de descuento por edad
//Solicita al usuario su edad y usa una función flecha para aplicar un descuento
//dependiendo de la edad. Puedes tomar punto de partida los siguientes datos:
//✓ 65 anos = 15% de descuento
//✓ Menor a 65 = No hay descuento
//Ejercicios con ARROW FUNCTION (De la clase anterior):


let anios = parseInt(prompt("Ingresa tu edad: "));

const descuento = () => {
if (anios >= 65) {
 console.log("Tenes un 15% de descuento");
 } else if (anios < 65) {
 console.log("No hay descuento");
 }
};

descuento()