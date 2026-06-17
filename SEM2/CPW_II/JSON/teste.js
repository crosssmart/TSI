const dadosUsuarioJSON = `{
"nome": "Alice",
"idade": 30,
"cidade": "Nova York"
}`;

console.log(typeof dadosUsuarioJSON);

const usuarioObj = JSON.parse(dadosUsuarioJSON);
console.log(typeof usuarioObj);


usuarioObj.idade = 31;
usuarioObj.profissao = "desenvolvedora";

const novoDadosUsuarioJSON = JSON.stringify(usuarioObj, null, 2);

console.log("\nNovo JSON gerado");
console.log(novoDadosUsuarioJSON);

console.log('Tipo do novo JSON:', typeof novoDadosUsuarioJSON);




