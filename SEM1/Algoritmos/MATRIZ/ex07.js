const prompt = require("prompt-sync")()

let m = []

for (let l = 0; l < 3; l++) {
    m[l] = []

    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

console.log("Matriz Entrada:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

for (let l = 0; l < 3; l++) {
    for (let c = 0; c < 3; c++) {
        if (m[l][c] < 0) {
            m[l][c] = 0
        }
    }
}

console.log("Matriz Modificada:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}