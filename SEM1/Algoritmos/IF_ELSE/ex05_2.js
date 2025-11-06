const prompt = require("prompt-sync")()

let num1, num2, num3, aux

num1 = Number(prompt("Digite o primeiro número: "))
num2 = Number(prompt("Digite o segundo número: "))
num3 = Number(prompt("Digite o terceiro número: "))

if (num1 > num2) {
    aux = num1
    num1 = num2
    num2 = aux
}
if (num2 > num3) {
    aux = num2
    num2 = num3
    num3 = aux
}
if (num1 > num2) {
    aux = num1
    num1 = num2
    num2 = aux
}

console.log("Os números em ordem crescente são: " + num1 + " " + num2 + " " + num3 + ".");
