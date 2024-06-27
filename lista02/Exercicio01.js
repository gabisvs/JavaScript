const leia = require('readline-sync');

let numero1, numero2, numero3;

numero1 = leia.questionInt("\nDigite o numero A: ")
numero2 = leia.questionInt("\nDigite o numero B: ")
numero3 = leia.questionInt("\nDigite o numero C: ")

if (numero1 + numero2 > numero3) {
     console.log("\nÉ maior do que C.");
} else if (numero1 + numero2 < numero3) {
     console.log("\nÉ menor do que C.");
} else if (numero1 + numero2 == numero3) {
     console.log("\nÉ igual a C.");
}