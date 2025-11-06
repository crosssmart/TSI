const prompt = require("prompt-sync")()

let v = []
let i
let pMaior = 0

for (i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite um número: "))
}

for (i = 0; i < 10; i++) {
    if (v[i] > v[pMaior]) {
        pMaior = i
    }
}

console.log("Vetor: [" + v + "]");
console.log("Maior elemento: " + v[pMaior]);
console.log("Posição do maior elemento: " + pMaior);


