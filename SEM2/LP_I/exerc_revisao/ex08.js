const prompt = require("prompt-sync")();

let tabNum = Number(prompt("Digite o número da respectiva Tabudada: "));

for (let i = 1; i < 11; i++) {
    let result = tabNum * i
    console.log(tabNum + "*" + i, "=", result);
}
