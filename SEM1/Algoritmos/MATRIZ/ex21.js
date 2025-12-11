const prompt = require("prompt-sync")()

let l, c
let m = []
let somaMagica = 0, soma = 0, magicSquare = true

for (l = 0; l < 3; l++) {
    m[l] = []
    for (c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}

// Cálculo
for (c = 0; c < 3; c++) {
    somaMagica = somaMagica + m[0][c]
}


// Linhas
for (l = 0; l < 3; l++) {
    soma = 0
    for (c = 0; c < 3; c++) {
        soma = soma + m[l][c]
    }

    if (soma != somaMagica) {
        magicSquare = false
    }
}

// Colunas

for (c = 0; c < 3; c++) {
    soma = 0
    for (l = 0; l < 3; l++) {
        soma = soma + m[l][c]
    }

    if (soma != somaMagica) {
        magicSquare = false
    }
}

// Diagonais

soma = 0
for (c = 0; c < 3; c++) {
    for (l = 0; l < 3; l++) {
        if (l == c) {
            soma = soma + m[l][c]
        }
    }
}

if (soma != somaMagica) {
    magicSquare = false
}

soma = 0
for (c = 0; c < 3; c++) {
    for (l = 0; l < 3; l++) {
        if (l + c == 3 - 1) {
            soma = soma + m[l][c]
        }
    }
}

if (soma != somaMagica) {
    magicSquare = false
}


console.log("Matriz");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

console.log("A soma mágica é", somaMagica)


if (magicSquare == true) {
    console.log("A matriz é um Quadrado Mágico!")
} else {
    console.log("A matriz não é um Quadrado Mágico!")
}


// --- Entrada-- -
// [2, 7, 6]
// [9, 5, 1]
// [4, 3, 8]
// ---
// Saída no Console:
// A soma mágica é 15.
// A matriz É um Quadrado Mágico!