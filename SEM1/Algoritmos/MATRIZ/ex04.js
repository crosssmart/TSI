const prompt = require("prompt-sync")()


let m = []
let posL = 0, posC = 0

for (let l = 0; l < 3; l++) {
    m[l] = []

    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite um número M[" + l + "][" + c + "]: "))
    }
}

for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
        if (m[l][c] > m[posL][posC]) {
            posL = l
            posC = c
        }
    }
}

console.log("Matriz:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}
console.log("O maior valor é", m[posL][posC], "e está na posição [" + posL + "][" + posC + "].");

