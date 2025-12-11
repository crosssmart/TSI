const prompt = require("prompt-sync")()

let m = []
let invertido = [[], [], [], []]

// Matriz 1
for (let l = 0; l < 4; l++) {
    m[l] = []
    for (let c = 0; c < 4; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

// Cáculo
for (let l = 0; l < 4; l++) {
    for (let c = 0; c < 4; c++) {
        invertido[m.length - 1 - l][c] = m[l][c]
    }
}

// Matrizes
console.log("Matriz");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

console.log("\nMatriz Invertida");
for (let l = 0; l < invertido.length; l++) {
    console.log(invertido[l]);
}