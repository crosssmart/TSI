const prompt = require("prompt-sync")()

let m = []
let soma = 0
for (let l = 0; l < 3; l++) {
    m[l] = []

    for (let c = 0; c < 4; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
        soma += m[l][c]
    }
}

console.log("A soma de todos os elementos da matriz é:", soma)
