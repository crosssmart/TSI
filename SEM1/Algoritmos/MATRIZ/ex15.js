const prompt = require("prompt-sync")()

let a = []
let b = []
let mSoma = []

// Fazer as matrizes A e B
for (let l = 0; l < 3; l++) {
    a[l] = []
    for (let c = 0; c < 3; c++) {
        a[l][c] = Number(prompt("Digite o valor para a posição A[" + l + "][" + c + "]: "))
    }
}

for (let l = 0; l < 3; l++) {
    b[l] = []
    for (let c = 0; c < 3; c++) {
        b[l][c] = Number(prompt("Digite o valor para a posição B[" + l + "][" + c + "]: "))
    }
}

// Mostrar as matrizes
console.log("Matriz A:");
for (let l = 0; l < a.length; l++) {
    console.log(a[l]);
}

console.log("\nMatriz B:");
for (let l = 0; l < b.length; l++) {
    console.log(b[l]);
}

// Fazer a Matriz soma
for (let l = 0; l < 3; l++) {
    mSoma[l] = []
    for (let c = 0; c < 3; c++) {
        mSoma[l][c] = a[l][c] + b[l][c]
    }
}


// Mostrar
console.log("Matriz Resultante (A + B):");
for (let l = 0; l < mSoma.length; l++) {
    console.log(mSoma[l]);
}



