const prompt = require("prompt-sync")()

let m = []
let somaDiag = 0
for (let l = 0; l < 4; l++) {
    m[l] = []

    for (let c = 0; c < 4; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
        if (l == c) {
            somaDiag += m[l][c]
        }
    }
}

console.log("Matriz:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

console.log("A soma dos  elementos da diagonal principal é:", somaDiag);
