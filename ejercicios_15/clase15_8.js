//● Ejercicio 8: Extraer una parte de una frase
//Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte
//"gatos" utilizando el método adecuado.

let fraseGatos = ["Los", "gatos", "son", "geniales"];
let buscar = fraseGatos.find(elemento => elemento == "gatos") 
console.log(buscar)