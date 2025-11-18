const prompt = require("prompt-sync")()

let v = []
let i
let qnt = 0

for (i = 0; i < 20; i++) {
    v[i] = Number(prompt("Digite um número: "))
}

console.log("Contagem de Frequência:");

for (i = 0; i < 10; i++) {
    for (let j = 0; j < 20; j++) {
        if (i == v[j]) {
            qnt++
        }
    }

    if (i !== 1) {
        console.log(i, "apareceu", qnt, "vezes");
    } else {
        console.log(i, "apareceu", qnt, "vez");
    }

    qnt = 0

}