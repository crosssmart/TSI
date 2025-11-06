const prompt = require("prompt-sync")()

let v = []

for (let i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite o número: "))
}

let numSub = Number(prompt("Digite o número a ser substituído (X): "))

for (let i = 0; i < v.length; i++) {
    if (v[i] == numSub) {
        v[i] = 0
    }
}

console.log("Vetor modificado:", v);
