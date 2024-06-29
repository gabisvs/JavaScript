const nota = require("readline-sync");

let nota1 = nota.questionFloat("Digite o valor da nota1: ");
let nota2 = nota.questionFloat("Digite o valor da nota2: ");
let nota3 = nota.questionFloat("Digite o valor da nota3: ");
let nota4 = nota.questionFloat("Digite o valor da nota4: ");

let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("A medial final é :" + mediaFinal.toFixed(1));
