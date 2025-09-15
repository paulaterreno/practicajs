//● Ejercicio 8: Rojo y Verde 
//Para este ejercicio vamos a generar dos funciones: 
//a) Una va a sumar los valores en la diagonal marcada en rojo. 
//b) La otra va a marcar los valores de la diagonal marcada en verde. 
//Ambas funciones deben devolver un resultado único. Rojo: 505 
//Verde 505 
//IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el 
//método “push” en los Arrays. ¡Este método lo veremos en las próximas 
//clases, pero si desean pueden investigarlo para resolver este desafío

function sumaDiagonalRoja () {
    let roja = [] ; // primera vuelta, agrega 1
    for (let i = 0; i < 10; i++) { // i = 1; 1 < 10; i ++
        let valor = 1 + i * 11; // en cada vuelta 1 + 0 *  11      
        roja.push(valor); // 1 + 1 - 11 
    }
    return roja.reduce ((a,b) => a + b , 0);
}

//iagonal verde let valor = 10 + i * 9

