const prompt = require("prompt-sync")()

let media = Number(prompt("Digite a média do aluno: "))

if(media >= 6) {
    console.log("Aprovado");
    
} else {
    console.log("Reprovado");
    
}