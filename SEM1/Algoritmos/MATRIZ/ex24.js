const prompt = require("prompt-sync")()

let l, c
let m = []

for (l = 0; l < 3; l++) {
    m[l] = []
    for (c = 0; c < 3; c++) {
        m[l][c] = Number(prompt("Digite o valor para a posição M[" + l + "][" + c + "]: "))
    }
}


for (l = 0; l < 3; l++) {
    for (c = 0; c < 3; c++) {
        // Considera todos os elementos como pontoCela até que se prove o contrário
        let pontoCela = true

        // Coluna
        // Mantem a linha e anda na coluna
        for (c_pontoCela = 0; c_pontoCela < 3; c_pontoCela++) {
            if (m[l][c] > m[l][c_pontoCela]) {
                pontoCela = false
            }
        }

        // linha
        // Mantem a coluna e anda na linha
        for (l_pontoCela = 0; l_pontoCela < 3; l_pontoCela++) {
            if (m[l][c] < m[l_pontoCela][c]) {
                pontoCela = false
            }
        }

        // Se for mostra
        if (pontoCela == true) {
            console.log(m[l][c], "é Ponto de Cela");
        }
    }
}

console.log("Matriz");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}