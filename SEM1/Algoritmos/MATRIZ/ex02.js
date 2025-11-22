const prompt = require("prompt-sync")()


let m = []
let maior = 0

for (let l = 0; l < 3; l++) {
    m[l] = []

    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite um número M[" + l + "][" + c + "]: "))

        if (maior < m[l][c]) {
            maior = m[l][c]
        }
    }
}

console.log("Matriz:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

console.log("o maior valor na matriz é:", maior)

