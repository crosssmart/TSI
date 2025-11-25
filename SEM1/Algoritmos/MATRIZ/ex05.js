const prompt = require("prompt-sync")()

let m = []

for (let l = 0; l < 2; l++) {
    m[l] = []

    for (let c = 0; c < 2; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

let nMult = Number(prompt("Digite o multiplicador: "))

for (let l = 0; l < 2; l++) {
    for (let c = 0; c < 2; c++) {
        m[l][c] = m[l][c] * nMult
    }
}

console.log("Matriz Resultante:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}
