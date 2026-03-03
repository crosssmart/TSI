const prompt = require("prompt-sync")();

let n

do {
    n = Number(prompt("Digite um número(para sair é 0): "))
} while (n !== 0);