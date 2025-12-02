const prompt = require("prompt-sync")()

let m = []
let simetria = false

for (let l = 0; l < 3; l++) {
    m[l] = []
    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

console.log("Matriz:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}


for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
        if (m[l][c] == m[c][l]) {
            simetria = true
        } else {
            simetria = false
            break
        }
    }
}


if (simetria) {
    console.log("A matriz é simétrica.");
} else {
    console.log("A matriz não é simétrica.");
}