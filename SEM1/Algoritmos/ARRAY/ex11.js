const prompt = require("prompt-sync")()

let v = []
let i
let pMaior = 0
let pMenor = 0

for (i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite um número: "))
}

for (i = 0; i < 10; i++) {
    if (v[i] > v[pMaior]) {
        pMaior = i
    }
    if (v[i] < v[pMenor]) {
        pMenor = i
    }
}

console.log("Posição do maior elemento (" + v[pMaior] + "): " + pMaior);
console.log("Posição do menor elemento (" + v[pMenor] + "): " + pMenor);
