const prompt = require("prompt-sync")()

let v = []
let neg = 0

for (let i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite o número: "))
    if (v[i] < 0) {
        neg++
    }
}



console.log("Foram digitados", neg, "números negativos.");