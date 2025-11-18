const prompt = require("prompt-sync")()

let vA = []
let vB = []
let vC = []
let i, j

for (i = 0; i < 5; i++) {
    vA[i] = Number(prompt("Digite um número para o Vetor A: "))
}

for (i = 0; i < 5; i++) {
    vB[i] = Number(prompt("Digite um número para o Vetor B: "))
}

for (i = 0; i < vA.length; i++) {
    let repete = false
    for (j = 0; j < vC.length; j++) {
        if (vA[i] == vC[j]) {
            repete = true
            break
        }
    }

    if (!repete) {
        vC[vC.length] = vA[i]
    }

}

for (i = 0; i < vB.length; i++) {
    let repete = false
    for (j = 0; j < vC.length; j++) {
        if (vB[i] == vC[j]) {
            repete = true
            break
        }
    }

    if (!repete) {
        vC[vC.length] = vB[i]
    }

}

console.log("Vetor C (União):", vC)
