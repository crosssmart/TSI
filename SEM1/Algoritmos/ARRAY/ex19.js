const prompt = require("prompt-sync")()

let v = []
let vPOS = []
let i

for (i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite um número " + i + " :"))

    if (v[i] > 0) {
        vPOS.push(v[i])
    }
}

console.log("Vetor compactado (positivos):", vPOS)


