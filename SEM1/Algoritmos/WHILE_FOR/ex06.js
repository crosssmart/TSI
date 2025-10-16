const prompt = require("prompt-sync")()

let numero, pares, impares, n
pares = 0
impares = 0
n = 0
numero = Number(prompt("Quantos números você vai digitar? "))

for (let i = 0; i < numero; i++) {
    n = Number(prompt("Digite o número: "))

    if (n % 2 === 0) {
        pares += n
    } else {
        impares += n
    }
}

console.log("A soma dos números pares é:", pares);
console.log("A soma dos números impares é:", impares);


