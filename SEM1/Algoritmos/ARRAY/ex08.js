const prompt = require("prompt-sync")()

let v = []
let vQuad = []
for (let i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite o número: "))

    vQuad[i] = v[i] * v[i]
}

console.log("Vetor Original:", v);
console.log("Vetor dos Quadrados:", vQuad);

