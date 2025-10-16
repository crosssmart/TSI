const prompt = require("prompt-sync")()

let pares, impares, qntPar, qntImp, mediaPar, qntGeral, mediaGeral, n, numeros

pares = 0
impares = 0
qntImp = 0
qntPar = 0
mediaPar = 0
mediaGeral = 0
n = null
numeros = 0

for (let i = 0; n != 0; i++) {
    n = Number(prompt("Digite um número (ou 0 para sair): "))
    numeros += n
    if (n !== 0) {
        qntGeral = i
        if (n % 2 === 0) {
            pares += n
            qntPar++
        } else {
            impares += n
            qntImp++
        }
    }
}

mediaPar = pares / qntPar
mediaGeral = numeros / qntGeral

console.log("Total de números pares:", qntPar);
console.log("Total de números impares", qntImp);
console.log("Média dos valores pares:", mediaPar.toFixed(1));
console.log("Média geral:", mediaGeral.toFixed(1));





