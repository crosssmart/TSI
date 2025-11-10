const prompt = require("prompt-sync")()

let v = []
let i

for (i = 0; i < 8; i++) {
    v[i] = Number(prompt("Digite um número: "))
}

let posX = Number(prompt("Digite a primeira posição [X] (0-7): "))
let posY = Number(prompt("Digite a segunda posição [Y] (0-7): "))

let soma = v[posX] + v[posY]

console.log("A soma dos valores nas posições", posX, "e", posY, "é:", soma)