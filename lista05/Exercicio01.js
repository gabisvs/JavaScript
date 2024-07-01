const leia = require("readline-sync")

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let numero = leia.questionInt("Digite um numero que voce deseja encontrar: ")
let verificador = false 
let indice  

for(let contador = 0; contador < 10; contador++){
    if (numero == vetor[contador]){
        verificador = true 
        indice = contador
    }

} 
if(verificador == true){
    console.log("Foi encontrado o numero: " + numero + " na posicao " + indice)
}else{
    console.log("Não foi encontrado! ")
}