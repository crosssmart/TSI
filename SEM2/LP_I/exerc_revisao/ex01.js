const prompt = require("prompt-sync")();

let num = prompt(Number("Digite o primeiro número: "));
let num2 = prompt(Number("Digite o segundo número: "));

if (num == num2) {
    console.log("São iguais!");
} else {
    console.log("São diferentes!");
}
