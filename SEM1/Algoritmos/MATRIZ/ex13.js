const prompt = require("prompt-sync")()

let m = []
let linhas = [0, 0, 0]

for (let l = 0; l < 3; l++) {
    m[l] = []
    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
        linhas[l] += m[l][c]
    }
}

console.log("Matriz:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

for (let l = 0; l < m.length; l++) {
    console.log("Soma da Linha", l, ":", linhas[l]);

}