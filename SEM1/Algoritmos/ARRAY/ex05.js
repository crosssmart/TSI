const prompt = require("prompt-sync")()

let v = []

let total = 0
for (let i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite o número: "))
    total += v[i]
}

console.log("A soma de todos os elementos é:", total);