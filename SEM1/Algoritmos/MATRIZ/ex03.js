const prompt = require("prompt-sync")()


let m = []
let qnt = 0
for (let l = 0; l < 4; l++) {
    m[l] = []

    for (let c = 0; c < 4; c++) {
        m[l][c] = Number(prompt("Digite um número M[" + l + "][" + c + "]: "))
        if (m[l][c] % 2 == 0) {
            qnt++
        }
    }
}

console.log("Matriz:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}
console.log("A matriz possui", qnt, "valores pares.");
