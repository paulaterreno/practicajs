
//● Ejercicio 10: Reemplazar una palabra en una frase
//Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por
//"verano" y muestra la frase actualizada.

let frase = ["Me", "gusta", "el", "invierno"];


let modificaFrase = frase.map(palabra => {
  if (palabra === "invierno") {
    return "verano";
  } else {
    return palabra;
  }
});

let fraseCorregida= modificaFrase.join(" ");

console.log(fraseCorregida); 