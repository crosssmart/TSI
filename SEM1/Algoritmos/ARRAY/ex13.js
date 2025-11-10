const prompt = require("prompt-sync")()

let v = []
let i
let qnt = 0

for (i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite um número: "))
}

let numCont = Number(prompt("Digite o número a ser contado: "))

for (const num of v) {
    if (num === numCont) {
        qnt++
    }
}
console.log("O número", numCont, "aparece", qnt, "vezes no vetor.")
