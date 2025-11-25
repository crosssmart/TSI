const prompt = require("prompt-sync")()

let m = []

for (let l = 0; l < 3; l++) {
    m[l] = []

    for (let c = 0; c < 4; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

let numNeg = 0

for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 4; c++) {
        if (m[l][c] < 0) [
            numNeg++
        ]
    }
}

if (numNeg !== 1) {
    console.log("A matriz possui", numNeg, "números negativos.");
} else {
    console.log("A matriz possui", numNeg, "número negativo.");
}

