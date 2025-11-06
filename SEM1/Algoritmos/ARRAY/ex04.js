const prompt = require("prompt-sync")()

let v = []
let media = 0
let total = 0
for (let i = 0; i < 5; i++) {
    v[i] = Number(prompt("Digite a nota: "))
    total += v[i]
}

media = total / v.length

console.log("A média é:", media.toFixed(1));
