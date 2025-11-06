// let notas = []
// notas[0] = 10
// notas[1] = 7.5
// notas[2] = 5
// let media = (notas[0] + notas[1] + notas[2]) / 3
// console.log(notas, media);

let prompt = require("prompt-sync")()

let notas = []
let qtdAlunos

qtdAlunos = Number(prompt("Entre com qtdAlunos: "))

for (let i = 0; i < qtdAlunos; i++) {
    notas[i] = Number(prompt("Entre com uma nota: "))
}

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

