const prompt = require("prompt-sync")()

let v = []
let i
let pMaior = 0
let pMenor = 0
let notasTotal = 0

for (i = 0; i < 15; i++) {
    v[i] = Number(prompt("Digite as notas dos 15: "))

    notasTotal += v[i]
}


let media = notasTotal / v.length

for (i = 0; i < 15; i++) {
    if (v[i] > v[pMaior]) {
        pMaior = i
    }
    if (v[i] < v[pMenor]) {
        pMenor = i
    }
}

console.log("Média geral da turma:", media.toFixed(1));
console.log("Maior nota:", v[pMaior].toFixed(1));
console.log("Menor nota:", v[pMenor].toFixed(1));

