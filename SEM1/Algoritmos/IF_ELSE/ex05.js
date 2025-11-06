const prompt = require("prompt-sync")()

let num1, num2, num3

num1 = Number(prompt("Digite o primeiro número: "))
num2 = Number(prompt("Digite o segundo número: "))
num3 = Number(prompt("Digite o terceiro número: "))


if (num1 < num2 && num1 < num3) {
    if (num2 < num3) {
        console.log("// Os números em ordem crescente são: " + num1 + " " + num2 + " " + num3 + ".")
    } else {
        console.log("// Os números em ordem crescente são: " + num1 + " " + num3 + " " + num2 + ".")
    }
} else if (num2 < num1 && num2 < num3) {
    if (num1 < num3) {
        console.log("// Os números em ordem crescente são: " + num2 + " " + num1 + " " + num3 + ".")
    } else {
        console.log("// Os números em ordem crescente são: " + num2 + " " + num3 + " " + num1 + ".")
    }
} else if (num3 < num2 && num3 < num1) {
    if (num1 < num2) {
        console.log("// Os números em ordem crescente são: " + num3 + " " + num1 + " " + num2 + ".")
    } else {
        console.log("// Os números em ordem crescente são: " + num3 + " " + num2 + " " + num1 + ".")
    }
}


// Os números em ordem crescente são: 10, 20, 30.