const leia = require("readline-sync");

let numero, contador = 1; 
let somaPositivos = 0;

do {
    numero = leia.questionInt("Digite um numero: ");

    if (numero === 0) {
        break;
    }

    if (numero > 0) {
        somaPositivos += numero; // Adiciona o número positivo à soma
    }

    contador++;

} while (contador <= 10);

console.log("A Soma dos numeros positivos: " + somaPositivos);
