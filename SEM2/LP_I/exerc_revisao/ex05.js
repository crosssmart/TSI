const prompt = require("prompt-sync")();

let ddd = Number(prompt("Digite um DDD: "))

switch (ddd) {
    case 11:
        console.log("São Paulo!");
        break;

    case 21:
        console.log("Rio de Janeiro!");
        break;

    case 31:
        console.log("Belo Horizonte!");
        break;

    case 61:
        console.log("Distrito Federal!");
        break;

    case 41:
        console.log("Curitiba!");
        break;

    case 51:
        console.log("Porto Alegre!");
        break;

    default:
        console.log("no momento sem essa opção...");
        break;
}