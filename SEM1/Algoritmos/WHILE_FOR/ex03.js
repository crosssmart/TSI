const prompt = require("prompt-sync")()

let numero, soma
soma = 0
numero = Number(prompt("Quantos números você vai somar? "))

for (let i = 0; i < numero; i++) {
    soma += Number(prompt("Digite o número: "))
}
console.log("A soma é:", soma);
