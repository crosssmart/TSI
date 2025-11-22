const prompt = require("prompt-sync")()


let m = []

for (let l = 0; l < 3; l++) {
    m[l] = []

    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite um número M[" + l + "][" + c + "]: "))
    }
}

console.log("Matriz:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}


