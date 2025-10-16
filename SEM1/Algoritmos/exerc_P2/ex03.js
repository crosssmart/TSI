const prompt = require("prompt-sync")()

let salario, calculo

salario = Number(prompt("Digite seu salário: "))

calculo = salario * (11 / 100)

if (calculo >= 318.20) {
    console.log("O desconto previdenciário é de R$ 318.20")
} else {
    console.log("O desconto previdenciário é de R$ " + calculo.toFixed(2))
}