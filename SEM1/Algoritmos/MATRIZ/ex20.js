const prompt = require("prompt-sync")()

let m = []

for (let l = 0; l < 5; l++) {
    m[l] = []
    for (let c = 0; c < 5; c++) {
        if (l == c || (l + c) % 2 == 0)
            m[l][c] = 1
        else {
            m[l][c] = 0
        }
    }
}

console.log("Matriz:");
for (let l = 0; l < m.length; l++) {
    console.log(m[l]);
}

// 00  02  04
//   11  13
// 20  22  24
//   31  33
// 40  42  44