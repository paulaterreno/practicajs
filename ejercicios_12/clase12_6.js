//● Ejercicio 6: Iguales a 10 pero menores de 1000 
//Dada una matriz, recorrer sus valores y sumar solo los números que estén 
//por encima o sean iguales a 10, pero menores que 1000. 

const matrizNumeros = [7,9,12,15,16,
                      24,36,42,62,78,
                      94,100,256,756];


let sumarNumeros = 0;//ariable para almacenar suma

for (i= 0; i<matrizNumeros.length; i++) {
let numeros = matrizNumeros[i] //elemento de la matriz al que se accede en cada iteración
if (numeros >= 10  && numeros <1000) {
    sumarNumeros = sumarNumeros + numeros;
    console.log('la suma es:  ' + sumarNumeros);
}
}