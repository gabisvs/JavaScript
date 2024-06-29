const salario = require("readline-sync");

let salarioBruto = salario.questionFloat("Digite o valor do salario: ");
let adiconalNoturno = salario.questionFloat("Digite o valor do adicional noturno: ");
let horasExtras = salario.questionFloat("Digite o valor das horas extras: ");
let descontos = salario.questionFloat("Digite o valor dos descontos: ");

let salarioLíquido = salarioBruto + adiconalNoturno + horasExtras * 5 - descontos;

console.log("O salario líquido é: " + salarioLíquido.toFixed(2));