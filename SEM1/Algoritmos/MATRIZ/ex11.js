const prompt = require("prompt-sync")()

let m = []

let modes = ["Matriz Triangular Superior", "Matriz Triangular Inferior", "Nenhuma das opções"]

for (let l = 0; l < 3; l++) {
    m[l] = []

    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

let qual = 2
for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
        if (l == 0 && c > 0) {
            if (m[l][c] == 0) {
                qual = 0
            }
        }

        if (c == 0 && l > 0) {
            if (m[l][c] == 0) {
                qual = 1
            }
        }
    }
}


console.log(modes[qual]);
