const leia = require('readline-sync');

let numero;

numero = leia.questionInt("\nDigite o numero: ");

if (numero < 0) {
    console.log("\nÉ negativo.");
} else {
    console.log("\nÉ positivo.");
}

if (numero % 2 === 0) {
    console.log("\nÉ par.");
} else {
    console.log("\nÉ ímpar.");
}
