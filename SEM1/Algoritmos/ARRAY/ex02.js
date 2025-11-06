const prompt = require("prompt-sync")()

let v = []

for (let i = 0; i < 8; i++) {
    v[i] = Number(prompt("Digite o número: "))
}

for (let i = 7; i > -1; i--) {
    console.log(v[i]);
}