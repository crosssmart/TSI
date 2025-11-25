const prompt = require("prompt-sync")()

let listaNumeros = []
let num = 0

for (let i = 0; i < 15; i++) {
    num = Number(prompt("Digite um número: "))

    let repete = false

    for (let j = 0; j < listaNumeros.length; j++) {
        if (num === listaNumeros[j]) {
            repete = true
            break
        }
    }

    if (!repete) {
        listaNumeros.push(num)
    }

}

console.log(listaNumeros);
