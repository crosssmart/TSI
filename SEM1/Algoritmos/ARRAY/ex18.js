const prompt = require("prompt-sync")()

let vA = []
let vB = []
let vC = []
let i

for (i = 0; i < 5; i++) {
    vA[i] = Number(prompt("Digite um número para o vetor 1: "))
    vB[i] = Number(prompt("Digite um número para o vetor 2: "))

    vC.push(vA[i])
    vC.push(vB[i])
}

console.log(vA);
console.log(vB);
console.log(vC);

