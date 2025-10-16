const prompt = require("prompt-sync")();

let num1, num2

num1 = Number(prompt("Digite o primeiro número: "))
num2 = Number(prompt("Digite o segundo número: "))

if (num1 === num2) {
    console.log("Os números são iguais.");
} else if (num1 > num2) {
    console.log("Os números são diferentes. O maior é " + num1 + " e o menor é " + num2 + ".");
} else {
    console.log("Os números são diferentes. O maior é " + num2 + " e o menor é " + num1 + ".");
}