const prompt = require("prompt-sync")();

let aprovado = false

let media = 0;
let n1 = 0; let n2 = 0;

while (aprovado == false) {
    n1 = Number(prompt("Digite a N1: "))
    n2 = Number(prompt("Digite a N2: "))

    media = (n1 + n2) / 2

    if (media >= 6) {
        aprovado = true
        console.log("Média:", media);
        console.log("Aprovado!");

    } else {
        aprovado = false
        console.log("Média:", media);
        console.log("Não está Aprovado, insira novamente!\n");
    }
}