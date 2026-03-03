const prompt = require("prompt-sync")();

let peso, altura;

peso = Number(prompt("Digite o peso(kg): "))
altura = Number(prompt("Digite a altura(m): "))

let imc = peso / (altura ** 2)

console.log("O IMC é:", imc.toFixed(2));
