const leia = require('readline-sync');

let codigo;
let quantidade;

console.log("\n Produtos: ");
console.log("\n 1 -- Cachorro Quente ");
console.log("\n 2 -- X-Salada ");
console.log("\n 3 -- X- Bacon ");
console.log("\n 4 -- Bauru ");
console.log("\n 5 -- Refrigente ");
console.log("\n 6 -- Suco de laranja ");

codigo = leia.questionInt("\nDigite o Codigo do Produto: ")

switch (codigo) {
    case 1:
        preco = 10.00;
        console.log("\nR$10,00.");
        break;
    case 2:
        preco = 15.00;
        console.log("\nR$15,00.");
        break;
    case 3:
        preco = 18.00;
        console.log("\nR$18,00.");
        break;
    case 4:
        preco = 12.00;
        console.log("\nR$12,00.");
        break;
    case 5:
        preco = 8.00;
        console.log("\nR$8,00.");
        break;
    case 6:
        preco = 13.00;
        console.log("\nR$13,00.");
        break;
    default:
        console.log("\nDigite um codigo valido!")
        preco = 0;
        break;
}

{
quantidade = leia.questionInt("\nDigite a Quantidade do produto: ")

let valortotal = (preco * quantidade);

console.log("O Valor total é: R$" + valortotal.toFixed(2));
}