// EXEMPLO 01 -----------------------------------------------------------------

// const leia = require('readline-sync');

// let numero, contador;

// numero = leia.questionInt("Calcule a Tabuada do: ")

// for(contador = 1; contador <= 10; contador++){
//      console.log(numero + " x " + contador + " = " + numero * contador);
// }


// EXEMPLO 02 ------------------------------------------------------------------

// const leia = require('readline-sync');

// let numero, contador, numero2;


// for(contador = 1; contador <= 4; contador++){
//     numero = leia.questionInt("Calcule a Multiplicacao de: ");
//     numero2 = leia.questionInt("Vezes o numero: ")
//      console.log(numero + " x " + numero2 + " = " + numero * numero2);
// }


// EXEMPLO 03 ------------------------------------------------------------------------

const leia = require('readline-sync');

let numero, contador, numero2, cont=0;


for(contador = 1; contador <= 4; contador++){
    numero = leia.questionInt("Calcule a Multiplicacao de: ");
    numero2 = leia.questionInt("Vezes o numero: ")
     console.log(numero + " x " + numero2 + " = " + numero * numero2);

     if (numero % 2 == 0){
        cont++
     }
}

console.log(cont + " vezes multiplicacao de numeros pares! ")