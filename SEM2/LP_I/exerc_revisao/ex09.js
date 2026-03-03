const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número para verificar se é par ou ímpar: "))

if (num % 2 == 0) {
    console.log(num, "é par!");
} else {
    console.log(num, "é ímpar!");
}