const prompt = require("prompt-sync")()

let m = []
let soma = 0
let media = 0

for (let l = 0; l < 3; l++) {
    m[l] = []
    for (let c = 0; c < 4; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))

        soma += m[l][c]

        if (l == 2 && c == 3) {
            media = soma / ((l + 1) * (c + 1))
        }
    }
}

console.log("A média dos valores da matriz é:", media.toFixed(1));
