const prompt = require("prompt-sync")()

let v = []
let qntPares = 0

for (let i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite o número: "))

    if (v[i] % 2 == 0) {
        qntPares++
    }
}

console.log("O vetor possui", qntPares, "valores pares.");

