let leia = require("readline-sync")

let vetorstring = [
    "Boxer",
    "Pastor Alemão",
    "Pinscher",
    "Husky Siberiano",
    "Corgi",
    "Caramelo",
    "Pitbull"
  ];

  let numeros = Array(5)

  let vetorNumeros = [ 5, 10, 22, 4, 7]

  for (let contador = 0; contador < vetorstring.length; contador ++){
      console.log(`Posição[${contador}] = ${vetorstring[contador]}`)
  }

//   for (let contador = 0; contador < numeros.length; contador ++){
//     numeros[contador] = leia.questionInt("Digite um numero: ")
// }

// console.table(numeros)

console.table(vetorstring.sort())

console.table(vetorNumeros.sort(compareAsc).reverse())

function compareAsc(a,b) {
    return a - b;
}
