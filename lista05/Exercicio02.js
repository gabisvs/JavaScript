const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerMatriz(callback) {
    let matriz = [];
    let contador = 0;

    function lerElemento(i, j) {
        rl.question(`Digite o elemento [${i+1}][${j+1}]: `, (input) => {
            let numero = parseInt(input);

            if (isNaN(numero)) {
                console.log("Por favor, digite um número válido.");
                lerElemento(i, j);  
            } else {
                matriz[i][j] = numero;
                contador++;
                if (contador < 9) {
                    if (j < 2) {
                        lerElemento(i, j + 1);
                    } else {
                        lerElemento(i + 1, 0);
                    }
                } else {
                    callback(matriz);
                }
            }
        });
    }

    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
    }
    lerElemento(0, 0);
}

function diagonalPrincipal(matriz) {
    let elementos = [];
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        elementos.push(matriz[i][i]);
        soma += matriz[i][i];
    }
    return { elementos, soma };
}

function diagonalSecundaria(matriz) {
    let elementos = [];
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        elementos.push(matriz[i][2 - i]);
        soma += matriz[i][2 - i];
    }
    return { elementos, soma };
}

lerMatriz((matriz) => {
    let principal = diagonalPrincipal(matriz);
    let secundaria = diagonalSecundaria(matriz);

    console.log("Elementos da Diagonal Principal:");
    console.log(principal.elementos.join(" "));
    console.log("Soma dos Elementos da Diagonal Principal:");
    console.log(principal.soma);

    console.log("Elementos da Diagonal Secundária:");
    console.log(secundaria.elementos.join(" "));
    console.log("Soma dos Elementos da Diagonal Secundária:");
    console.log(secundaria.soma);

          rl.close();
});