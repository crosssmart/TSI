const prompt = require("prompt-sync")()

let m = []

for (let l = 0; l < 4; l++) {
    m[l] = []
    for (let c = 0; c < 4; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

console.log("Matriz Original:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

let t = []

for (let l = 0; l < 4; l++) {
    t[l] = []
    for (let c = 0; c < 4; c++) {
        t[l][c] = m[c][l]
    }
}

console.log("\nMatriz Transposta:");
for (let l = 0; l < t.length; l++) {
    console.log(t[l]);
}