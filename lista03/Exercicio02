const leia = require('readline-sync');

let nome; 
let cargo;
let salario;
let reajuste; 

nome = leia.question("\nDigite o Nome do colaborador: ")

console.log("\n Cargos: ");
console.log("\n 1 -- Gerente ");
console.log("\n 2 -- Vendedor ");
console.log("\n 3 -- Supervisor ");
console.log("\n 4 -- Motorista");
console.log("\n 5 -- Estoquista ");
console.log("\n 6 -- Tecnico de TI ");

cargo = leia.questionInt("\nDigite o cargo: ")

salario = leia.questionInt("\nDigite o salario: ")

switch (cargo) {
    case 1:
        reajuste = 0.10; // 10%
        console.log("\n10%.");
        break;
     case 2:
        reajuste = 0.07; // 7%
        console.log("\n7%.");
        break;
    case 3:
        reajuste = 0.9; // 9%
        console.log("\n9%.");
        break;
    case 4:
        reajuste = 0.6; // 6%
        console.log("\n6%.");
        break;
    case 5:
        reajuste = 0.5; // 5% 
        console.log("\n5%.");
        break;
    case 6:
        reajuste = 0.8; // 8%
        console.log("\n8%.");
        break;
    default:
        reajuste = 0;
        console.log("\nCargo inválido!");
        console.log("Não foi possível calcular o reajuste devido a um cargo inválido.");
        break;
}

{
let novosalario = salario + (reajuste * salario);

console.log("O salario reajustado é: R$" + novosalario.toFixed(2));
}

