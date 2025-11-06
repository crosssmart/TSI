const prompt = require("prompt-sync")()

let v = []
let pares = []
let impares = []
let i, ipar, iImpar
for (i = 0; i < 10; i++) {
    v[i] = Number(prompt("Digite um número: "))

    if (v[i] % 2 == 0) {
        pares.push(v[i])
    } else {
        impares.push(v[i])
    }
}

//ou

// for (i = 0; i < 10; i++) {
//     if (v[i] % 2 == 0) {
//         pares[ipar] = v[i]
//         ipar++
//     } else {
//         impares[iImpar]= v[i]
//         iImpar++
//     }
// }

console.log("Vetor Original:", v);
console.log("Vetor Pares:", pares);
console.log("Vetor Ímpares:", impares);




