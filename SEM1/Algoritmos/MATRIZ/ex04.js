const prompt = require("prompt-sync")()

let m = []

for (let l = 0; l < 3; l++) {
    m[l] = []

    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

let numBuscador = Number(prompt("Digite o valor a ser buscado: "))
let encontrado = false
for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
        if (m[l][c] === numBuscador) {
            encontrado = true
            break
        }
    }
}

if (encontrado) {
    console.log("O valor", numBuscador, "foi Encontrado na matriz.")
} else {
    console.log("O valor", numBuscador, "Não foi Encontrado na matriz")
}

