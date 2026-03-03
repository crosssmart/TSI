const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite a N1: "));
let n2 = Number(prompt("Digite a N2: "));

let media = (n1 + n2) / 2

if (media >= 6.0) {
    console.log("Aprovado!");
} else if (media >= 5.0 && media <= 5.99) {
    console.log("Recuperação!");
} else {
    console.log("Reprovado!");
}