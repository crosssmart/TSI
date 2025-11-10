const prompt = require("prompt-sync")()

let v = []
let i
let pos = -1
for (i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite um número: "))
}

let numBusc = Number(prompt("Digite o número a ser buscado (X): "))

for (i = 0; i < 10; i++) {
    if (numBusc === v[i]) {
        pos = i
    }
}
if (pos !== -1) {
    console.log("Número", numBusc, "encontrado na posição:", pos)
} else {
    console.log(pos)
}

