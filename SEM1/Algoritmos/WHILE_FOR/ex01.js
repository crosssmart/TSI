const prompt = require("prompt-sync")()

let numero, soma, i
soma = 0
numero = Number(prompt("Digite um valor de n: "))

for (i = 0; i < numero; i++) {
    soma += i + 1
}

console.log("A soma dos " + numero + " primeiros inteiros positivos é " + soma + " .")
