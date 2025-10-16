const prompt = require("prompt-sync")()

let numero, ehPrimo

ehPrimo = true

numero = Number(prompt("Digite um número inteiro positivo: "))

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        ehPrimo = false
    }
}

if (ehPrimo == true) {
    console.log(numero, "é um número primo.")
} else {
    console.log(numero, "não é um número primo.")
}