const prompt = require("prompt-sync")()

let v = []
let i, j

for (i = 9; i > -1; i--) {
    v[i] = Number(prompt("Digite um número: "))
}

console.log("Vetor Invertido:", v);
