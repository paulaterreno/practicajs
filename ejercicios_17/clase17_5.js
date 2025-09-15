//Ejercicio 3: Número secreto
//Escribí un programa que piense un número de forma aleatoria del 1 al 10 y
//le pida al usuario que lo trate de adivinar. Si el número es correcto debe
//imprimir en la consola “Felicitaciones, ¡ese era!", de lo contrario, debe
//imprimir "Lo siento, ¡intenta nuevamente!"



let numRandom = Math.random()*10;
let numAleatorio = Math.ceil(numRandom);
console.log("numAleatorio: ", numAleatorio);

for (let i= 1; i<=10 ; i++) {
    let numUsuario = parseInt(prompt(`Intento #${i}: Adiviná el número de 1 a 10: `));

if(numUsuario !== numAleatorio) {
 console.log("Lo siento, ¡intenta nuevamente!");

} else { (numUsuario == numAleatorio) 
    console.log("Felicitaciones, ¡ese era!");
    }

}
