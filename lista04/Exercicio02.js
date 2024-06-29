const leia = require("readline-sync");

let numero, contador = 1; 
let totalmenores21 = 0;
let totalmaior50 = 0;

console.log("\n++++++++++++++++MENU++++++++++++++++");
leia.keyInYNStrict("\nDeseja usar nossa verificacao de idade? "); 

while (contador <= 11) { 

    numero = leia.questionInt("Digite uma idade: ");

    if (numero <= 0) {
        console.log("Digite uma idade válida!");
        continue; 
    }

    if (numero < 21) {
        totalmenores21++;
    } else if (numero > 50) {
        totalmaior50++;
    }

    contador++;
}

console.log("Total de pessoas menores de 21 anos: " + totalmenores21);
console.log("Total de pessoas maiores de 50 anos: " + totalmaior50);

console.log("\t\t_________Fim do programa_________");
