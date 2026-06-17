const meuCarroJSON = `{
 "marca": "Ford",
 "modelo": "Fusion",
 "ano": 2018,
 "cor": "Preto"
}`;


const meuCarroObj = JSON.parse(meuCarroJSON);

meuCarroObj.cor = "Prata"
meuCarroObj.quilometragem = 50000

const NOVOmeuCarroJSON = JSON.stringify(meuCarroObj, null, 2)

console.log(NOVOmeuCarroJSON);
