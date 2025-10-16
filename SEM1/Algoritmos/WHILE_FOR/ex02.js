const prompt = require("prompt-sync")()

let numero, qnt

numero = Number(prompt("Quantos números ímpares você quer exibir? "))
qnt = 0

for (let i = 0; qnt < numero; i++) {
    if (i % 2 !== 0) {
        qnt++
        console.log(i);
    }
}

