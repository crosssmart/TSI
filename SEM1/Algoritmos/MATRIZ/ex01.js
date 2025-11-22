const prompt = require("prompt-sync")()


let m = []

for (let l = 0; l < 2; l++) {
    m[l] = []

    for (let c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

console.log("Matriz Digitada:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}
