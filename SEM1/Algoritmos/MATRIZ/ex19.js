const prompt = require("prompt-sync")()

let m = []

for (let l = 0; l < 3; l++) {
    m[l] = []
    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

console.log("Matriz Original:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

let r = []

for (let c = 0; c < 3; c++) {
    r[c] = []
    for (let l = 0; l < 3; l++) {
        r[c][m.length - 1 - l] = m[l][c]
    }
}

console.log("\nMatriz Rotacionada 90°:");
for (let l = 0; l < r.length; l++) {
    console.log(r[l]);
}   